let messageContainer = document.querySelector(".messageContainer");
let message_main_Box = document.querySelector(".message_main_Box");
let mes = document.querySelector("#mes");
let respChatNow = document.querySelector("[data-chat]");

let showChat = () => {
  messageContainer.classList.toggle("active");
  message_main_Box.classList.remove("active");
  // document.body.classList.toggle("active");
  hideSideNavBar();
  document.querySelector(".farmersLists").classList.remove("active");
};

mes.addEventListener("click", showChat);
respChatNow.addEventListener("click", showChat);

let farmersLists = messageContainer.querySelector(".farmersLists");

let users = farmersLists.querySelectorAll(".usersss");
users.forEach((u) => {
  u.addEventListener("click", () => {
    message_main_Box.classList.add("active");
    farmersLists.classList.add("active");
    scrollToBottom();
    document.querySelector(".messInput input").dataset.fid = u.dataset.fid;

    let messTop = document.querySelector(".messTop");
    messTop.innerHTML = `
      <i class="fas fa-arrow-left"></i>
      <img src="${u.querySelector("img").src}" />
      <h1>${u.querySelector("h2").textContent}</h1>`;
  });
});

message_main_Box.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-arrow-left")) {
    farmersLists.classList.remove("active");
  }
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
