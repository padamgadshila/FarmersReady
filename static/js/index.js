let leftArrow = document.querySelector(".fa-caret-left");
let rightArrow = document.querySelector(".fa-caret-right");
let list = document.querySelector(".category .list");

leftArrow.addEventListener("click", function () {
  list.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", function () {
  list.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

let menuBar = document.querySelector(".fa-bars");
let links = document.querySelector(".links");

let hideSideNavBar = () => {
  menuBar.classList.toggle("fa-close");
  links.classList.toggle("active");
};
menuBar.addEventListener("click", hideSideNavBar);

window.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-close");
  links.classList.remove("active");
  hideSearchBar();
  document.querySelector(".profileCont").classList.remove("active");
  let scrollPosition = window.scrollY;
  let headerHeight = document.querySelector("header").offsetHeight - 200;
  let messaging = document.querySelector(".messaging");
  if (scrollPosition > headerHeight) {
    messaging.classList.add("active");
  } else {
    messaging.classList.remove("active");
  }
});

let showSearchBar = () => {
  document.querySelector(".searchBar").classList.toggle("active");
  document.querySelector(".searchResults").classList.toggle("active");
};

let hideSearchBar = () => {
  document.querySelector(".searchBar").classList.remove("active");
  document.querySelector(".searchResults").classList.remove("active");
  document.querySelector(".searchBar input").value = "";
  document.querySelector(".wishlist").classList.remove("active");
};

let showWishlist = () => {
  document.querySelector(".wishlist").classList.toggle("active");
  hideSideNavBar();
};

let hideWishlist = () => {
  document.querySelector(".wishlist").classList.remove("active");
};

let showProfile = () => {
  document.querySelector(".profileCont").classList.toggle("active");
};

let searchBar = document.querySelector(".searchBar input");

searchBar.addEventListener("keyup", (e) => {
  let items = document.querySelectorAll(".list .prod");
  let serachinput = searchBar.value.toLowerCase();

  items.forEach((itm) => {
    console.log(itm.dataset.productname.toLowerCase());
    if (itm.dataset.productname.toLowerCase().includes(serachinput)) {
      itm.style.display = "flex";
    } else {
      itm.style.display = "none";
    }
  });
});

// TODO: Need to add the function to add the item in the wishlist and remove it from the serachlist
let searchResultsLikes = document.querySelectorAll(".searchResults .fa-heart");
searchResultsLikes.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.style.color = "red";
  });
});

let wishCont = document.querySelector(".wishCont");
let itemContainer = wishCont.querySelectorAll(".itemContainer");

itemContainer.forEach((icon) => {
  let deleteBtn = icon.querySelector(".fa-trash-can");
  deleteBtn.addEventListener("click", () => {
    wishCont.removeChild(icon);
  });
});
