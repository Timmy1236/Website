import m from "mithril";
import { getTranslation } from "../../shared/core/i18n.js";
import { parseBBCode } from "../../shared/utils/bbcode.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { onPage404 } from "../../shared/handlers/achievements-trigger.ts";

const Page404 = {
  oncreate() {
    setCurrentPath(m.route);
    onPage404();
  },

  view: function () {
    return m(".content", [
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("p.text-title", getTranslation("404.title")),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ]),

          m(".panel-content", [
            m("div", { style: "display: flex;" }, [
              m("p", m.trust(parseBBCode(getTranslation("404.description"))))
            ]),
          ])
        ])
      ]),
    ])
  }
};

export default Page404;