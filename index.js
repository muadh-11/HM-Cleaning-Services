// NAV TOGGLE
const menu = document.getElementById("menu-toggle");
const links = document.getElementById("links");

menu.addEventListener("click", () => {
  links.classList.toggle("active");
});


// SCROLL ANIMATION
const elements = document.querySelectorAll(
  ".animate, .animate-left, .animate-right"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach((el) => observer.observe(el));