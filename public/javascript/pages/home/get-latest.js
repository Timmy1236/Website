export async function getLatest() {
  try {
    const response = await fetch("/content/api/latest.json");
    return await response.json();
  } catch (e) {
    console.error("Error loading latest posts", e);
  }
}