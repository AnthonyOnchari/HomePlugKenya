// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Stats Counter
const counters = document.querySelectorAll(".count");
let started = false;

function startCount() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 200;

    function updateCount() {
      count += increment;
      if (count < target) {
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    }
    updateCount();
  });
}

window.addEventListener("scroll", () => {
  const stats = document.querySelector("#stats");
  const pos = stats.getBoundingClientRect().top;
  const screenPos = window.innerHeight;
  if (pos < screenPos && !started) {
    startCount();
    started = true;
  }
});

// Testimonials Carousel
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.remove("active");
    if (idx === i) t.classList.add("active");
  });
}

function nextTestimonial() {
  index++;
  if (index >= testimonials.length) index = 0;
  showTestimonial(index);
}

setInterval(nextTestimonial, 3000);
showTestimonial(index);


// Reveal on scroll
const revealElements = document.querySelectorAll('.fade-in, .fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
