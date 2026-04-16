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
          m("p.text-title", "Logros"),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ]),

        m(".panel-content", [
          m(".achievements-list",
            list.map((achievement: any) =>
              m(".achievement-card", {
                // Agregamos clase "unlocked" si está desbloqueado
                class: achievement.unlocked ? "unlocked" : ""
              }, [
                m(".achievement-icon", achievement.unlocked ? "★" : "☆"),

                m(".achievement-info", [
                  m("h2.achievement-name",
                    // Si es secreto y no está desbloqueado, ocultamos el nombre
                    achievement.secret && !achievement.unlocked ? "???" : achievement.name
                  ),
                  m("p.achievement-desc",
                    achievement.secret && !achievement.unlocked
                      ? "Logro secreto. Sigue explorando..."
                      : achievement.description
                  ),
                  achievement.unlocked && achievement.date
                    ? m("p.achievement-date", `Desbloqueado: ${achievement.date}`)
                    : null
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