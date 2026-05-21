/*
 * form.ts
 * -------
 * Lógica para enviar el mensaje rápido a través de Cloudflare Workers.
 */
import m from "mithril";
import { showToast } from "../../shared/ui/toast";

const WORKER_URL = "https://shy-haze-c01a.timmy1236.workers.dev";

export const contactState = {
  form: {
    contact: "",
    message: "",
  },
  submitting: false,
};

export async function sendForm(): Promise<void> {
  if (contactState.submitting) return;

  const contact = contactState.form.contact.trim();
  const message = contactState.form.message.trim();

  // Validaciones del lado del cliente
  if (!message.trim()) {
    showToast("Error", "error", "El mensaje no puede estar vació.", true);
    return;
  }
  if (message.length < 10) {
    showToast("Error", "error", "Bro, el mensaje no puede ser tan corto.", true);
    return;
  }
  if (message.length > 500) {
    showToast("Error", "error", "Mensaje demasiado largo. Max: 500 Caracteres.", true);
    return;
  }

  contactState.submitting = true;
  m.redraw();

  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact, message })
    });

    const data = await response.json();

    if (!response.ok) {
      showToast("Error", "error", data.error || "Algo salio mal.", true);
    } else {
      showToast("Enviado", "affirmative", "Mensaje enviado!", true);

      contactState.form.contact = "";
      contactState.form.message = "";
    }
  } catch (error) {
    console.error("contact-form> Error enviando formulario:", error);
    showToast("Error", "error", "Error fatal.", true);
  } finally {
    contactState.submitting = false;
    m.redraw();
  }
}