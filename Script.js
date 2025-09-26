const titles = ["Gamer 🎮", "Developer 💻", "Dreamer 🚀"];
let i = 0;

function changeTitle() {
  document.querySelector("header p").textContent =
    "I am a " + titles[i];
  i = (i + 1) % titles.length;
}

setInterval(changeTitle, 2000);