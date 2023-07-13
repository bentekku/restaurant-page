import item_1_imgLoc from "./strawberry-milkshake.png";
import item_2_imgLoc from "./mint-milkshake.png";

export default function menuGen() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu");

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
  Our refreshing Strawberry Milkshake is a classic favorite that strikes the perfect balance between creamy and fruity. Made with the freshest, locally-sourced strawberries and high-quality milk, this milkshake is a treat for the senses.
  <br><br>
  As you take a sip, you'll immediately be greeted with the sweet aroma of strawberries. Savor the rich and creamy texture, as you indulge in the delicate blend of fresh, ripe strawberries and ice-cold milk. The refreshing taste will leave you feeling revitalized and invigorated.
  <br><br>
  Perfect as a midday snack or a dessert, our Strawberry Milkshake is the perfect drink for any day. It's also an excellent source of calcium and protein, so you can indulge guilt-free.
  <br><br>
  Prepared with love and care by our experienced baristas, every sip of this milkshake will transport you to a world of pure bliss. You'll taste the dedication and passion that goes into creating every drink, making each visit to our cafe a memorable one.
  <br><br>
  Whether you are a fan of classic flavors or love to experiment with new ones, our Strawberry Milkshake is a must-try. Visit us today at me.Shake to experience the magic and leave your taste buds begging for more!
  Milkshake in a mason jar that has no branding on it and has a handle, garnished with choco-chips and broken bits of kitkat, drizzled with melted chocolate and powdered sugar on top`;

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
  Indulge in the cool and refreshing flavors of our Mint Ice Cream Milkshake. This delightful treat combines the creamy goodness of premium mint ice cream with a touch of sweetness, creating a harmonious blend that will captivate your taste buds.
  <br><br>
  As you take your first sip, you'll be greeted with a burst of minty freshness that instantly cools and refreshes your palate. The smooth and velvety texture of the milkshake adds a luxurious element, making each sip a moment of pure indulgence.
  <br><br>
  Our Mint Ice Cream Milkshake is crafted using only the finest ingredients. We source the highest quality mint ice cream and blend it together with just the right amount of milk to create the perfect consistency. Every ingredient is carefully chosen to ensure that each milkshake is a true masterpiece.
  <br><br>
  Served with a dollop of whipped cream on top and a sprinkle of chocolate shavings, our Mint Ice Cream Milkshake not only tastes incredible but also looks like a work of art. It's a treat for all the senses, from the enticing aroma to the beautiful presentation.
  <br><br>
  Whether you're looking to satisfy your sweet tooth, beat the heat, or simply treat yourself to a delightful dessert, our Mint Ice Cream Milkshake is the perfect choice. Visit us at me.Shake and experience the perfect balance of minty freshness, creaminess, and sweetness in every sip.`;

  const item_2_prodImg = new Image();
  item_2_prodImg.src = item_2_imgLoc;
  item_2_prodImg.setAttribute("id", "item_2_img");

  item_2_deetsWrapper.appendChild(item_2_heading);
  item_2_deetsWrapper.appendChild(item_2_price);
  item_2_deetsWrapper.appendChild(item_2_descrp);

  item_2.appendChild(item_2_prodImg);
  item_2.appendChild(item_2_deetsWrapper);

  menuWrapper.appendChild(item_1);
  menuWrapper.appendChild(item_2);

  return menuWrapper;
}
