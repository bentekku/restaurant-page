import item_1_imgLoc from "./strawberry-milkshake.png";
import item_2_imgLoc from "./mint-milkshake.png";

export const menuContent = document.createElement("div");
export default function menuGen() {
  menuContent.classList.add("menu");

  const item_1 = document.createElement("div");
  item_1.classList.add("item");
  const item_1_deetsWrapper = document.createElement("div");
  item_1_deetsWrapper.classList.add("item-deetsWrapper");
  const item_1_heading = document.createElement("h1");
  item_1_heading.textContent = "Strawberry Milkshake";

  const item_1_price = document.createElement("p");
  item_1_price.textContent = "$5.99";
  item_1_price.classList.add("item-price");

  const item_1_descrp = document.createElement("p");
  item_1_descrp.innerHTML = `<br>
  Experience the perfect balance of creamy and fruity with our classic Strawberry Milkshake. Made with fresh, locally-sourced strawberries and high-quality milk, this revitalizing treat is a sensory delight.
  <br><br>
  Savor the sweet aroma and rich texture as you indulge in the refreshing blend of ripe strawberries and ice-cold milk. Perfect as a guilt-free midday snack or dessert, it's also a great source of calcium and protein. Crafted with love by our experienced baristas, each sip transports you to pure bliss.
  <br><br>
  Visit us at me.Shake and discover why our Strawberry Milkshake is an unforgettable must-try. Enjoy it in a handle-less mason jar garnished with choco-chips, bits of Kitkat, melted chocolate, and powdered sugar on top.
  `;

  const item_1_prodImg = new Image();
  item_1_prodImg.src = item_1_imgLoc;
  item_1_prodImg.setAttribute("id", "item_1_img");

  item_1_deetsWrapper.appendChild(item_1_heading);
  item_1_deetsWrapper.appendChild(item_1_price);
  item_1_deetsWrapper.appendChild(item_1_descrp);

  item_1.appendChild(item_1_deetsWrapper);
  item_1.appendChild(item_1_prodImg);

  const item_2 = document.createElement("div");
  item_2.classList.add("item");
  const item_2_deetsWrapper = document.createElement("div");
  item_2_deetsWrapper.classList.add("item-deetsWrapper");
  const item_2_heading = document.createElement("h1");
  item_2_heading.textContent = "Mint Ice Cream Milkshake";

  const item_2_price = document.createElement("p");
  item_2_price.textContent = "$6.99";
  item_2_price.classList.add("item-price");

  const item_2_descrp = document.createElement("p");
  item_2_descrp.innerHTML = `<br>
  Indulge in the cool and refreshing flavors of our Mint Ice Cream Milkshake. This delightful treat combines premium mint ice cream with a touch of sweetness, creating a harmonious blend that instantly cools and refreshes your palate.
  <br><br>
  Crafted with the finest ingredients, each sip offers a luxurious experience of pure indulgence. Topped with whipped cream and chocolate shavings, our Mint Ice Cream Milkshake is a treat for all your senses.
  <br><br>
  Visit us at me.Shake and savor the perfect balance of minty freshness, creaminess, and sweetness in every sip.
`;

  const item_2_prodImg = new Image();
  item_2_prodImg.src = item_2_imgLoc;
  item_2_prodImg.setAttribute("id", "item_2_img");

  item_2_deetsWrapper.appendChild(item_2_heading);
  item_2_deetsWrapper.appendChild(item_2_price);
  item_2_deetsWrapper.appendChild(item_2_descrp);

  item_2.appendChild(item_2_prodImg);
  item_2.appendChild(item_2_deetsWrapper);

  menuContent.append(item_1);
  menuContent.append(item_2);

  return menuContent;
}
