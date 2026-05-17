const tabs = document.querySelectorAll(".tab");
const sideButtons = document.querySelectorAll(".side-btn");
const gameCards = document.querySelectorAll(".game-card");
const searchInput = document.querySelector(".search-box input");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

sideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sideButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  gameCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const category = card.querySelector("span").textContent.toLowerCase();

    if (title.includes(searchValue) || category.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
