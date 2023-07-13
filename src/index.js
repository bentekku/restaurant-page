import nav, { logo, menu, contact } from "./nav.js";
import homepageComponent from "./homepage.js";
import menuComponent from "./menu.js";
import contactComponent from "./contact.js";

import linkedInLoc from "./linkedin-svgrepo-com.svg";
import gitHubLoc from "./github-142-svgrepo-com.svg";

import "./style.css";

let currentPage = "menu";

const main = document.createElement("div");
main.classList.add("main");
const contentWrapper = document.createElement("div");
contentWrapper.classList.add("content-wrapper");

// page generation
function pageGen() {
  main.appendChild(nav());
  main.appendChild(contentWrapper);

  menu.addEventListener("click", () => {
    currentPage = "menu";
    pageChange();

    console.log("you clicked MENU");
  });
  contact.addEventListener("click", () => {
    currentPage = "contact";
    pageChange();

    console.log("you clicked CONTACT");
  });
  logo.addEventListener("click", () => {
    currentPage = "homepage";
    pageChange();

    console.log("you clicked HOMEPAGE");
  });

  pageChange();

  footerGen();

  document.body.append(main);
}

// changing content of page based upon the current page
function pageChange() {
  if (currentPage === "homepage") {
    contentWrapper.append(homepageComponent());

    menu.classList.remove("active-side-link");
    contact.classList.remove("active-side-link");
  } else if (currentPage === "menu") {
    contentWrapper.append(menuComponent());

    menu.classList.add("active-side-link");
    contact.classList.remove("active-side-link");
  } else if (currentPage === "contact") {
    contentWrapper.append(contactComponent());

    contact.classList.add("active-side-link");
    menu.classList.remove("active-side-link");
  }
}

// footer generation
function footerGen() {
  const foot = document.createElement("footer");
  const linkdInLinkWrapper = document.createElement("a");
  linkdInLinkWrapper.href = "https://www.linkedin.com/in/khan-shadab/";
  linkdInLinkWrapper.target = "_blank";
  const gitHubLinkWrapper = document.createElement("a");
  gitHubLinkWrapper.href = "https://github.com/bentekku";
  gitHubLinkWrapper.target = "_blank";

  const foot_linkdIn = new Image();
  foot_linkdIn.src = linkedInLoc;
  linkdInLinkWrapper.append(foot_linkdIn);
  const foot_gitHub = new Image();
  foot_gitHub.src = gitHubLoc;
  gitHubLinkWrapper.append(foot_gitHub);

  foot.appendChild(linkdInLinkWrapper);
  foot.appendChild(gitHubLinkWrapper);

  main.appendChild(foot);
}

pageGen();
