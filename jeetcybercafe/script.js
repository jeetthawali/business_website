function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

// Smooth scroll
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.querySelector(".theme-toggle");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀";
  } else {
    btn.innerHTML = "🌙";
  }
}

// Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🚀 Thank you! We will contact you soon.");
  this.reset();
});
// Mobile Menu
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

// Smooth Scroll
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.querySelector(".theme-toggle");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀";
  } else {
    btn.innerHTML = "🌙";
  }
}

// Typing Animation
const text = "Your Trusted Digital Service Partner";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}

window.onload = typeEffect;

// Scroll Reveal Animation
ScrollReveal().reveal(".card", {
  distance: "40px",
  duration: 800,
  easing: "ease-in-out",
  origin: "bottom",
  interval: 200,
  reset: false,
});

ScrollReveal().reveal(".gallery img", {
  interval: 150,
});

ScrollReveal().reveal(".review-card", {
  interval: 200,
});

ScrollReveal().reveal(".contact-container", {
  delay: 300,
});

// Particle Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f2ff",
      opacity: 0.4,
    },
  },
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
