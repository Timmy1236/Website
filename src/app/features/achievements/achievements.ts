import m from "mithril";
import { getAchievementsList } from "../../shared/core/achievements-logic.ts";
import { refreshi18n } from "../../shared/core/i18n.js";
import { setCurrentPath } from "../../shared/core/html-meta.ts";

interface achievement {
  id: string;
  name: string;
  description: string;
  secret: boolean;
  unlocked: boolean;
}

const AchievementsPage = {
  oncreate() {
    setCurrentPath(m.route);
    refreshi18n();
  },

  view: function () {
    const list = getAchievementsList();

    return m(".content", [
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("p.text-title", "Logros (SUPER W.I.P)"),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ]),

          m(".panel-content", [
            m(".achievements-list",
              list.map((achievement: achievement) =>
                m(".achievement-card", { class: achievement.unlocked ? "unlocked" : "" }, [
                  m(".achievement-icon", achievement.unlocked ? "★" : "☆"),
                  m(".achievement-info", [
                    m("h2.achievement-name", achievement.secret && !achievement.unlocked ? "Logro secreto." : achievement.name),
                    m("p.achievement-desc", achievement.secret && !achievement.unlocked ? "¿?¿?¿?¿?¿?¿?¿?" : achievement.description)
                  ])
                ])
              )
            )
          ])
        ])
      ])
    ])
  }
};

export default AchievementsPage;