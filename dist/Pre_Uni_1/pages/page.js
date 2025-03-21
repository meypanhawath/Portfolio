const htmlElement = document.documentElement;
const themeToggleButton = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark") {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

// Set theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  applyTheme("dark");
}

// Toggle theme on button click
themeToggleButton.addEventListener("click", () => {
  const currentTheme = htmlElement.classList.contains("dark") ? "light" : "dark";
  applyTheme(currentTheme);
  console.log("Theme toggled to", currentTheme);
});