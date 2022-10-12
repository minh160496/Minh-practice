var btnMenu = document.querySelector("#btn-menu");
var menuMobile = document.querySelector("#menu--mobile-js");
console.log(menuMobile);

btnMenu.onclick = function () {
  menuMobile.classList.add("show");
  console.log("ok");
};
var btnClose = document.querySelector("#btn-close");
console.log(btnClose);
btnClose.onclick = function () {
  menuMobile.classList.remove("show");
  console.log("hidden");
};
