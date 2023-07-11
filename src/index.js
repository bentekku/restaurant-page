import "./style.css";
import heroimg from "./closeup_shot_of_a_sizzling_plate_of_biryani.jpg";

function generateHomePageComponents() {
  const pageWrapper = document.createElement("div");
  pageWrapper.classList.add("main");

  const nav = document.createElement("nav");
  const navElementsWrapper = document.createElement("ul");

  const navElementLeftWrapper = document.createElement("div");
  navElementLeftWrapper.classList.add("nav-left");

  const navLogo = document.createElement("li");
  navLogo.textContent = "munch";

  const navElementRightWrapper = document.createElement("div");
  navElementRightWrapper.classList.add("nav-right");

  const navMenu = document.createElement("li");
  navMenu.textContent = "Menu";

  const navAbout = document.createElement("li");
  navAbout.textContent = "About";

  const navContactUs = document.createElement("li");
  navContactUs.textContent = "Contact Us";

  const heroWrapper = document.createElement("div");
  heroWrapper.setAttribute("id", "hero_wrapper");

  const heroImageWrapper = document.createElement("div");
  heroImageWrapper.setAttribute("id", "hero_imageWrapper");

  const heroImage = new Image();
  heroImage.setAttribute("id", "hero_image");
  heroImage.src = heroimg;

  const heroImgBlur = document.createElement("div");
  heroImgBlur.setAttribute("id", "hero_imageBlur");

  const heroText = document.createElement("p");
  heroText.setAttribute("id", "hero_text");
  heroText.textContent = `Discover the Vibrant Flavors of India\nExperience a Culinary Journey like No Other`;

  const footer = document.createElement("footer");
  const linkedIn_Ico = document.createElement("img");
  linkedIn_Ico.setAttribute("id", "linkedIn_ico");

  const gitHub_Ico = document.createElement("img");
  gitHub_Ico.setAttribute("id", "gitHub_ico");

  combineHomePageComponents(
    pageWrapper,
    nav,
    navElementsWrapper,
    navElementLeftWrapper,
    navLogo,
    navElementRightWrapper,
    navMenu,
    navAbout,
    navContactUs,
    heroWrapper,
    heroImageWrapper,
    heroImage,
    heroImgBlur,
    heroText,
    footer,
    linkedIn_Ico,
    gitHub_Ico
  );

  return pageWrapper;
}

function combineHomePageComponents(
  main,
  nav_bar,
  nav_ele,
  nav_left,
  nav_logo,
  nav_right,
  nav_menu,
  nav_about,
  nav_contactUs,
  hero_wrapper,
  hero_imageWrapper,
  hero_img,
  hero_imgBlur,
  hero_txt,
  foot,
  linkd_ico,
  gitHub_ico
) {
  nav_left.appendChild(nav_logo);
  nav_right.appendChild(nav_menu);
  nav_right.appendChild(nav_about);
  nav_right.appendChild(nav_contactUs);

  nav_ele.appendChild(nav_left);
  nav_ele.appendChild(nav_right);

  nav_bar.appendChild(nav_ele);

  hero_imageWrapper.appendChild(hero_img);
  hero_imageWrapper.appendChild(hero_imgBlur);

  hero_wrapper.appendChild(hero_imageWrapper);
  hero_wrapper.appendChild(hero_txt);

  foot.appendChild(linkd_ico);
  foot.appendChild(gitHub_ico);

  main.appendChild(nav_bar);
  main.appendChild(hero_wrapper);
  main.appendChild(foot);

  return main;
}

// waiting for the whole DOM to be loaded to proceed further with node appending
document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(generateHomePageComponents());
});
