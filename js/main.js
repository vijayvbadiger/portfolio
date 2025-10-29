const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.classList.add(`${currentTheme}-theme`);
updateThemeIcon(currentTheme);
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', () => {
    const isDarkTheme = htmlElement.classList.contains('dark-theme');
    const newTheme = isDarkTheme ? 'light' : 'dark';
    htmlElement.classList.remove(`${isDarkTheme ? 'dark' : 'light'}-theme`);
    htmlElement.classList.add(`${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formStatus = document.querySelector('.form-status');
        if (!name || !email || !message) {
            showFormStatus('Please fill in all fields', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showFormStatus('Please enter a valid email', 'error');
            return;
        }
        showFormStatus('Message received! Thank you for connecting.', 'success');
        contactForm.reset();
    });
    function showFormStatus(message, type) {
        const statusElement = document.querySelector('.form-status');
        statusElement.textContent = message;
        statusElement.className = `form-status ${type}`;
        setTimeout(() => {
            statusElement.textContent = '';
            statusElement.className = 'form-status';
        }, 5000);
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});