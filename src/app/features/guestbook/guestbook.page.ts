import m from "mithril";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { guestbookState, loadEntries, submitEntry, type GuestbookEntry } from "./guestbook.api.ts";

const form = {
  name: "",
  link: "",
  message: "",
};

// Sub Componente.
function EntryCard(entry: GuestbookEntry) {
  const date = new Date(entry.created_at).toLocaleDateString();

  return m(".panel-grid-2", {
    style: "--panel-col-1:250px; --panel-col-2:1fr;"
  }, [

    // PANEL | User
    m(".panel-frame", { key: entry.id }, [
      m(".panel", [
        m(".panel-header", [
          m("p", "User"),
        ]),

        m(".panel-content",
          m("div", {
            style: "display:flex;flex-direction: column;align-items:center;margin-top:10px;margin-bottom:5px;"
          }, [
            m("img", { src: "https://i.pinimg.com/736x/f8/bf/8c/f8bf8cc87267aa762b415b9d4f5fdb12.jpg", style: "width:128px;margin-bottom:10px;" }),
            m("p", { style: "font-size:32px;margin-bottom:5px;" }, entry.name),
            entry.link ? m("button.button", { onclick: () => { window.location.href = entry.link } }, "Website") : null
          ])
        ),
      ]),
    ]),

    // PANEL | Message
    m(".panel-frame", { key: entry.id }, [
      m(".panel", [
        m(".panel-header", [
          m("p", "Message"),

          m(".panel-controls",
            m("span", { style: "font-size: 18px; opacity: 0.6; padding: 0 4px;" }, date)
          ),
        ]),

        m(".panel-content",
          m("p", { "data-bbcode": true }, entry.message)
        ),
      ]),
    ]),
  ])
}

const GuestbookPage = {
  oncreate() {
    setCurrentPath(m.route);
    loadEntries();
  },

  view() {
    return m(".content", [
      // PANEL | Formulario
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("p.text-title", "Guestbook"),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X"),
            ]),
          ]),

          m(".panel-content", [
            // Nombre
            m("div", { style: "margin-bottom: 8px;" }, [
              m("label", { for: "gb-name", style: "display: block; margin-bottom: 4px;" }, "Nombre de Usuario"),
              m("input", {
                id: "gb-name",
                type: "text",
                maxlength: 100,
                value: form.name,
                oninput: (e: Event) => {
                  form.name = (e.target as HTMLInputElement).value;
                },
              }),
            ]),

            // Link (opcional)
            m("div", { style: "margin-bottom: 8px;" }, [
              m("label", { for: "gb-link", style: "display: block; margin-bottom: 4px;" }, "Link (opcional)"),
              m("input", {
                id: "gb-link",
                type: "text",
                placeholder: "https://?????.nekoweb.org",
                maxlength: 100,
                value: form.link,
                oninput: (e: Event) => {
                  form.link = (e.target as HTMLInputElement).value;
                },
              }),
            ]),

            // Mensaje
            m("div", { style: "margin-bottom: 12px;" }, [
              m("label", { for: "gb-message", style: "display: block; margin-bottom: 4px;" }, "Mensaje"),
              m("textarea.message-form#message", {
                id: "gb-message",
                maxlength: 500,
                value: form.message,
                oninput: (e: Event) => {
                  form.message = (e.target as HTMLTextAreaElement).value;
                },
              }),
              m("p", {
                style: "font-size: 14px; opacity: 0.6; margin-top: 2px; text-align: right;"
              }, `${form.message.length} / 500`),
            ]),

            // Botón de enviar
            m("button.button", {
              disabled: guestbookState.submitting,
              style: guestbookState.submitting ? "opacity: 0.5;" : "",
              onclick: async () => {
                const ok = await submitEntry(form.name, form.link, form.message);
                if (ok) {
                  form.name = "";
                  form.link = "";
                  form.message = "";
                }
              },
            }, guestbookState.submitting ? "Enviando..." : "Enviar"),
          ]),
        ]),
      ]),

      // Mensajes del guestbook.
      guestbookState.loading
        ? m("p", { style: "opacity: 0.6;" }, "Cargando mensajes...")
        : guestbookState.entries.length === 0
          ? m("p", { style: "opacity: 0.6;" }, "¿No hay mensajes? ¿O algo esta fallando?")
          : m(".content",
            guestbookState.entries.map((entry: GuestbookEntry) => EntryCard(entry))
          )
    ]);
  },
};

export default GuestbookPage;