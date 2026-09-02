import m from "mithril";
import { showToast } from "../components/toast.ts";

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

function showFormToast(type: "error" | "affirmative", titleKey: string, descriptionKey: string) {
  showToast(type, type === "affirmative", titleKey, true, descriptionKey, true);
}

export async function sendContactForm(): Promise<void> {
  if (contactState.submitting) return;

  const username = contactState.form.username.trim();
  const contact = contactState.form.contact.trim();
  const message = contactState.form.message.trim();

  if (!username) {
    showFormToast("error", "contact.toast.error", "contact.toast.usernameRequired");
    return;
  }

  if (!message) {
    showFormToast("error", "contact.toast.error", "contact.toast.messageRequired");
    return;
  }

  if (contact.length > MAX_CONTACT_LENGTH || message.length > MAX_MESSAGE_LENGTH || username.length > MAX_USERNAME_LENGTH) {
    showFormToast("error", "contact.toast.error", "contact.toast.tooLong");
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
      showFormToast("error", "contact.toast.error", "contact.toast.sendFailed");
      return;
    }

    contactState.form.username = "";
    contactState.form.contact = "";
    contactState.form.message = "";
    showFormToast("affirmative", "contact.toast.sent", "contact.toast.sentDescription");
  }
  catch (error) {
    console.error("contact-form> Error enviando formulario:", error);
    showFormToast("error", "contact.toast.error", "contact.toast.connectionFailed");
  }
  finally {
    contactState.submitting = false;
    m.redraw();
  }
}
