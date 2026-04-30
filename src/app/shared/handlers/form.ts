/*
 * form.ts
 * -------
 * Lógica para enviar el mensaje rápido, pero la otra parte se hace en cloudflare que tiene el código del envió al webhook.
*/
import { showToast } from "../ui/toast";

export async function sendForm() {
  const contactElement = document.getElementById("contact") as HTMLInputElement;
  const messageElement = document.getElementById("message") as HTMLTextAreaElement;

  if (!contactElement || !messageElement) return;

  const contact = contactElement.value;
  const message = messageElement.value;

  if (!message) return showToast("Error", "error", "You can't send a empty message.");
  if (message.length == 1) return showToast("Error", "error", "cmon dawg, the message can't be literally a 1 single character.");
  if (message.length > 1000) return showToast("Error", "error", "Message to long. Max: 1000 Characters.");

  const response = await fetch("https://shy-haze-c01a.timmy1236.workers.dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contact, message })
  });

  const data = await response.json();

  if (!response.ok) {
    showToast("Error", "error", data.error)
    return;
  } else {
    showToast("Enviado", "affirmative", "Message sended!")
    contactElement.value = "";
    messageElement.value = "";
  }
}