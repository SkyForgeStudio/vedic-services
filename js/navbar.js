const menuToggle = document.getElementById('menuToggle');
const closeBtn   = document.getElementById('closeBtn');
const navMenu    = document.getElementById('navMenu');
const navbar     = document.querySelector('.navbar');

function openMenu() {
    navMenu.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; 
}

function closeMenu() {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

navMenu.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});


let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {

    if (navMenu.classList.contains('open')) {
        return;
    }

    const currentScrollY = window.scrollY;

    if (currentScrollY <= 80) {
        navbar.classList.remove('navbar--hidden');
        lastScrollY = currentScrollY;
        return;
    }

    if (currentScrollY > lastScrollY + 10) {
        navbar.classList.add('navbar--hidden'); 
    } else if (currentScrollY < lastScrollY - 10) {
        navbar.classList.remove('navbar--hidden'); 
    }

    lastScrollY = currentScrollY;
});