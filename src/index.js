import nav, { logo, menu, contact } from "./nav.js";
import homepageComponent, { homeContent } from "./homepage.js";
import menuComponent, { menuContent } from "./menu.js";
import contactComponent, { contactContent } from "./contact.js";
import linkedInLoc from "./linkedin-svgrepo-com.svg";
import gitHubLoc from "./github-142-svgrepo-com.svg";

import "./style.css";

let currentPage = "homepage";

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
  });
  contact.addEventListener("click", () => {
    currentPage = "contact";
    pageChange();
  });
  logo.addEventListener("click", () => {
    currentPage = "homepage";
    pageChange();
  });
  pageChange();
  footerGen();

  document.body.append(main);
}

// changing content of page based upon the current page
// displaying all the page contents all together, and then hiding the ones not need to be shown
function pageChange() {
  // checking whether the contentWrapper has no child
  // if true, all the page contents would be added and homeContent would be displayed
  // doing so prevents multiple children of a page displaying all together
  if (!contentWrapper.innerHTML) {
    contentWrapper.appendChild(homepageComponent());
    contentWrapper.appendChild(menuComponent());
    contentWrapper.appendChild(contactComponent());

    homeContent.classList.remove("disable");
  }

  if (currentPage === "homepage") {
    homeContent.classList.remove("disable");

    menuContent.classList.add("disable");
    contactContent.classList.add("disable");

    // reverting the color change for both nav link
    menu.classList.remove("active-link");
    contact.classList.remove("active-link");
  } else if (currentPage === "menu") {
    menuContent.classList.remove("disable");

    homeContent.classList.add("disable");
    contactContent.classList.add("disable");

    // changing color of the 'menu' nav link to darker shade
    // and reverting the color change for other nav link
    menu.classList.add("active-link");
    contact.classList.remove("active-link");
  } else if (currentPage === "contact") {
    contactContent.classList.remove("disable");

    homeContent.classList.add("disable");
    menuContent.classList.add("disable");

    // changing color of the 'contact' nav link to darker shade
    // and reverting the color change for other nav link
    contact.classList.add("active-link");
    menu.classList.remove("active-link");
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
