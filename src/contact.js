export const contactContent = document.createElement("div");
export default function contactGen() {
  contactContent.classList.add("contact-content");
  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  const bodyTxt = document.createElement("p");
  bodyTxt.innerHTML = `
  We're always happy to hear from you. If you have any questions or feedback, please feel free to contact us.
  <br><br>
  You can reach us through email or at the following address:
  <br><br>
  Email: info@totallylegitemail.com
  <br><br>
  123 Main Street, placholderCity, placeholderCountry
  `;

  contactContent.appendChild(heading);
  contactContent.appendChild(bodyTxt);

  return contactContent;
}
