export function initializePostFilter(): void {
  const searchInput = document.getElementById("search-input");

  if (!(searchInput instanceof HTMLInputElement)) return;

  const input = searchInput;

  const tagButtons = document.querySelectorAll<HTMLButtonElement>(".tag-filter-btn");
  const cards = document.querySelectorAll<HTMLElement>(".post-card");

  let activeTag = "all";

  function applyFilters(): void {
    const query = input.value.toLowerCase().trim();

    cards.forEach((card) => {
      const title = card.dataset.title || "";
      const description = card.dataset.description || "";
      const tags = (card.dataset.tags || "").split(" ");

      const matchesSearch = title.includes(query) || description.includes(query);
      const matchesTag = activeTag === "all" || tags.includes(activeTag);

      card.style.display = matchesSearch && matchesTag ? "" : "none";
    });
  }

  input.addEventListener("input", applyFilters);

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tagButtons.forEach(tagButton => tagButton.classList.remove("active"));
      button.classList.add("active");
      activeTag = button.dataset.tag || "all";
      applyFilters();
    });
  });
}
