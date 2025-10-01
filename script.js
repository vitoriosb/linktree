const themeToggleButton = document.querySelector("#theme-toggle");
const body = document.body;

function toggleTheme() {
  body.classList.toggle("dark-mode");
}

themeToggleButton.addEventListener("click", toggleTheme);
