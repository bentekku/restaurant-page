const navBar = document.createElement("nav");
const navLeft = document.createElement("div");
const navRight = document.createElement("div");

export const logo = document.createElement("p");
export const menu = document.createElement("p");
export const contact = document.createElement("p");

export default function navGen() {
  navLeft.classList.add("nav-left");
  navRight.classList.add("nav-right");

  logo.textContent = "me.Shake";
  logo.setAttribute("id", "nav_logo");

  menu.textContent = "Menu";
  menu.setAttribute("id", "nav_menu");

  contact.textContent = "Contact Us";
  contact.setAttribute("id", "nav_contact");

  return combineComponents(navBar, navLeft, navRight, logo, menu, contact);
}

function combineComponents(nav_bar, nav_left, nav_right, logo, menu, contact) {
  nav_left.appendChild(logo);
  nav_right.appendChild(menu);
  nav_right.appendChild(contact);

  nav_bar.appendChild(nav_left);
  nav_bar.appendChild(nav_right);

  return nav_bar;
}
