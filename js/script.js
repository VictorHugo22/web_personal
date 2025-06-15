// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Validación básica del formulario de contacto
document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const mensaje = this.querySelector('textarea').value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Aquí podrías enviar datos a un backend si lo tienes
  alert("¡Gracias por tu mensaje! Te responderé pronto.");

  this.reset(); // Limpiar formulario
});

