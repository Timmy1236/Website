export async function getLatest() {
  try {
    const response = await fetch("/content/api/latest.json");
    return await response.json();
  } catch (e) {
    console.error("get-latest.js> Error al intentar obtener los últimos blogs y changelogs: ", e);
  }
}

export async function getLastCommit() {
  try {
    const response = await fetch('https://api.github.com/repos/Timmy1236/Website/commits?per_page=1')
    return await response.json();
  } catch (e) {
    console.error("get-latest.js> Error al intentar obtener los últimos commits: ", e);
  }
}