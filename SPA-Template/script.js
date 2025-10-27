// SPA Navigation System Template
// Easy to customize and extend for any project

// Page content templates - Modify these for your project
const pages = {
    home: {
        title: 'Home - MyApp',
        content: `
            <div class="page-container">
                <h1 class="page-title">Welcome to MyApp</h1>
                <div class="page-content">
                    <p>This is a template for creating single-page applications with smooth navigation.</p>
                    
                    <h2>Features</h2>
                    <ul>
                        <li>Fast page switching without reloads</li>
                        <li>Active navigation highlighting</li>
                        <li>Responsive design</li>
                        <li>Easy to customize</li>
                        <li>No external dependencies</li>
                    </ul>
                    
                    <h2>Getting Started</h2>
                    <p>To customize this template:</p>
                    <ol>
                        <li>Edit the <code>pages</code> object in script.js</li>
                        <li>Update navigation links in index.html</li>
                        <li>Modify styles in styles.css</li>
                        <li>Add your own content and functionality</li>
                    </ol>
                </div>
            </div>
        `
    },
    about: {
        title: 'About - MyApp',
        content: `
            <div class="page-container">
                <h1 class="page-title">About Us</h1>
                <div class="page-content">
                    <p>Learn more about our company and what we do.</p>
                    
                    <h2>Our Mission</h2>
                    <p>We create amazing web experiences that are both beautiful and functional.</p>
                    
                    <h2>Our Team</h2>
                    <p>Our team consists of talented developers, designers, and creators who are passionate about building great products.</p>
                    
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Years of experience in web development</li>
                        <li>Focus on user experience</li>
                        <li>Modern technologies and best practices</li>
                        <li>Dedicated support and maintenance</li>
                    </ul>
                </div>
            </div>
        `
    },
    services: {
        title: 'Services - MyApp',
        content: `
            <div class="page-container">
                <h1 class="page-title">Our Services</h1>
                <div class="page-content">
                    <p>We offer a wide range of services to help your business grow.</p>
                    
                    <h2>Web Development</h2>
                    <p>Custom websites and web applications built with modern technologies.</p>
                    
                    <h2>UI/UX Design</h2>
                    <p>Beautiful, user-friendly interfaces that your customers will love.</p>
                    
                    <h2>Consulting</h2>
                    <p>Expert advice on technology choices and implementation strategies.</p>
                    
                    <h2>Support & Maintenance</h2>
                    <p>Ongoing support to keep your applications running smoothly.</p>
                </div>
            </div>
        `
    },
    contact: {
        title: 'Contact - MyApp',
        content: `
            <div class="page-container">
                <h1 class="page-title">Contact Us</h1>
                <div class="page-content">
                    <p>Get in touch with us! We'd love to hear from you.</p>
                    
                    <h2>Get In Touch</h2>
                    <p>Ready to start your next project? Contact us today!</p>
                    
                    <h3>Contact Information</h3>
                    <ul>
                        <li><strong>Email:</strong> contact@myapp.com</li>
                        <li><strong>Phone:</strong> (555) 123-4567</li>
                        <li><strong>Address:</strong> 123 Main Street, City, State 12345</li>
                    </ul>
                    
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
                    Saturday: 10:00 AM - 4:00 PM<br>
                    Sunday: Closed</p>
                </div>
            </div>
        `
    }
};

// Navigation function - handles page switching
function navigateToPage(pageName) {
    if (pages[pageName]) {
        // Update page title
        document.title = pages[pageName].title;
        
        // Replace main content
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = pages[pageName].content;
        
        // Update active navigation
        updateActiveNav(pageName);
        
        // Scroll to top
        window.scrollTo(0, 0);
    } else {
        console.error(`Page "${pageName}" not found`);
    }
}

// Update active navigation link
function updateActiveNav(activePage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activePage}`) {
            link.classList.add('active');
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation event listeners
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('href').substring(1);
            navigateToPage(pageName);
        });
    });
    
    // Set up button event listeners (if you have buttons with onclick)
    const buttons = document.querySelectorAll('[onclick*="navigateToPage"]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const onclick = this.getAttribute('onclick');
            const pageName = onclick.match(/navigateToPage\('([^']+)'\)/)[1];
            navigateToPage(pageName);
        });
    });
    
    // Load home page by default
    navigateToPage('home');
});

// Optional: Add smooth transitions
function addPageTransition() {
    const mainContent = document.getElementById('main-content');
    mainContent.style.transition = 'opacity 0.3s ease-in-out';
    
    // Fade out, change content, fade in
    mainContent.style.opacity = '0';
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 150);
}

// Export for module usage (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { navigateToPage, pages };
}