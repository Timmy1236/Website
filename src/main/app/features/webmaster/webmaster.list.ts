const _imgIcon = (x: string) => `/assets/images/pages/webmaster/icons/${x}.svg`;

function _createCover(name: string, category: string, preview: boolean) {
  if (!preview) {
    return `/assets/images/pages/webmaster/covers/${category}/${name}.webp`;
  }
  else {
    return `/assets/images/pages/webmaster/covers/${category}/preview_${name}.webp`;
  }
}

interface tag {
  text: string
  icon: string
}

interface cover {
  title: string
  cover: string
  coverPreview: string
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
  }
];

export const gamesCover: cover[] = [
  {
    title: "Voices of The Void",
    cover: _createCover("votv", "games", false),
    coverPreview: _createCover("votv", "games", true),
    fact: "main.webmaster.windows.interest.gallery.votv",
    link: "https://mrdrnose.itch.io/votv"
  },
  {
    title: "Minecraft",
    cover: _createCover("minecraft", "games", false),
    coverPreview: _createCover("minecraft", "games", true),
    fact: "main.webmaster.windows.interest.gallery.minecraft",
    link: "https://namemc.com/profile/Timmy1236"
  },
  {
    title: "Hytale",
    cover: _createCover("hytale", "games", false),
    coverPreview: _createCover("hytale", "games", true),
    fact: "main.webmaster.windows.interest.gallery.hytale",
    link: "https://hytl.tools/profile/timmy1236"
  },
  {
    title: "Terraria",
    cover: _createCover("terraria", "games", false),
    coverPreview: _createCover("terraria", "games", true),
    fact: "main.webmaster.windows.interest.gallery.terraria",
    link: "https://store.steampowered.com/app/105600/terraria/"
  },
  {
    title: "Warframe",
    cover: _createCover("warframe", "games", false),
    coverPreview: _createCover("warframe", "games", true),
    fact: "main.webmaster.windows.interest.gallery.warframe",
    link: "https://store.steampowered.com/app/230410/Warframe/"
  },
  {
    title: "Roblox",
    cover: _createCover("roblox", "games", false),
    coverPreview: _createCover("roblox", "games", true),
    fact: "main.webmaster.windows.interest.gallery.roblox",
    link: "https://www.roblox.com/users/89179192/profile"
  },
  {
    title: "The Binding of Isaac Rebrith",
    cover: _createCover("isaac", "games", false),
    coverPreview: _createCover("isaac", "games", true),
    fact: "main.webmaster.windows.interest.gallery.isaac",
    link: "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth"
  },
  {
    title: "Half-Life 2",
    cover: _createCover("hl2", "games", false),
    coverPreview: _createCover("hl2", "games", true),
    fact: "main.webmaster.windows.interest.gallery.hl",
    link: "https://www.half-life.com/en/home/"
  },
  {
    title: "Team Fortress 2",
    cover: _createCover("tf", "games", false),
    coverPreview: _createCover("tf", "games", true),
    fact: "main.webmaster.windows.interest.gallery.tf",
    link: "https://www.teamfortress.com/"
  },
  {
    title: "Portal",
    cover: _createCover("portal1", "games", false),
    coverPreview: _createCover("portal1", "games", true),
    fact: "main.webmaster.windows.interest.gallery.portal1",
    link: "https://www.thinkwithportals.com/index.php"
  },
  {
    title: "Portal 2",
    cover: _createCover("portal2", "games", false),
    coverPreview: _createCover("portal2", "games", true),
    fact: "main.webmaster.windows.interest.gallery.portal2",
    link: "https://www.thinkwithportals.com/index.php"
  },
  {
    title: "SCP",
    cover: _createCover("scp", "games", false),
    coverPreview: _createCover("scp", "games", true),
    fact: "main.webmaster.windows.interest.gallery.scp",
    link: "https://scp-wiki.wikidot.com/"
  },
  {
    title: "Grand Theft Auto V",
    cover: _createCover("gtav", "games", false),
    coverPreview: _createCover("gtav", "games", true),
    fact: "main.webmaster.windows.interest.gallery.gta",
    link: "https://www.rockstargames.com/es/gta-v"
  }
];

export const seriesCover: cover[] = [
  {
    title: "Tres Acordes",
    cover: _createCover("tres-acordes", "series", false),
    coverPreview: _createCover("tres-acordes", "series", true),
    fact: "main.webmaster.windows.interest.gallery.tres-acordes",
    link: "https://www.imdb.com/es/title/tt32792180/"
  },
  {
    title: "Smiling Friends",
    cover: _createCover("smiling-friends", "series", false),
    coverPreview: _createCover("smiling-friends", "series", true),
    link: "https://www.imdb.com/es/title/tt12074628/"
  },
  {
    title: "The Amazing Digital Circus",
    cover: _createCover("tadc", "series", false),
    coverPreview: _createCover("tadc", "series", true),
    link: "https://www.imdb.com/es/title/tt27610198/"
  },
  {
    title: "Salad Fingers",
    cover: _createCover("salad-fingers", "series", false),
    coverPreview: _createCover("salad-fingers", "series", true),
    link: "https://www.imdb.com/es/title/tt1830238/"
  },
  {
    title: "Madness Combat",
    cover: _createCover("madness-combat", "series", false),
    coverPreview: _createCover("madness-combat", "series", true),
    link: "https://www.imdb.com/es/title/tt2072604/"
  },
  {
    title: "Black Mirror",
    cover: _createCover("black-mirror", "series", false),
    coverPreview: _createCover("black-mirror", "series", true),
    link: "https://www.imdb.com/es/title/tt2085059/"
  }
];

export const moviesCover: cover[] = [
  {
    title: "Project Hail Mary",
    cover: _createCover("hail-mary", "movies", false),
    coverPreview: _createCover("hail-mary", "movies", true),
    link: "https://www.imdb.com/title/tt12042730/"
  },
  {
    title: "Interstellar",
    cover: _createCover("interstellar", "movies", false),
    coverPreview: _createCover("interstellar", "movies", true),
    link: "https://www.imdb.com/title/tt0816692/"
  },
  {
    title: "Chappie",
    cover: _createCover("chappie", "movies", false),
    coverPreview: _createCover("chappie", "movies", true),
    link: "https://www.imdb.com/title/tt1823672/"
  }
];
