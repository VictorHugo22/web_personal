
const modal = document.getElementById("modalVideo");
const cerrar = document.getElementById("cerrarModal");
const video = document.getElementById("videoPasatiempo");

// Abre el modal y ajusta volumen solo cuando se hace clic en el enlace
function abrirModal() {
    modal.style.display = "flex";

    // Esperamos brevemente antes de ajustar el volumen (por políticas del navegador)
    setTimeout(() => {
        video.volume = 0.02;
    }, 100);
}

function cerrarModal() {
    modal.style.display = "none";

    // Aseguramos que el video se detiene y se reinicia después del cierre
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
