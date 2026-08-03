const menuToggle = document.getElementById('menuToggle');
  const closeBtn   = document.getElementById('closeBtn');
  const navMenu    = document.getElementById('navMenu');
 
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