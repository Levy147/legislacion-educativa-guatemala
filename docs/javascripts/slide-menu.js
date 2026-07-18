document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("slideMenuToggle");
  var menu = document.getElementById("slideMenu");
  var close = document.getElementById("slideMenuClose");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }
  if (close && menu) {
    close.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  }

  var titles = document.querySelectorAll(".slide-menu-section-title[data-toggle]");
  titles.forEach(function (title) {
    title.addEventListener("click", function () {
      var target = document.getElementById(this.getAttribute("data-toggle"));
      if (target) {
        target.classList.toggle("collapsed");
        this.classList.toggle("active");
      }
    });
  });

  var links = document.querySelectorAll(".slide-menu-list a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menu) menu.classList.remove("open");
    });
  });

  document.addEventListener("click", function (e) {
    if (menu && menu.classList.contains("open")) {
      if (!menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove("open");
      }
    }
  });
});
