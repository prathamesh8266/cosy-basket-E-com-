const userName = document.getElementById("name");
const password = document.getElementById("password");
const message = document.querySelector(".p");
const form = document.getElementById("form");
const loginPage = document.querySelector(".login");

const rowter = () => {
  if (userName.value == "Prathamesh" && password.value == "asdf") {
    console.log("i am in herre");
    location.replace("/index.html");
  } else {
    message.style.display = "block";
    userName.value = "";
    password.value = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  rowter();
});

//////////////////////////////////////////// ROWTING INTO MAIN PAGE ////////////////////////////////////////////////

const signOut = document.querySelector(".sign-out");
signOut.addEventListener("click", () => {
  signOut.textContent = "heloo world";
});
