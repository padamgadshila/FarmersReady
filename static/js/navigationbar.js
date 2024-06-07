// Side navigation
let menuBar = document.querySelector("nav .fa-bars");
let links = document.querySelector(".links");
let showSideNavBar = () => {
  menuBar.classList.toggle("fa-close");
  links.classList.toggle("active");
};
menuBar.addEventListener("click", showSideNavBar);
let hideSideNavBar = () => {
  menuBar.classList.remove("fa-close");
  links.classList.remove("active");
};

// show searchbar and searchResult
let searchIcon = document.querySelectorAll("[data-search]");
let showSearchBar = () => {
  hideWishlist();
  hideProfile();
  document.querySelector(".searchBar").classList.toggle("active");
  document.querySelector(".searchResults").classList.toggle("active");
  let windowWidth = window.innerWidth;
  if (windowWidth <= 400) {
    document.body.classList.add("active");
    hideSideNavBar();
  }
};
searchIcon.forEach((icon) => {
  icon.addEventListener("click", showSearchBar);
});

// show wishlist
let wishIcon = document.querySelectorAll("[data-wish]");
let showWishlist = () => {
  hideSearchBar();
  hideProfile();
  document.querySelector(".wishlist").classList.toggle("active");
  let windowWidth = window.innerWidth;
  if (windowWidth <= 400) {
    document.body.classList.add("active");
    hideSideNavBar();
  }
};
wishIcon.forEach((icon) => {
  icon.addEventListener("click", showWishlist);
});
let hideWishlist = () => {
  document.querySelector(".wishlist").classList.remove("active");
  document.body.classList.remove("active");
};

// show profile
let profileIcon = document.querySelectorAll("[data-profile]");
let showProfile = () => {
  hideSearchBar();
  hideWishlist();
  document.querySelector(".profileCont").classList.toggle("active");
  let windowWidth = window.innerWidth;
  if (windowWidth <= 400) {
    document.body.classList.add("active");
    hideSideNavBar();
  }
};
profileIcon.forEach((icon) => {
  icon.addEventListener("click", showProfile);
});
let hideProfile = () => {
  document.querySelector(".profileCont").classList.remove("active");
  document.body.classList.remove("active");
};

// remover
window.addEventListener("scroll", () => {
  hideSideNavBar();
  hideSearchBar();
  hideWishlist();
  hideProfile();
});

let wishCont = document.querySelector(".wishCont");

let itemContainer = wishCont.querySelectorAll(".itemContainer");
itemContainer.forEach((icon) => {
  let deleteBtn = icon.querySelector(".fa-trash-can");
  deleteBtn.addEventListener("click", () => {
    wishCont.removeChild(icon);
  });
});

let searchResultsLikes = document.querySelectorAll(".searchResults .fa-heart");
searchResultsLikes.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.style.color = "red";
  });
});

let searchResultsCont = document.querySelector(".searchResults .list");
let messaePopup = document.querySelector(".messaePopup");
let alertMessage = messaePopup.querySelector("h2");

searchResultsLikes.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
  });
});

// searchbar working
let searchBar = document.querySelector(".searchBar input");
searchBar.addEventListener("keyup", (e) => {
  let items = document.querySelectorAll(".searchResults .list .prod");
  let searchInput = searchBar.value.toLowerCase();
  items.forEach((itm) => {
    if (itm.dataset.pname.toLowerCase().includes(searchInput)) {
      itm.style.display = "flex";
    } else {
      itm.style.display = "none";
    }
  });
});
let hideSearchBar = () => {
  document.querySelector(".searchBar").classList.remove("active");
  document.querySelector(".searchResults").classList.remove("active");
  document.body.classList.remove("active");
};
