var isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
var isMenuOpen = false;

function initTheme() {
  const checkbox = document.getElementById("themeSwitch");

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    checkbox.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    checkbox.checked = false;
  }
}

function navClick() {
  if (window.innerWidth <= 768 && isMenuOpen) {
    openMenu();
  }
}

function openMenu() {
  isMenuOpen = !isMenuOpen;
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
  const checkbox = document.getElementById("checkbox");
  const logo = document.getElementById("logo");

  checkbox.checked = !isMenuOpen;

  logo.style.display = isMenuOpen ? "none" : "inline";
}
function toggleTheme() {
  isDarkMode = !isDarkMode;
  initTheme();
}
