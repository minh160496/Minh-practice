// hien va an menu mobile
var btnMenu = document.querySelector("#btn-menu");
var menuMobile = document.querySelector("#menu--mobile-js");

btnMenu.onclick = function () {
  menuMobile.classList.add("show");
};
var btnClose = document.querySelector("#btn-close");
btnClose.onclick = function () {
  menuMobile.classList.remove("show");
};

// hien va an category mobile listing
var btnCategory = document.querySelector(".listing--fixed");
var categoryMobile = document.querySelector(".listing__category--mobile");
var btnDown = document.getElementById("down");
var coverListing = document.querySelector(".listing__cover");
var cancel = document.getElementById("cancel");

btnCategory.onclick = function () {
  coverListing.classList.add("show"); //hien lop cover khi click vao menu fixed
  categoryMobile.classList.add("show-category"); //dong thoi hien category
};

if (coverListing) {
  //kiem tra neu co lop cover thi an di va dong thoi an category
  coverListing.onclick = function () {
    coverListing.classList.remove("show");
    categoryMobile.classList.remove("show-category");
  };
}

btnDown.onclick = function () {
  categoryMobile.classList.remove("show-category");
  coverListing.classList.remove("show");
};

cancel.onclick = function () {
  categoryMobile.classList.remove("show-category");
  coverListing.classList.remove("show");
};
