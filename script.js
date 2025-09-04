

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
            
            // Page navigation
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get the target page
                    const targetPage = this.getAttribute('data-page');
                    
                    // Update active navigation link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show the target page and hide others
                    pageContents.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === targetPage) {
                            page.classList.add('active');
                        }
                    });
                    
                    // Close mobile menu after selection
                    if (window.innerWidth <= 768) {
                        mainNav.classList.remove('active');
                        menuToggle.classList.remove('active');
                    }
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
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