let menuBtn = document.getElementById("menu-btn");
let menuItems = document.getElementById("nav-items");

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("open")) {
    menuBtn.classList.remove("open");
    menuItems.style.display = "none";
  } else {
    menuBtn.classList.add("open");
    menuItems.style.display = "flex";
  }
});
