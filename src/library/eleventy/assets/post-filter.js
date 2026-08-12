const searchInput = document.getElementById("search-input");
const tagButtons = document.querySelectorAll(".tag-filter-btn");
const cards = document.querySelectorAll(".post-card");

let activeTag = "all";

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();

  cards.forEach((card) => {
    const title = card.dataset.title || "";
    const description = card.dataset.description || "";
    const tags = (card.dataset.tags || "").split(" ");

    const matchesSearch = title.includes(query) || description.includes(query);
    const matchesTag = activeTag === "all" || tags.includes(activeTag);

    card.style.display = matchesSearch && matchesTag ? "" : "none";
  });
}

searchInput.addEventListener("input", applyFilters);

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tagButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeTag = button.dataset.tag;
    applyFilters();
  });
});
