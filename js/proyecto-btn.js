const proyectosData = [
  {
    nombre: "Trabajo de Titulación",
    imagenes: [
      "assets/img/DFIE.jpg",
      "assets/img/proyectos/titulacion-2.jpg",
      "assets/img/proyectos/titulacion-3.jpg"
    ],
    detalles: [
      {
        titulo: "Título",
        contenido: "Trabajo de Titulación (En proceso). Aquí puedes colocar el nombre formal del proyecto o sistema que estás desarrollando."
      },
      {
        titulo: "Objetivo",
        contenido: "Describe aquí el objetivo general del proyecto: qué busca resolver, mejorar o automatizar."
      },
      {
        titulo: "Problemática",
        contenido: "Explica cuál es el problema principal que detectaste y por qué fue necesario proponer esta solución."
      },
      {
        titulo: "Tecnologías utilizadas",
        contenido: "Menciona aquí los lenguajes, frameworks, herramientas o metodologías utilizadas en el desarrollo."
      },
      {
        titulo: "Avance actual",
        contenido: "Sección ideal para indicar si estás en fase de análisis, diseño, desarrollo, pruebas o documentación."
      }
    ]
  },
  {
    nombre: "Criptografía",
    imagenes: [
      "assets/img/Cripto.png",
      "assets/img/proyectos/cripto-2.jpg",
      "assets/img/proyectos/cripto-3.jpg"
    ],
    detalles: [
      {
        titulo: "Título",
        contenido: "Proyecto académico relacionado con criptografía. Aquí puedes indicar si trabajaste cifrado clásico, moderno o algún caso práctico."
      },
      {
        titulo: "Objetivo",
        contenido: "Expón qué buscabas demostrar o construir: proteger información, implementar algoritmos o analizar métodos de cifrado."
      },
      {
        titulo: "Problemática",
        contenido: "Describe la necesidad de proteger la información y cómo la criptografía ayuda a mantener la confidencialidad e integridad."
      },
      {
        titulo: "Desarrollo",
        contenido: "Aquí puedes resumir el proceso seguido, pruebas realizadas, lógica implementada y resultados obtenidos."
      },
      {
        titulo: "Resultado",
        contenido: "Sección para mostrar qué aprendiste, qué lograste y qué impacto tuvo el proyecto en tu formación."
      }
    ]
  }
];

const botonesProyecto = document.querySelectorAll(".proyecto-btn");
const imgPrincipal = document.getElementById("proyecto-imagen-img");
const thumbsContainer = document.getElementById("proyecto-imagen-thumbs");
const imgContador = document.getElementById("proyecto-imagen-contador");
const descripcionInfo = document.getElementById("proyecto-descripcion-info");
const detalleContador = document.getElementById("proyecto-detalle-contador");

const btnPrevImage = document.getElementById("prev-image");
const btnNextImage = document.getElementById("next-image");
const btnNextDesc = document.getElementById("next-desc");

const estado = {
  proyectoActual: 0,
  imagenActual: 0,
  detalleActual: 0
};

function renderProyectoActivo() {
  botonesProyecto.forEach((btn, index) => {
    btn.classList.toggle("selected", index === estado.proyectoActual);
  });

  renderImagen();
  renderDetalle();
}

function renderImagen() {
  const proyecto = proyectosData[estado.proyectoActual];
  const imagenActual = proyecto.imagenes[estado.imagenActual];

  imgPrincipal.src = imagenActual;
  imgPrincipal.alt = `${proyecto.nombre} - imagen ${estado.imagenActual + 1}`;
  imgContador.textContent = `Imagen ${estado.imagenActual + 1} de ${proyecto.imagenes.length}`;

  renderThumbs();
}

function renderThumbs() {
  const proyecto = proyectosData[estado.proyectoActual];
  thumbsContainer.innerHTML = "";

  proyecto.imagenes.forEach((src, index) => {
    const thumbBtn = document.createElement("button");
    thumbBtn.className = "proyecto-thumb";
    if (index === estado.imagenActual) {
      thumbBtn.classList.add("active");
    }

    thumbBtn.innerHTML = `<img src="${src}" alt="Miniatura ${index + 1} de ${proyecto.nombre}">`;

    thumbBtn.addEventListener("click", () => {
      estado.imagenActual = index;
      renderImagen();
    });

    thumbsContainer.appendChild(thumbBtn);
  });
}

function renderDetalle() {
  const proyecto = proyectosData[estado.proyectoActual];
  const detalle = proyecto.detalles[estado.detalleActual];

  descripcionInfo.innerHTML = `
    <span class="proyecto-badge">${proyecto.nombre}</span>
    <h3 class="proyecto-seccion">${detalle.titulo}</h3>
    <p class="proyecto-texto">${detalle.contenido}</p>
    `;

  detalleContador.textContent = `Sección ${estado.detalleActual + 1} de ${proyecto.detalles.length}`;
}

function cambiarProyecto(index) {
  estado.proyectoActual = index;
  estado.imagenActual = 0;
  estado.detalleActual = 0;
  renderProyectoActivo();
}

botonesProyecto.forEach((btn) => {
  btn.addEventListener("click", () => {
    const index = Number(btn.dataset.proyecto);
    cambiarProyecto(index);
  });
});

btnPrevImage.addEventListener("click", () => {
  const total = proyectosData[estado.proyectoActual].imagenes.length;
  estado.imagenActual = (estado.imagenActual - 1 + total) % total;
  renderImagen();
});

btnNextImage.addEventListener("click", () => {
  const total = proyectosData[estado.proyectoActual].imagenes.length;
  estado.imagenActual = (estado.imagenActual + 1) % total;
  renderImagen();
});

btnNextDesc.addEventListener("click", () => {
  const total = proyectosData[estado.proyectoActual].detalles.length;
  estado.detalleActual = (estado.detalleActual + 1) % total;
  renderDetalle();
});

renderProyectoActivo();