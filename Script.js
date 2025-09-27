const titles = ["Gamer 🎮", "Developer 💻", "Dreamer 🚀"];
let i = 0;

function changeTitle() {
  document.querySelector("header p").textContent =
    "I am a " + titles[i];
  i = (i + 1) % titles.length;
}

setInterval(changeTitle, 2000);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});
