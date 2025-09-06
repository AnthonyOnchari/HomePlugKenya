 // Navigation and Page Switching
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const mainNav = document.getElementById('mainNav');
            const navLinks = document.querySelectorAll('.nav-link');
            const pageContents = document.querySelectorAll('.page-content');
            
            // Mobile menu toggle
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                this.classList.toggle('active');
            });
            
           // Highlight active navigation link based on current page
const navLinks = document.querySelectorAll('.nav-link');

// Get current page filename (e.g., "about.html")
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');
  
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

            
            // Form submission handling
            const contactForm = document.querySelector('.contact-form form');
            if(contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                });
            }
        });