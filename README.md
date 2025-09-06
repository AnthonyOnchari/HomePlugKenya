# HomePlugKenya

 <div class="header-top">
            <div class="container header-top-content">
                <div class="contact-info">
                    <span><i class="fas fa-phone"></i> +254788610499</span>
                    <span><i class="fas fa-envelope"></i> info@homeplugkenya.co.ke</span>
                </div>
                <div class="social-icons">
                    <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>



        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Plug Kenya - Premium Real Estate</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
</head>
<body>
    <!-- Header Section -->
    <header>
       
        <div class="container header-main">
            <div class="logo">
               <img src="https://i.postimg.cc/ZKscBXZ5/Home-Plug-Kenya-Logo-without-Background.png" alt="Home Plug Kenya Logo" class="logo-img">
               <br>
               <h1>Home<span>plug</span> Kenya</h1>
            </div>

            
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <nav id="mainNav">
                <ul>
                    <li><a href="index.html" class="nav-link active" data-page="home">Home</a></li>
                    <li><a href="/about.html" class="nav-link" data-page="about">About Us</a></li>
                    <li><a href="/founders.html" class="nav-link" data-page="founders">Founders</a></li>
                    <li><a href="/contact.html" class="nav-link" data-page="contact">Contact</a></li>
                </ul>
                <a href="#" class="whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> WhatsApp Now
                </a>
            </nav>
        </div>
    </header>


    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Home Plug Kenya</h3>
                    <p>Your trusted real estate partner in Kenya, providing premium properties and exceptional service.</p>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="founders.html">Founders</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Info</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-phone"></i> +254788610499</li>
                        <li><i class="fas fa-envelope"></i> info@homeplugkenya.co.ke</li>
                        <li><i class="fas fa-map-marker-alt"></i> Nairobi, Kenya</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright © 2025 Home Plug Kenya | Powered by Anthony Onchari</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>






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

        git push origin main
        git pull origin main --rebase




        FOOTER

        <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Home Plug Kenya</h3>
                    <p>Your trusted real estate partner in Kenya, providing premium properties and exceptional service.</p>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="founders.html">Founders</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Info</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-phone"></i> +254788610499</li>
                        <li><i class="fas fa-envelope"></i> info@homeplugkenya.co.ke</li>
                        <li><i class="fas fa-map-marker-alt"></i> Nairobi, Kenya</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright © 2025 Home Plug Kenya | Powered by Anthony Onchari</p>
            </div>
        </div>
    </footer>
