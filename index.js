const submitBtn = document.querySelector(".submit-btn");
const submitBtnSignUp = document.querySelector(".submit-btn-sign-up");
const errorMsg = document.querySelector(".error");
const pasError = document.querySelector(".check-pass-error");
const SetPasError = document.querySelector(".check-set-pass-error");
const errorMsgSignUp = document.querySelector(".error-sign-up");
const form = document.querySelector("form");
const switchSignUp = document.querySelector(".sign-up-btn");
const switchSignIn = document.querySelector(".sign-in-btn");
const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");
const setPassword = document.querySelector("#set-password");
const repeatPassword = document.querySelector("#repeat-password");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector(".error-name");
const handleSwitchSignUp = () => {
  signIn.style.transform = "translateX(-100%)";
  signUp.style.transform = "translateX(-100%)";
  signUp.style.display = "unset";
};
const handleSwitchSignIn = () => {
  signUp.style.transform = "translateX(100%)";
  signIn.style.transform = "translateX(0)";
  signUp.style.display = "none";
};
switchSignUp.addEventListener("click", handleSwitchSignUp);
switchSignIn.addEventListener("click", handleSwitchSignIn);

form.addEventListener("submit", (i) => i.preventDefault());
function validateEmail(email) {
  regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function getEmail() {
  let email = document.getElementById("email").value;
  if (validateEmail(email)) {
    errorMsg.classList.remove("show-error");
  } else {
    errorMsg.classList.add("show-error");
    emailError.style.display = "none";
  }
}

function getEmailSignUp() {
  let email = document.getElementById("email-sign-up").value;
  if (validateEmail(email)) {
    errorMsgSignUp.classList.remove("show-error");
  } else {
    errorMsgSignUp.classList.add("show-error");
  }
}

submitBtn.addEventListener("click", handelSubmit);
submitBtnSignUp.addEventListener("click", handelSubmitSignUp);

function handelSubmitSignUp() {
  getEmailSignUp();
  if (nameInput.value.length === 0) {
    nameError.classList.add("show-error");
  }
  if (setPassword.value.length === 0) {
    SetPasError.classList.add("show-error");
  } else {
    SetPasError.classList.remove("show-error");
  }
}
function handelSubmit() {
  getEmail();
}

setPassword.addEventListener("input", () => {
  if (setPassword.value.length > 1) {
    SetPasError.classList.remove("show-error");
  } else {
    SetPasError.classList.add("show-error");
  }
});
repeatPassword.addEventListener("input", () => {
  if (setPassword.value === repeatPassword.value) {
    repeatPassword.setCustomValidity(pasError.classList.remove("show-error"));
  } else {
    repeatPassword.setCustomValidity(pasError.classList.add("show-error"));
  }
});
