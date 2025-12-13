var isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
var isMenuOpen = false;

function initTheme() {
  const iconTheme = document.getElementById("iconTheme");

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    iconTheme.className = "fa-solid fa-moon";
  } else {
    document.body.classList.remove("dark-mode");
    iconTheme.className = "fa-solid fa-sun";
  }
}

function navClick() {
  openMenu();
}

function openMenu() {
  if (window.innerWidth <= 768) {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
  }

  isMenuOpen = !isMenuOpen;

  const menuIcon = document.getElementById("menuIcon");
  menuIcon.className = isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  document.getElementById("logo").style.display = isMenuOpen
    ? "none"
    : "inline";
}
function toggleTheme() {
  isDarkMode = !isDarkMode;
  initTheme();
}
