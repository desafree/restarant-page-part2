export default function Homepage() {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("homepage");

  const contentLeft = document.createElement("div");
  contentLeft.classList.add("content-left");
  pageContainer.appendChild(contentLeft);

  const leftH3 = document.createElement("h3");
  leftH3.classList.add("subheading");
  leftH3.textContent = "Discover your taste";
  contentLeft.appendChild(leftH3);

  const leftH1 = document.createElement("h1");
  leftH1.textContent = "Eat healthy and natural food!";
  contentLeft.appendChild(leftH1);

  const leftBtn = document.createElement("button");
  leftBtn.textContent = "Discover More";
  contentLeft.appendChild(leftBtn);

  const contentRight = document.createElement("div");
  contentRight.classList.add("content-right");
  pageContainer.appendChild(contentRight);

  const contentContainer = document.querySelector(".content-container");
  contentContainer.appendChild(pageContainer);
}

{
  /* <div class="homepage">
<div class="content-left">
  <h3 class="subheading">Discover your taste</h3>
  <h1>Eat healthy and natural food!</h1>
  <button>Discover More</button>
</div>
<div class="content-right"></div>
</div> */
}
