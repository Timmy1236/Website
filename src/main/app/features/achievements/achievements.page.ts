import m from "mithril";
import { getAchievementsList } from "../../shared/core/achievements-logic.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { getTranslation } from "../../shared/core/i18n.ts";
import { showToast } from "../../shared/components/toast.ts";
import panel from "../../shared/components/panel.ts";

interface Achievement {
  id: string
  name: string
  description: string
  secret: boolean
  unlocked: boolean
}

const AchievementsPage = {
  oncreate() {
    setCurrentPath(m.route, "achievement");
    showToast("info", true, "W.I.P", false, "EXPERIMENTAL", false);
  },

  view: function () {
    const list = getAchievementsList();

    return m(".content", [
      m(panel, {
        title: getTranslation("achievements.title"),
        content: m(".achievements-list",
          list.map((achievement: Achievement) =>
            m(".achievement-card", { class: achievement.unlocked ? "unlocked" : "" }, [
              m(".achievement-icon", achievement.unlocked ? "?" : "?"),
              m(".achievement-info", [
                m("h2.achievement-name",
                  achievement.secret && !achievement.unlocked
                    ? getTranslation("achievements.secretName")
                    : getTranslation(achievement.name)
                ),
                m("p.achievement-desc",
                  achievement.secret && !achievement.unlocked
                    ? getTranslation("achievements.secretDescription")
                    : getTranslation(achievement.description)
                )
              ])
            ])
          )
        )
      })
    ]);
  }
};

export default AchievementsPage;
