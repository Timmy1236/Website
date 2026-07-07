import { unlockAchievement } from "../core/achievements-logic.js";

let typedWord = "";

const SECRET_WORDS: Record<string, () => void> = { // Secret!!!! Shhhh!!!!
  "omori": () => { onSecretInput("oyasumi"); }
};

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  typedWord += key;

  if (typedWord.length > 10) {
    typedWord = typedWord.slice(-10);
  }

  const matchedKey = Object.keys(SECRET_WORDS).find(key => typedWord.includes(key));
  if (matchedKey) {
    SECRET_WORDS[matchedKey]();
    typedWord = "";
  }
});

export function onPage404() {
  unlockAchievement("404");
}

export function onFirstVisit() {
  unlockAchievement("welcome");
}

export function onSecretInput(value: string) {
  unlockAchievement(value);
}