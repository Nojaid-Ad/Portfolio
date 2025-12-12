var isDarkMode = false;
var isMenuOpen = false;
function navClick(){

  const navigation = document.querySelector(".navigation");

  navigation.classList.toggle("active");
}
function openMenu() {
  if (window.innerWidth <= 768)
  {
    navClick();
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

  const iconTheme = document.getElementById("iconTheme");

  iconTheme.className = isDarkMode ? "fa-solid fa-moon" : "fa-solid fa-sun";

  document.body.classList.toggle("dark-mode");
}
