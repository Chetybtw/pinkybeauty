const scrollRightBtn = document.getElementById('arrow-expand-right');
const productosContainer = document.getElementById('shopContent');

scrollRightBtn.addEventListener('click', () => {
    productosContainer.scrollBy({ left: 900, behavior: 'smooth' }); // Ajusta la cantidad de desplazamiento según sea necesario
});

const scrollLeftBtn = document.getElementById('scrollLeftBtn');
scrollLeftBtn.addEventListener('click', () => {
    productosContainer.scrollBy({ left: -900, behavior: 'smooth' }); // Desplaza hacia la izquierda
});
