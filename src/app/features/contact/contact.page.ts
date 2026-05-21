import m from "mithril";
import { refreshi18n } from "../../shared/core/i18n.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { sendForm, contactState } from "./contact.api.ts";

const Others = {
  oncreate() {
    setCurrentPath(m.route);
    refreshi18n();
  },

  view: function () {
    return m(".content", [
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("p.text-title", "Form"),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ]),

          m(".panel-content", [

            m(".contact", { style: "margin-bottom: 8px;" }, [
              m("label", { for: "contact", style: "display: block; margin-bottom: 4px;" }, "Contacto (opcional)"),
              m("input#contact", {
                type: "text",
                placeholder: "Una dirección o red donde pueda comunicar contigo.",
                value: contactState.form.contact,
                maxlength: 100,
                oninput: (e: Event) => {
                  contactState.form.contact = (e.target as HTMLInputElement).value;
                }
              }),
            ]),

            m(".message", { style: "margin-bottom: 12px;" }, [
              m("label", { for: "message", style: "display: block; margin-bottom: 4px;" }, "Mensaje"),
              m("textarea.message-form#message", {
                value: contactState.form.message,
                maxlength: 500,
                oninput: (e: Event) => {
                  contactState.form.message = (e.target as HTMLTextAreaElement).value;
                }
              }),

              m("p", {
                style: "font-size: 14px; opacity: 0.6; margin-top: 2px; text-align: right;"
              }, `${contactState.form.message.length} / 500`),
            ]),

            m("button.button", {
              disabled: contactState.submitting,
              style: contactState.submitting ? "opacity: 0.5;" : "",
              onclick: sendForm
            }, contactState.submitting ? "Enviando..." : "Enviar")
          ])
        ])
      ])
    ])
  }
};

export default Others;