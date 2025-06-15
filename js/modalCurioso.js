
const modalCurioso = document.getElementById("modalCurioso");
const cerrarCurioso = document.getElementById("cerrarCurioso");
const tituloCurioso = document.getElementById("tituloCurioso");
const textoCurioso = document.getElementById("textoCurioso");

const datos = {
    1: {
        
        texto: `A finales de 1926 o principios de 1927, el establecimiento británico de criptoanálisis GC&CS adquirió una máquina Enigma comercial modelo D (A26), que fue posteriormente analizada por el criptoanalista Hugh Foss. En 1927, Foss redactó un informe detallado, en el que incluía un método para descifrarla, siempre que se dispusiera de un fragmento de texto en claro conocido (en aquel entonces llamado *crib*) de longitud suficiente. Con solo 180 caracteres de texto en claro conocido, Foss pudo determinar el cableado de los dos rotores más a la derecha.

        Una vez conocido el cableado, un *crib* de apenas 15 caracteres era suficiente para recuperar la configuración. El método de Foss se basaba en principios geométricos más que algebraicos, pero demostró que la Enigma comercial podía ser atacada con éxito. Su método fue posteriormente perfeccionado por su colega Dillwyn (Dilly) Knox, quien desarrolló dos nuevos métodos de criptoanálisis llamados *Rodding* y *Buttoning Up*.

        En 1937, durante la Guerra Civil Española, esto permitió a Knox y al también criptoanalista William Bodsworth descifrar la Enigma K que usaban la Armada Española y la Marina Italiana.

        La Enigma K era muy similar a la Enigma D, pero presentaba una mejora importante: la muesca de avance —necesaria para mover el rotor adyacente— estaba unida al anillo de letras en lugar del cuerpo del rotor. Como máquina comercial principal, la Enigma K fue vendida a diversos clientes nacionales y extranjeros, incluyendo al Ejército Suizo y al Ministerio de Asuntos Exteriores suizo. Además, varios modelos de tiempo de guerra derivaron de este diseño, incluido el modelo Enigma T (Tirpitz) del Ejército Japonés.`
},

    2: {
        
        texto: `El nombre fue derivado de la Bomba, una máquina similar desarrollada por los polacos poco antes del estallido de la Segunda Guerra Mundial. La Bomba explotaba el hecho de que el mismo indicador de mensaje se enviaba dos veces al inicio de cada mensaje, una grave falla en los procedimientos criptográficos alemanes. Aunque el concepto de la Bomba era conocido en Bletchley Park, Turing adoptó un enfoque diferente. Cuando los alemanes descubrieron la debilidad, abandonaron el doble cifrado del indicador de mensaje en la mayoría de las redes de radio el 1 de mayo de 1940, lo que volvió inútil a la Bomba polaca.

        Turing diseñó la Bombe británica en 1939. En comparación con la Bomba polaca, utilizaba un enfoque completamente distinto. Se basaba en la suposición de que un texto en claro conocido (o adivinado), llamado crib, estaba presente en cierta posición del mensaje. Las Bombes fueron construidas por la British Tabulating Company (BTM, luego conocida como ICL) en Letchworth, bajo la supervisión de Harold “Doc” Keen. La primera máquina, llamada "Victory", fue entregada en Bletchley Park el 18 de marzo de 1940.

        Poco tiempo después, la Bombe fue mejorada al añadirle el llamado panel diagonal (diagonal board), una invención del también criptoanalista Gordon Welchman, que redujo significativamente el número de pasos necesarios en el proceso de descifrado. Una segunda Bombe, ya equipada con el panel diagonal de Welchman, fue instalada el 8 de agosto de 1940. Recibió el nombre de “Agnus Dei”, que luego fue abreviado como “Agnes” o “Aggie”. La primera máquina (Victory) también fue modificada posteriormente con el panel diagonal.

        Durante el transcurso de la guerra, se construyeron más de 200 Bombes Turing-Welchman. Para evitar el riesgo de perderlas en caso de un bombardeo, fueron distribuidas entre Bletchley Park y sus llamadas estaciones externas (Outstations) en Wavendon, Adstock, Gayhurst, Eastcote y Stanmore, donde eran operadas por personal de la WRNS (Servicio Naval Femenino Real), técnicos de la RAF y personal civil.`
    },
    3: {
        
        texto: `A finales de la década de 1990, las máquinas cifradoras y otros dispositivos criptográficos dedicados fueron retirados gradualmente en favor de los ordenadores personales modernos (PCs). Hoy en día, la mayoría de los sistemas de cifrado están basados en software y funcionan en PCs estándar o terminales dedicados. Cuando son utilizados por el ejército, estos PCs deben estar ruggedizados (reforzados) para soportar las duras condiciones del campo de batalla.
        
        La mayoría, si no todos, de los PCs militares están basados en procesadores Intel y son capaces de ejecutar sistemas operativos populares como Windows, Linux y Unix. Los PCs ruggedizados suelen ser grandes y pesados, ya que deben contar con un teclado estándar y una pantalla LCD de tamaño razonable.

        Sin embargo, los PCs militares para aplicaciones portátiles y móviles (de campo) suelen ser mucho más pequeños. A veces son lo suficientemente compactos como para sujetarse al equipo táctico del soldado. En algunas máquinas, existen mecanismos especiales para el borrado rápido de claves criptográficas.

        Aunque la mayoría de los PCs de grado militar tienen una alta protección TEMPEST, por su naturaleza son dispositivos no seguros, debido al uso común de sistemas operativos comerciales (commercial-off-the-shelf, COTS), como Windows. Para aplicaciones COMSEC (seguridad de las comunicaciones), a menudo se requiere una unidad adicional de cifrado de datos. Además, deben tomarse medidas especiales para evitar fugas por canales laterales (side channel leakage).`
    }
};

function abrirModalCurioso(num) {
    const dato = datos[num];
    textoCurioso.innerText = dato.texto;
    modalCurioso.style.display = "flex";
}

function cerrarModalCurioso() {
    modalCurioso.style.display = "none";
}

cerrarCurioso.addEventListener("click", cerrarModalCurioso);

window.addEventListener("click", function (event) {
    if (event.target === modalCurioso) {
        cerrarModalCurioso();
    }
});
