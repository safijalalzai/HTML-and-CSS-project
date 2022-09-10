// login btn

var btnLogin = document.querySelector("#btn-login");
var openLogin = document.querySelector(".section-login");
var closeBack = document.querySelector(".container");
btnLogin.addEventListener("click", fun_login);

function fun_login() {
  openLogin.classList.toggle("open-login");
  closeBack.classList.toggle("close-back");
}

var formClose = document.querySelector(".btn-form-close");
formClose.addEventListener("click", fun_login);

// mobile nav setting

var barEl = document.querySelector(".bar");
menuOpen = document.querySelector(".small-screen-size");
menuOpen.addEventListener("click", fun_menu_open);

function fun_menu_open() {
  barEl.classList.toggle("menu-open");
  console.log("click");
}

//register button
var btnRegister = document.querySelector(".btn--empty");
var sectionRegister = document.querySelector(".section-register");
btnRegister.addEventListener("click", fun_register_menu);

function fun_register_menu() {
  sectionRegister.classList.toggle("open-register");
  closeBack.classList.toggle("close-back");
}

var closeRegister = document.querySelector(".btn-register-close");
closeRegister.addEventListener("click", fun_register_menu);

//sign in  in register

var registerSignIn = document.querySelector(".section-register .link-confirm");
registerSignIn.addEventListener("click", Fun_registerSignIn);

function Fun_registerSignIn() {
  fun_register_menu();
  fun_login();
}

//sign up   in login

var signUpLogin = document.querySelector(".link-register");
signUpLogin.addEventListener("click", fun_signUpLogin);

function fun_signUpLogin() {
  fun_login();
  fun_register_menu();
}
