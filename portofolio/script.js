// Unique Grey Portfolio JavaScript

const smoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    const headerOffset = 80;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};

const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    if (!menu || !button) return;

    menu.classList.toggle('show');
    button.classList.toggle('active');
};

const initSectionReveal = () => {
    document.querySelectorAll('section > .container').forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealObserver.observe(section);
    });
};

const initContactForm = () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message! (This is a demo - form submission not implemented)');
        form.reset();
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Initialize section reveal animations
    initSectionReveal();

    // Initialize contact form
    initContactForm();

    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
    });
};

const init = () => {
    const typedName = document.getElementById('typed-name');
    if (typedName) {
        typedName.textContent = 'Jefferson Reynan M. Jayme';
    }

    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            event.preventDefault();
            smoothScroll(href);

            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('mobile-menu-button');
            if (menu && menu.classList.contains('show')) {
                menu.classList.remove('show');
                button.classList.remove('active');
            }
        });
    });

    const mobileButton = document.getElementById('mobile-menu-button');
    if (mobileButton) {
        mobileButton.addEventListener('click', toggleMobileMenu);
    }

    initSectionReveal();
    initContactForm();
};

document.addEventListener('DOMContentLoaded', init);
