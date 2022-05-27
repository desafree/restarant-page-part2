import "./style.scss";
import Homepage from "./modules/home.js";
import Menu from "./modules/menu.js";

window.addEventListener("load", () => {
  Homepage();
});

const navItems = document.querySelectorAll("li");
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index % 2) {
      removeContent();
      Menu();
    } else {
      removeContent();
      Homepage();
    }
  });
});

function removeContent() {
  const contentContainer = document.querySelector(".content-container");
  contentContainer.textContent = "";
}
