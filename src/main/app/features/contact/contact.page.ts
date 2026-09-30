import m from "mithril";
import { getTranslation } from "../../shared/core/i18n.js";
import { parseBBCode } from "../../shared/utils/bbcode.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { panel } from "../../shared/components/panels.ts";
import { contactState, sendContactForm } from "../../shared/handlers/contact-form.ts";

// Super protección anti bot scrapper 3000
// NOTE: No es lo mejor, pero obliga interactuar con la pagina en vez de que este escrito de forma raw en HTML, incluido en el mismo código, por eso hay tantos .replace
let rev1: boolean;
let rev2: boolean;

function reveal(email: string) {
  if (email === "proton") {
    const email1 = document.getElementById("email1");
    if (email1 && !rev1) {
      email1.style.pointerEvents = "none";
      rev1 = true;

      const w = email1.textContent.replace("#t#", "timmy1236@");
      const t = w.replace("#p#", "proton");
      const f = t.replace("#m#", ".me");
      email1.textContent = f;
    }
  }
  else {
    const email = document.getElementById("email2");
    if (email && !rev2) {
      email.style.pointerEvents = "none";
      rev2 = true;

      const w = email.textContent.replace("#t#", "timmy.1236@");
      const t = w.replace("#o#", "outlook");
      const f = t.replace("#c#", ".com");
      email.textContent = f;
    }
  }
}

const Contact = {
  oninit() {
    rev1 = false;
    rev2 = false;
  },

  oncreate() {
    setCurrentPath(m.route, "contact");
  },

  view: function () {
    return m(".content", [
      m(".panel-grid-2", {
        style: "--panel-col-1:1fr; --panel-col-2:1fr;"
      }, [

        // ==== CONTACT FORUM ====
        m(panel, {
          title: getTranslation("main.contact.windows.form.title"),
          content: [
            m("form.contact-form", {
              onsubmit: (event: SubmitEvent) => {
                event.preventDefault();
                void sendContactForm();
              }
            }, [
              m("div.contact-field", [
                m("label", { for: "contact-username" }, getTranslation("main.contact.windows.form.content.labelUsername")),
                m("input#contact-username", {
                  type: "text",
                  maxlength: 100,
                  required: true,
                  autocomplete: "username",
                  value: contactState.form.username,
                  oninput: (event: Event) => {
                    contactState.form.username = (event.target as HTMLInputElement).value;
                  }
                })
              ]),
              m("div.contact-field", [
                m("label", { for: "contact-contact" }, getTranslation("main.contact.windows.form.content.labelContact")),
                m("input#contact-contact", {
                  type: "text",
                  maxlength: 100,
                  autocomplete: "email",
                  placeholder: getTranslation("main.contact.windows.form.content.placeholderContact"),
                  value: contactState.form.contact,
                  oninput: (event: Event) => {
                    contactState.form.contact = (event.target as HTMLInputElement).value;
                  }
                })
              ]),
              m("div.contact-field", [
                m("label", { for: "contact-message" }, getTranslation("main.contact.windows.form.content.labelMessage")),
                m("textarea#contact-message", {
                  maxlength: 500,
                  required: true,
                  placeholder: getTranslation("main.contact.windows.form.content.placeholderMessage"),
                  value: contactState.form.message,
                  oninput: (event: Event) => {
                    contactState.form.message = (event.target as HTMLTextAreaElement).value;
                  }
                }),
                m("span.contact-counter", `${contactState.form.message.length} / 500`)
              ]),
              m("button.button.contact-submit", {
                type: "submit",
                disabled: contactState.submitting
              }, contactState.submitting
                ? getTranslation("main.contact.windows.form.content.sending")
                : getTranslation("main.contact.windows.form.content.submit"))
            ])
          ]
        }),

        // ==== EMAIL & SOCIALS ====
        m(panel, {
          title: getTranslation("main.contact.windows.socials.title"),
          content: [
            m("p", m.trust(parseBBCode(getTranslation("main.contact.windows.socials.content.description")))),
            m("p", m.trust(parseBBCode(getTranslation("main.contact.windows.socials.content.email")))),
            m("a.link#email1", {
              onclick: function () { reveal("proton"); }, "data-tooltip-i18n": "tooltip.contact.correo"
            }, "#t##p##m#"),
            m("a.link#email2", {
              onclick: function () { reveal("outlook"); }, "data-tooltip-i18n": "tooltip.contact.correo"
            }, "#t##o##c#"),
            m("p", m.trust(parseBBCode(getTranslation("main.contact.windows.socials.content.discord")))),
            m("a.link", { href: "https://discordapp.com/users/375889010419171328" }, "@timmy1236")
          ]
        })
      ])
    ]);
  }
};

export default Contact;
