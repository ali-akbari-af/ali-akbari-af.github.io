// assets/js/main.js

// Header Scroll Effect
const header = document.getElementById('header');
const updateHeader = () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Throttle scroll event for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            updateHeader();
            scrollTimeout = null;
        }, 10);
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('.nav-item');

const toggleMenu = () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
};

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

// Mobile Submenu Toggle
if (navItems.length > 0) {
    navItems.forEach(item => {
        if (item.querySelector('.submenu')) {
            const link = item.querySelector('.nav-link');
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 991) {
                    e.preventDefault();
                    e.stopPropagation();
                    const isActive = item.classList.contains('active');
                    
                    // Close all other submenus
                    navItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                    
                    // Update aria-expanded
                    const submenu = item.querySelector('.submenu');
                    const isExpanded = item.classList.contains('active');
                    link.setAttribute('aria-expanded', isExpanded);
                    submenu.setAttribute('aria-hidden', !isExpanded);
                }
            });
        }
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
        if (nav && mobileMenuBtn) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                navItems.forEach(item => {
                    item.classList.remove('active');
                    const link = item.querySelector('.nav-link');
                    const submenu = item.querySelector('.submenu');
                    if (link && submenu) {
                        link.setAttribute('aria-expanded', 'false');
                        submenu.setAttribute('aria-hidden', 'true');
                    }
                });
            }
        }
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (window.innerWidth <= 991 && nav && nav.classList.contains('active')) {
            toggleMenu();
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 991) {
                    if (mobileMenuBtn && nav) {
                        mobileMenuBtn.classList.remove('active');
                        nav.classList.remove('active');
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                        document.body.style.overflow = '';
                        navItems.forEach(item => {
                            item.classList.remove('active');
                            const link = item.querySelector('.nav-link');
                            const submenu = item.querySelector('.submenu');
                            if (link && submenu) {
                                link.setAttribute('aria-expanded', 'false');
                                submenu.setAttribute('aria-hidden', 'true');
                            }
                        });
                    }
                }
                
                // Scroll to target
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, href);
            }
        }
    });
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 991 && nav && nav.classList.contains('active')) {
            toggleMenu();
        }
        
        // Update header on resize
        updateHeader();
    }, 250);
});

// Handle orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        if (window.innerWidth > 991 && nav && nav.classList.contains('active')) {
            toggleMenu();
        }
    }, 300);
});

// Initialize Lightbox
if (typeof lightbox !== 'undefined') {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "تصویر %1 از %2",
        'fadeDuration': 300
    });
}

// Initial header state
updateHeader();