import m from "mithril";
import { getNekoStat } from "../core/nekoweb-stats";

const text = "timmy.nekoweb.org";

export default {
  view: () =>
    m(".banner-panel",
      m(".panel-frame", [
        m(".banner", [
          m("img.banner-bg", { alt: "A dithered image taken from the game Voices of the Void" }),

          m("p.banner-title",
            m(".wave-text",
              text.split("").map((char, i) =>
                m("span.wave-container", { style: { "--i": i } },
                  m("span.wave-text-letter", { "data-sound-hover": "banner" }, char)
                )
              )
            )
          ),

          m(".banner-stats", [
            m(".banner-stat", [
              m("img.stat-icon", { src: "/assets/images/icons/utils/user.png", alt: "followers" }),
              m("span", getNekoStat("followers")),
              m("a.stat-action", { href: "https://nekoweb.org/follow/timmy.nekoweb.org/", "data-tooltip-i18n": "tooltip.pages.others.follow" },
                m("img", { src: "/assets/images/icons/utils/follow.png", alt: "follow" })
              )
            ]),

            m(".banner-stat", [
              m("img.stat-icon", { src: "/assets/images/icons/utils/view.png", alt: "views" }),
              m("span", getNekoStat("views"))
            ])
          ])
        ])
      ])
    )
};