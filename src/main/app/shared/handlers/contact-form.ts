import m from "mithril";
import { showToast } from "../components/toast.ts";
import { cLog } from "../utils/clog.ts";

const CONTACT_WORKER_URL = "https://webhook.timmy1236.workers.dev/";
const MAX_USERNAME_LENGTH = 100;
const MAX_CONTACT_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 500;

export const contactState = {
  form: {
    username: "",
    contact: "",
    message: ""
  },
  submitting: false
};

export async function sendContactForm(): Promise<void> {
  if (contactState.submitting) return;

  const username = contactState.form.username.trim();
  const contact = contactState.form.contact.trim();
  const message = contactState.form.message.trim();

  if (!username) {
    showToast({ type: "error", playSound: true, name: "toast.pages.contact.error", desc: "toast.pages.contact.usernameRequired" });
    return;
  }

  if (!message) {
    showToast({ type: "error", playSound: true, name: "toast.pages.contact.error", desc: "toast.pages.contact.messageRequired" });
    return;
  }

  if (contact.length > MAX_CONTACT_LENGTH || message.length > MAX_MESSAGE_LENGTH || username.length > MAX_USERNAME_LENGTH) {
    showToast({ type: "error", playSound: true, name: "toast.pages.contact.error", desc: "toast.pages.contact.tooLong" });
    return;
  }

  contactState.submitting = true;
  m.redraw();

  try {
    const response = await fetch(CONTACT_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, contact, message })
    });

    await response.text();

    if (!response.ok) {
      showToast({ type: "error", playSound: true, name: "toast.pages.contact.error", desc: "toast.pages.contact.sendFailed" });
      return;
    }

    contactState.form.username = "";
    contactState.form.contact = "";
    contactState.form.message = "";
    showToast({ type: "affirmative", playSound: true, name: "toast.pages.contact.sent", desc: "toast.pages.contact.sentDescription" });
  }
  catch (error) {
    cLog("ERROR", "contact-form", "Error al enviar el formulario", error);
    showToast({ type: "error", playSound: true, name: "toast.pages.contact.error", desc: "toast.pages.contact.connectionFailed" });
  }
  finally {
    contactState.submitting = false;
    m.redraw();
  }
}
