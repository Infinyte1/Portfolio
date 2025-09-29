const titles = ["Gamer 🎮", "Developer 💻", "Dreamer 🚀"];
let i = 0;

function changeTitle() {
  const heroP = document.querySelector(".hero p");
  if (heroP) {
    heroP.textContent = "I am a " + titles[i];
    i = (i + 1) % titles.length;
  }
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

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      status.innerHTML = "⏳ Sending...";
      status.style.color = "white";
      form.querySelector("button").disabled = true;

      emailjs.sendForm("service_m9xtadr", "template_wymq0d6", this)
        .then(() => {
          status.innerHTML = "✅ Message sent successfully!";
          status.style.color = "lime";
          form.reset();
        }, (error) => {
          status.innerHTML = "❌ Failed to send message. Try again later.";
          status.style.color = "red";
          console.error("EmailJS error:", error);
        })
        .finally(() => {
          form.querySelector("button").disabled = false;
          setTimeout(() => { status.innerHTML = ""; }, 5000);
        });
    });
  }
});