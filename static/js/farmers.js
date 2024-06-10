// page 1
document.addEventListener("DOMContentLoaded", () => {
  let sideBarItems = document.querySelectorAll(".sidenavbar ul li");
  let pages = document.querySelectorAll(".mainView  .page");
  let mainView = document.querySelector(".mainView");
  sideBarItems.forEach((item) => {
    item.onclick = () => {
      let pageLink = item.getAttribute("data-page");

      pages.forEach((p) => {
        if (p.id === pageLink) {
          p.classList.add("active");
        } else {
          p.classList.remove("active");
        }
      });

      sideBarItems.forEach((sidebarItem) => {
        sidebarItem.classList.remove("active");
      });
      item.classList.add("active");
    };
  });
});

// page 2

let farmersIcon = document.querySelector("[data-profile]");
let profileCont = document.querySelector(".profileCont");
farmersIcon.addEventListener("click", () => {
  profileCont.classList.toggle("active");
});

const messageInput = document.querySelector(".messInput input");
const sendMessageButton = document.querySelector(".messInput i");
sendMessageButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function scrollToBottom() {
  const messageBody = document.querySelector(".messBody");
  messageBody.scrollTop = messageBody.scrollHeight;
}
function sendMessage() {
  const messageInput = document.querySelector(".messInput input");
  const message = messageInput.value.trim();
  if (message !== "") {
    let messBody = document.querySelector(".messBody");

    let div = document.createElement("div");

    div.className = "outgoing chat";

    div.innerHTML = `<p>${message}</p>`;
    messBody.appendChild(div);

    scrollToBottom();
    messageInput.value = ""; // Clear the input field after sending
  }
}

let mainArrow = document.querySelector(".main .fa-arrow-right");
let sideNavbar = document.querySelector(".sidenavbar");

mainArrow.addEventListener("click", () => {
  sideNavbar.classList.toggle("active");
  mainArrow.classList.toggle("active");
  mainArrow.classList.toggle("fa-arrow-left");
});

document.addEventListener("click", (e) => {
  if (!sideNavbar.contains(e.target) && !mainArrow.contains(e.target)) {
    sideNavbar.classList.remove("active");
    mainArrow.classList.remove("active");
    mainArrow.classList.remove("fa-arrow-left");
  }
});

let responsiveFunctions = () => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 400) {
    console.log("yes");

    document.querySelector(".addItem").innerHTML = `<i class="fas fa-add"></i>`;
    document.querySelector(".addCate").innerHTML = `<i class="fas fa-add"></i>`;
  } else {
    console.log("no");
    document.querySelector(
      ".addItem"
    ).innerHTML = `Add item <i class="fas fa-add"></i>`;
    document.querySelector(
      ".addCate"
    ).innerHTML = `Add Category <i class="fas fa-add"></i>`;
  }
};
window.onload = () => responsiveFunctions();
window.onresize = () => responsiveFunctions();

let usersList = document.querySelector(".users-list");
let userCard = usersList.querySelectorAll(".userCard");

userCard.forEach((card) => {
  card.addEventListener("click", () => {
    if (window.innerWidth <= 400) {
      usersList.classList.toggle("active");
    }
  });
});

let backToPrevious = document.querySelector(".messTop .fa-arrow-left");
backToPrevious.addEventListener("click", () => {
  usersList.classList.remove("active");
});
