const grid = document.querySelector('.certificados__grid');
const cards = document.querySelectorAll('.certificado-card'); // Todas las tarjetas originales
const totalCards = cards.length; // Número total de tarjetas
const cardWidth = cards[0].offsetWidth; // Ancho de una tarjeta

// Clonamos las tarjetas y las agregamos al final para crear un ciclo infinito
function cloneCards() {
    cards.forEach(card => {
        const clone = card.cloneNode(true); // Clonamos cada tarjeta
        grid.appendChild(clone); // Agregamos la tarjeta clonada al final
    });
}

// Función para mover la galería
let currentOffset = 0;
function moveGallery() {
    currentOffset -= 1; // Moverse un pixel hacia la izquierda
    grid.style.transform = `translateX(${currentOffset}px)`; // Aplicamos el desplazamiento

    // Cuando lleguemos al final, reseteamos el ciclo
    if (Math.abs(currentOffset) >= cardWidth * totalCards) {
        currentOffset = 0; // Reiniciamos el desplazamiento
        grid.style.transition = "none"; // Desactivamos la transición para el reinicio
        grid.style.transform = `translateX(${currentOffset}px)`; // Colocamos el primer elemento
    } else {
        grid.style.transition = "transform 0.001s linear"; // Reactivamos la transición
    }

    requestAnimationFrame(moveGallery); // Llamamos a la función para el siguiente frame
}

// Iniciar el desplazamiento y clonación
cloneCards(); // Clonamos las tarjetas al cargar la página
moveGallery(); // Comenzamos el movimiento continuo
