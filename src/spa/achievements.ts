import m from "mithril";
import { getAchievementsList } from "../core/achievements-logic.ts";
import { refreshi18n } from "../core/i18n.js";

const AchievementsPage = {
  oncreate() {
    refreshi18n();
  },

  view: function () {
    const list = getAchievementsList();

    return m(".content", [
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
            list.map((achievement: any) =>
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
    ]);
  }
};

export default AchievementsPage;