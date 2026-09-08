const _imgIcon = (x: string) => `/assets/images/pages/webmaster/icons/${x}.svg`;
const _CoverGames = (x: string) => `/assets/images/pages/webmaster/covers/games/${x}.webp`;
const _CoverSeries = (x: string) => `/assets/images/pages/webmaster/covers/series/${x}.webp`;

interface tag {
  text: string
  icon: string
}

interface cover {
  title: string
  cover: string
  fact?: string
  link: string
}

export const tagLanguages: tag[] = [
  {
    text: "TypeScript",
    icon: _imgIcon("typescript")
  },
  {
    text: "JavaScript",
    icon: _imgIcon("javascript")
  },
  {
    text: "HTML",
    icon: _imgIcon("html")
  },
  {
    text: "CSS",
    icon: _imgIcon("css")
  },
  {
    text: "Java",
    icon: _imgIcon("openjdk")
  },
  {
    text: "C#",
    icon: _imgIcon("csharp")
  },
  {
    text: "GDScript",
    icon: _imgIcon("godotengine")
  },
  {
    text: "Python",
    icon: _imgIcon("python")
  },
  {
    text: "Lua",
    icon: _imgIcon("lua")
  }
];

export const tagInfra: tag[] = [
  {
    text: "Red Hat",
    icon: _imgIcon("redhat")
  },
  {
    text: "Debian",
    icon: _imgIcon("debian")
  },
  {
    text: "MySQL",
    icon: _imgIcon("mysql")
  },
  {
    text: "MariaDB",
    icon: _imgIcon("mariadb")
  },
  {
    text: "SQLite",
    icon: _imgIcon("sqlite")
  }
];

export const tagSoftware: tag[] = [
  {
    text: "Godot",
    icon: _imgIcon("godotengine")
  },
  {
    text: "Blender",
    icon: _imgIcon("blender")
  },
  {
    text: "Krita",
    icon: _imgIcon("krita")
  },
  {
    text: "Aseprite",
    icon: _imgIcon("aseprite")
  },
  {
    text: "SQLite",
    icon: _imgIcon("sqlite")
  }
];

export const gamesCover: cover[] = [
  {
    title: "Voices of The Void",
    cover: _CoverGames("votv"),
    fact: "tooltip.pages.webmaster.interests.votv",
    link: "https://mrdrnose.itch.io/votv"
  },
  {
    title: "Minecraft",
    cover: _CoverGames("minecraft"),
    fact: "tooltip.pages.webmaster.interests.minecraft",
    link: "https://namemc.com/profile/Timmy1236"
  },
  {
    title: "Hytale",
    cover: _CoverGames("hytale"),
    fact: "tooltip.pages.webmaster.interests.hytale",
    link: "https://hytl.tools/profile/timmy1236"
  },
  {
    title: "Terraria",
    cover: _CoverGames("terraria"),
    fact: "tooltip.pages.webmaster.interests.hytale",
    link: "https://store.steampowered.com/app/105600/terraria/"
  },
  {
    title: "Warframe",
    cover: _CoverGames("warframe"),
    fact: "tooltip.pages.webmaster.interests.warframe",
    link: "https://store.steampowered.com/app/230410/Warframe/"
  },
  {
    title: "Roblox",
    cover: _CoverGames("roblox"),
    fact: "tooltip.pages.webmaster.interests.roblox",
    link: "https://www.roblox.com/users/89179192/profile"
  },
  {
    title: "The Binding of Isaac Rebrith",
    cover: _CoverGames("isaac"),
    fact: "tooltip.pages.webmaster.interests.isaac",
    link: "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth"
  },
  {
    title: "Half-Life 2",
    cover: _CoverGames("hl2"),
    fact: "tooltip.pages.webmaster.interests.hl",
    link: "https://www.half-life.com/en/home/"
  },
  {
    title: "Team Fortress 2",
    cover: _CoverGames("tf"),
    fact: "tooltip.pages.webmaster.interests.tf",
    link: "https://www.teamfortress.com/"
  },
  {
    title: "Portal",
    cover: _CoverGames("portal1"),
    fact: "tooltip.pages.webmaster.interests.portal1",
    link: "https://www.thinkwithportals.com/index.php"
  },
  {
    title: "Portal 2",
    cover: _CoverGames("portal2"),
    fact: "tooltip.pages.webmaster.interests.portal2",
    link: "https://www.thinkwithportals.com/index.php"
  },
  {
    title: "SCP",
    cover: _CoverGames("scp"),
    fact: "tooltip.pages.webmaster.interests.scp",
    link: "https://scp-wiki.wikidot.com/"
  },
  {
    title: "Grand Theft Auto V",
    cover: _CoverGames("gtav"),
    fact: "tooltip.pages.webmaster.interests.gta",
    link: "https://www.rockstargames.com/es/gta-v"
  }
];

export const seriesMoviesCover: cover[] = [
  {
    title: "Tres Acordes",
    cover: _CoverSeries("tres-acordes"),
    link: "https://www.imdb.com/es/title/tt32792180/"
  },
  {
    title: "Smiling Friends",
    cover: _CoverSeries("smiling-friends"),
    link: "https://www.imdb.com/es/title/tt12074628/"
  },
  {
    title: "The Amazing Digital Circus",
    cover: _CoverSeries("tadc"),
    link: "https://www.imdb.com/es/title/tt27610198/"
  },
  {
    title: "Salad Fingers",
    cover: _CoverSeries("salad-fingers"),
    link: "https://www.imdb.com/es/title/tt1830238/"
  },
  {
    title: "Madness Combat",
    cover: _CoverSeries("madness-combat"),
    link: "https://www.imdb.com/es/title/tt2072604/"
  }
];
