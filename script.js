document.addEventListener('DOMContentLoaded', () => {
    console.log('Script.js carregado. Interatividade ativada.');

    // --- 1. Menu Hamburger Responsivo ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('#main-nav-list');
    
    const toggleMenu = () => {
        navList.classList.toggle('open');
        menuToggle.classList.toggle('active');
        const isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    };

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                toggleMenu();
            }
        });
    });


    // --- 2. Animação de Scroll para o Header (Adicionar sombra ao rolar) ---
    const header = document.querySelector('.main-header');
    
    // Adiciona ou remove a classe 'scrolled' com base na posição do scroll
    const checkScroll = () => {
        if (window.scrollY > 50) { // Se rolar mais de 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    // Inicializa a verificação e adiciona o listener
    checkScroll(); 
    window.addEventListener('scroll', checkScroll);
});