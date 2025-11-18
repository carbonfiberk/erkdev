// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add animation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animate skill tags on hover
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Animate project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('.name');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let charIndex = 0;
    const typingSpeed = 100;

    function typeText() {
        if (charIndex < text.length) {
            heroTitle.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start typing effect after a short delay
    setTimeout(typeText, 500);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add easter egg console message
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cI see you\'re curious about how things work under the hood!', 'font-size: 14px; color: #764ba2;');
console.log('%cFeel free to explore the code. Built with HTML, CSS, and vanilla JavaScript.', 'font-size: 12px; color: #94a3b8;');
console.log('%c- Murat Can Erk', 'font-size: 12px; font-style: italic; color: #667eea;');

// Mobile menu toggle (for future enhancement)
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-toggle');
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';

    if (window.innerWidth <= 768) {
        menuButton.style.display = 'block';
    }

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
    });

    document.querySelector('.navbar .container').appendChild(menuButton);
};

// Initialize on load
window.addEventListener('load', () => {
    // Remove initial loading state
    document.body.style.opacity = '1';

    // Add any additional initialization here
    console.log('Site loaded successfully!');
});

// Smooth reveal for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
});

// Add cursor trail effect (subtle enhancement)
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        document.querySelectorAll('.mobile-active').forEach(el => {
            el.classList.remove('mobile-active');
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScroll);
