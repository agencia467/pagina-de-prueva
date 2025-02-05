let index = 0;
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
    images[index].classList.remove('active');
    index = (index + 1) % totalImages;
    images[index].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    images[index].classList.remove('active');
    index = (index - 1 + totalImages) % totalImages;
    images[index].classList.add('active');
});

// Lógica para la ventana modal
const productos = document.querySelectorAll('.producto');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');



closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});