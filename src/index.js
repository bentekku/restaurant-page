import nav, { logo, menu, contact } from "./nav.js";
import homepageComponent from "./homepage.js";
import menuComponent from "./menu.js";
import contactComponent from "./contact.js";

import "./style.css";

const main = document.createElement("div");
main.classList.add("main");

let currentPage = "homepage";

// page generation
function pageGen() {
  main.appendChild(nav());

  menu.addEventListener("click", () => {
    currentPage = "menu";
  });
  contact.addEventListener("click", () => {
    currentPage = "contact";
  });
  logo.addEventListener("click", () => {
    currentPage = "homepage";
  });

  if (currentPage === "homepage") {
    main.appendChild(homepageComponent());

    menu.classList.remove("active-side-link");
    contact.classList.remove("active-side-link");
  } else if (currentPage === "menu") {
    main.appendChild(menuComponent());

    menu.classList.add("active-side-link");
    contact.classList.remove("active-side-link");
  } else if (currentPage === "contact") {
    main.appendChild(contactComponent());

    contact.classList.add("active-side-link");
    menu.classList.remove("active-side-link");
  }

  footerGen();

  document.body.append(main);
}

// footer generation
function footerGen() {
  const foot = document.createElement("footer");
  const foot_linkdIn = new Image();
  foot_linkdIn.src = "./linkedin-svgrepo-com.svg";
  const foot_gitHub = new Image();
  foot_gitHub.src = "./github-142-svgrepo-com.svg";

  foot.appendChild(foot_linkdIn);
  foot.appendChild(foot_gitHub);

  main.appendChild(foot);
}

pageGen();

// waiting for the whole DOM to be loaded to proceed further with node appending
// document.addEventListener("DOMContentLoaded", function () {
//   nav();
//   document.body.appendChild(homepageComponent());
// });
