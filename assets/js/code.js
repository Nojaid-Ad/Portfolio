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
function toggleTheme() {
  isDarkMode = !isDarkMode;
  initTheme();
}
function navClick() {
  if (window.innerWidth <= 768) {
    document.getElementById("checkbox").checked = false;
    openMenu();
  }
}

function openMenu() {
  isMenuOpen = !isMenuOpen;
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");

  const logo = document.getElementById("logo");

  logo.style.display = isMenuOpen ? "none" : "inline";
}
