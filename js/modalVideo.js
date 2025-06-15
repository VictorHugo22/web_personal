
const modal = document.getElementById("modalVideo");
const cerrar = document.getElementById("cerrarModal");
const video = document.getElementById("videoPasatiempo");

// Configuración de modal dado el navegador
function abrirModal() {
    modal.style.display = "flex";

    
    setTimeout(() => {
        video.volume = 0.02;
    }, 100);
}

function cerrarModal() {
    modal.style.display = "none";

    // Ajustes del video
    setTimeout(() => {
        video.pause();
        video.currentTime = 0;
    }, 300);
}

cerrar.addEventListener("click", cerrarModal);

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        cerrarModal();
    }
});
