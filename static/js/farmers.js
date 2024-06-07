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
