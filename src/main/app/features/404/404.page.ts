import m from "mithril";
import { getTranslation } from "../../shared/services/i18n.ts";
import { parseBBCode } from "../../shared/utils/bbcode.ts";
import { setCurrentPath } from "../../shared/services/html-meta.ts";
import { onPage404 } from "../../shared/handlers/achievements-trigger.ts";
import { panel } from "../../shared/components/panels.ts";

const Page404 = {
  oncreate() {
    setCurrentPath(m.route, "no-icon");
    onPage404();
  },

  view: function () {
    return m(".content", [
      m(panel, {
        title: getTranslation("main.404.windows.error.title"),
        content: [
          m("p", m.trust(parseBBCode(getTranslation("main.404.windows.error.description"))))
        ]
      })
    ]);
  }
};

export default Page404;
