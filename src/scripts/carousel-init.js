// src/scripts/carousel-init.js

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll("[data-carousel-id]");

    carousels.forEach((carousel) => {
        let index = 0;
        const slides = carousel.querySelectorAll("div");
        const totalSlides = slides.length / 2;  // Solo cuenta las imágenes originales
        const visibleImages = parseInt(carousel.getAttribute("data-visible-images"), 10) || 1;

        function showNextSlide() {
            index++;
            const offset = index * -100 / visibleImages;

            // Aplicar el desplazamiento
            carousel.style.transition = 'transform 0.7s ease-in-out';
            carousel.style.transform = `translateX(${offset}%)`;

            // Resetear el carrusel al principio sin transición visible
            if (index === totalSlides) {
                setTimeout(() => {
                    carousel.style.transition = 'none';
                    index = 0;
                    carousel.style.transform = 'translateX(0)';
                }, 700); // Tiempo de la transición
            }
        }

        setInterval(showNextSlide, 2000); // Cambia de imagen cada segundo
    });
});
