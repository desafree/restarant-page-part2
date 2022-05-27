export default function Menu() {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("menu-container");

  const subHeading = document.createElement("h3");
  subHeading.classList.add("subheading");
  subHeading.textContent = "Discover";
  pageContainer.appendChild(subHeading);

  const title = document.createElement("h1");
  title.textContent = "Our Food Menu";
  pageContainer.appendChild(title);

  const menu = document.createElement("div");
  menu.classList.add("menu");
  pageContainer.appendChild(menu);

  category(menu);
  category(menu);
  category(menu);
  category(menu);

  const contentContainer = document.querySelector(".content-container");
  contentContainer.appendChild(pageContainer);
}

//   <div class="menu-container">
//     <h3 class="subheading">Discover</h3>
//     <h1>Our Food Menu</h1>
//     <div class="menu">
//       <div class="category">
//         <h3>Main Course</h3>
//         <div class="plate">
//           <div>
//             <h4>super delicious zuppa toscana</h4>
//             <p>chicken + rice + sausage + spinach</p>
//           </div>
//           <div class="line"></div>
//           <p class="price">40$</p>
//         </div>
//       </div> */

function category(menu) {
  const menuCategory = document.createElement("div");
  menuCategory.classList.add("category");
  menu.appendChild(menuCategory);

  const menuHeading = document.createElement("h3");
  //   menuHeading.classList.add("Course");
  menuHeading.textContent = "Main Course";
  menuCategory.appendChild(menuHeading);

  const plate = document.createElement("div");
  plate.classList.add("plate");
  menuCategory.appendChild(plate);

  const div = document.createElement("div");
  plate.appendChild(div);

  const h4div = document.createElement("h4");
  h4div.textContent = "super delicious zuppa toscana";
  div.appendChild(h4div);

  const pDiv = document.createElement("p");
  pDiv.textContent = "chicken + rice + sausage + spinach";
  div.appendChild(pDiv);

  const line = document.createElement("div");
  line.classList.add("line");
  plate.appendChild(line);

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = "40$";
  plate.appendChild(price);
}
