/*
 * guestbook-api.ts
 * ----------------
 * Lógica para enviar y cargar entradas a través de Cloudflare Workers.
*/
import m from "mithril";
import { showToast } from "../../shared/components/toast.ts";

const WORKER_URL = "https://guestbook-worker.timmy1236.workers.dev";

export interface GuestbookEntry {
  id: number;
  name: string;
  link: string;
  message: string;
  created_at: string;
}

export const guestbookState = {
  entries: [] as GuestbookEntry[],
  loading: true,
  submitting: false,
};

/**
 * Carga las entradas aprobadas desde el Worker.
 * Llama a m.redraw() cuando termina para que Mithril actualice la vista.
 */
export async function loadEntries(): Promise<void> {
  guestbookState.loading = true;
  m.redraw();

  try {
    const res = await fetch(`${WORKER_URL}/entries`);
    const data = await res.json();
    guestbookState.entries = data.entries || [];
  } catch (e) {
    console.error("guestbook-api> Error cargando entradas:", e);
    showToast("Error", "error", "No se pudieron cargar los mensajes.", true);
  } finally {
    guestbookState.loading = false;
    m.redraw();
  }
}

/**
 * Envía una nueva entrada al Worker.
 * Devuelve true si tuvo éxito, false si falló.
 */
export async function submitEntry(name: string, link: string, message: string): Promise<boolean> {
  if (guestbookState.submitting) return false;

  // Validaciones básicas del lado cliente
  if (!name.trim()) {
    showToast("Error", "error", "El nombre no puede estar vació.", true);
    return false;
  }
  if (!message.trim()) {
    showToast("Error", "error", "El mensaje no puede estar vació.", true);
    return false;
  }
  if (message.trim().length > 500) {
    showToast("Error", "error", "Mensaje demasiado largo. Max: 500 Caracteres.", true);
    return false;
  }

  guestbookState.submitting = true;
  m.redraw();

  try {
    const res = await fetch(`${WORKER_URL}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), link: link.trim(), message: message.trim() }),
    });

    const data = await res.json();

    if (res.ok) {
      showToast("Enviado", "affirmative", data.message || "¡Mensaje enviado!", true);
      return true;
    } else {
      showToast("Error", "error", data.error || "Error al enviar.", true);
      return false;
    }
  } catch (e) {
    console.error("guestbook-api> Error enviando entrada:", e);
    showToast("Error", "error", "Error fatal.", true);
    return false;
  } finally {
    guestbookState.submitting = false;
    m.redraw();
  }
}