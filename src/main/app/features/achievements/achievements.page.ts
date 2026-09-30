import m from "mithril";
import { getAchievementsList, AchievementDefinition } from "../../shared/core/achievements-logic.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { getTranslation } from "../../shared/core/i18n.ts";
import { panel } from "../../shared/components/panels.ts";

const AchievementsPage = {
  oncreate() {
    setCurrentPath(m.route, "achievement");
  },

  view: function () {
    const list = getAchievementsList();

    return m(".content", [
      m(panel, {
        title: getTranslation("achievements.title"),
        content: m(".achievements-list",
          list.map((achievement: AchievementDefinition) =>
            m(".achievement-card", { class: achievement.unlocked ? "unlocked" : "" }, [
              m("img.achievement-icon", { src: achievement.image }),
              m(".achievement-info", [
                m("h2.achievement-name", achievement.secret && !achievement.unlocked ? getTranslation("achievements.secretName") : getTranslation(achievement.name)),
                m("p.achievement-desc", achievement.secret && !achievement.unlocked ? getTranslation("achievements.secretDescription") : getTranslation(achievement.description)),
                achievement.maxProgress && !achievement.unlocked ? m("p.achievement-progress", `${achievement.progress}/${achievement.maxProgress}`) : null
              ])
            ])
          )
        )
      })
    ]);
  }
};

export default AchievementsPage;
