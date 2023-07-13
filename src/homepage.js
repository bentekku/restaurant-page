export default function generateHomePageComponents() {
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("content");
  const bodyTxt = document.createElement("div");
  bodyTxt.innerHTML = `<ul>
  <li>Welcome to me.Shake, the perfect place to satisfy your cravings for delicious shakes and beverages.</li>
  
  <li>At me.Shake, we believe in simplicity and quality. Our goal is to offer a refreshing and delightful experience to our customers. Whether you are looking for a classic milkshake, a flavorful smoothie, or a refreshing iced coffee, we have something specially crafted for every palate.</li>

  <li>Our philosophy is to use only the freshest and highest quality ingredients in our beverages. Each drink is made with care and precision to ensure the perfect blend of flavors. We cater to all dietary preferences, offering vegan, gluten-free, and dairy-free options.</li>

  <li>Not only do we take pride in our beverages, but we also provide a cozy and inviting atmosphere for you to enjoy your drink. Our cafe is designed to be a relaxing space where you can catch up with friends, work on your laptop, or simply sit back and unwind.</li>

  <li>Come discover the world of flavors at me.Shake. We look forward to serving you the most delicious and refreshing drinks.</li>
  </ul>`;

  aboutContent.appendChild(bodyTxt);

  return aboutContent;
}
