/* JavaScript */
const barraNavButton = document.querySelector('.barra-nav-button');
const barraNavResponsive = document.querySelector('.barra-nav-responsive');

barraNavButton.addEventListener('click', () => {
    barraNavResponsive.classList.toggle('active');
});

// Cerrar el menú responsive al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-li-responsive a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        barraNavResponsive.classList.remove('active');
    });
});