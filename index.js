const signOut = document.querySelector(".sign-out");
signOut.addEventListener("click", () => {
  location.replace("/login.html");
});
//////////////////////////////////////////// SIGN OUT FUNCTIONALITY /////////////////////////////////////////////

// const myCart = {};
const myCart = [];

const itemsNum = document.querySelector(".items_num");

// console.log(itemsNum.textContent);

const m1 = document.querySelector(".P_img1");
const m1_overlay = document.querySelector(".m1_overlay");
m1_overlay.style.display = "none";
m1.addEventListener("mouseover", () => {
  m1_overlay.style.display = "flex";
});
m1.addEventListener("mouseout", () => {
  m1_overlay.style.display = "none";
});

const m2 = document.querySelector(".P_img2");
const m2_overlay = document.querySelector(".m2_overlay");
m2_overlay.style.display = "none";
m2.addEventListener("mouseover", () => {
  m2_overlay.style.display = "flex";
});
m2.addEventListener("mouseout", () => {
  m2_overlay.style.display = "none";
});

const m3 = document.querySelector(".P_img3");
const m3_overlay = document.querySelector(".m3_overlay");
m3_overlay.style.display = "none";
m3.addEventListener("mouseover", () => {
  m3_overlay.style.display = "flex";
});
m3.addEventListener("mouseout", () => {
  m3_overlay.style.display = "none";
});

const m4 = document.querySelector(".P_img4");
const m4_overlay = document.querySelector(".m4_overlay");
m4_overlay.style.display = "none";
m4.addEventListener("mouseover", () => {
  m4_overlay.style.display = "flex";
});
m4.addEventListener("mouseout", () => {
  m4_overlay.style.display = "none";
});

const m5 = document.querySelector(".P_img5");
const m5_overlay = document.querySelector(".m5_overlay");
m5_overlay.style.display = "none";
m5.addEventListener("mouseover", () => {
  m5_overlay.style.display = "flex";
});
m5.addEventListener("mouseout", () => {
  m5_overlay.style.display = "none";
});

const m6 = document.querySelector(".P_img6");
const m6_overlay = document.querySelector(".m6_overlay");
m6_overlay.style.display = "none";
m6.addEventListener("mouseover", () => {
  m6_overlay.style.display = "flex";
});
m6.addEventListener("mouseout", () => {
  m6_overlay.style.display = "none";
});

let quantity = 0;

const cart1 = document.getElementById("cart1").addEventListener("click", () => {
  quantity = 0;
  if (myCart[0] != null) {
    myCart[0].quantity += 1;
  } else {
    myCart[0] = {
      price: 60,
      item: "FANTASTIC JEAN",
      quantity: (quantity += 1),
    };
  }
  let len = 0;
  if (len == 0) {
    len = 1;
    itemsNum.textContent = +itemsNum.textContent + len;
  }
});
const cart2 = document.getElementById("cart2").addEventListener("click", () => {
  quantity = 0;
  if (myCart[1] != null) {
    myCart[1].quantity += 1;
  } else {
    myCart[1] = {
      price: 70,
      item: "FANTASTIC BLACKS",
      quantity: (quantity += 1),
    };
  }
  let len = 0;
  if (len == 0) {
    len = 1;
    itemsNum.textContent = +itemsNum.textContent + len;
  }
});
const cart3 = document.getElementById("cart3").addEventListener("click", () => {
  quantity = 0;
  if (myCart[2] != null) {
    myCart[2].quantity += 1;
  } else {
    myCart[2] = {
      price: 50,
      item: "FANTASTIC BEATS",
      quantity: (quantity += 1),
    };
  }
  let len = 0;
  if (len == 0) {
    len = 1;
    itemsNum.textContent = +itemsNum.textContent + len;
  }
});
const cart4 = document.getElementById("cart4").addEventListener("click", () => {
  quantity = 0;
  if (myCart[3] != null) {
    myCart[3].quantity += 1;
  } else {
    myCart[3] = {
      price: 90,
      item: "FANTASTIC DRESS",
      quantity: (quantity += 1),
    };
  }
  let len = 0;
  if (len == 0) {
    len = 1;
    itemsNum.textContent = +itemsNum.textContent + len;
  }
});
const cart5 = document.getElementById("cart5").addEventListener("click", () => {
  quantity = 0;
  if (myCart[4] != null) {
    myCart[4].quantity += 1;
  } else {
    myCart[4] = {
      price: 60,
      item: "FANTASTIC JEAN",
      quantity: (quantity += 1),
    };
  }
  let len = 0;
  if (len == 0) {
    len = 1;
    itemsNum.textContent = +itemsNum.textContent + len;
  }
});
const cart6 = document.getElementById("cart6").addEventListener("click", () => {
  quantity = 0;
  if (myCart[5] != null) {
    myCart[5].quantity += 1;
  } else {
    myCart[5] = {
      price: 90,
      item: "FANTASTIC MUFFELS",
      quantity: (quantity += 1),
    };
  }
  let len = 0;
  if (len == 0) {
    len = 1;
    itemsNum.textContent = +itemsNum.textContent + len;
  }
});

//////////////////////////////////////////////// CART page ///////////////////////////////////

const cartOverlay = document.querySelector(".cart-overlay");
const cartHolder = document.querySelector(".cart_holder");
const overlay = document.querySelector(".overlay");
let apnd = "";
let text = "";
let prev = 0;

cartHolder.addEventListener("click", () => {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  const texts = document.querySelector(".center");
  overlay.style.display = "block";
  if (myCart.length > 0) {
    // texts.style.display = "none";
    removeAllChildNodes(cartOverlay);
    apnd = "";
    for (const a in myCart) {
      apnd += `<div class="cart">
                        <div class="cart-left">
                            <h2>${myCart[a].item}</h2>
                            <p>${myCart[a].price}$</p>
                            </div>
                        <div class="cart-right">
                            <h1>${myCart[a].quantity}</h1>
                            </div>
                    </div>`;
    }
    cartOverlay.insertAdjacentHTML("afterbegin", apnd);
    prev = myCart.length;
  }
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

/////////////////////////////////////////////////////////////////////////////////////////////

const blogs = document.querySelector(".blogs");
blogs.addEventListener("click", () => {
  location.replace("./blogs.html");
});
