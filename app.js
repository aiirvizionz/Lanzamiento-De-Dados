// Obtener elementos del DOM
const cantidadDados = document.querySelector('#cantidadDados');
const btnLanzar = document.querySelector('#btnLanzar');
const dadosContainer = document.querySelector('#dados');

// Función para obtener un número aleatorio del 1 al 6 (lado del dado)
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para obtener la imagen correspondiente al resultado del lanzamiento
function obtenerImagenDado(numero) {
  switch (numero) {
    case 1:
      return 'img/d1.png';
    case 2:
      return 'img/d2.png';
    case 3:
      return 'img/d3.png';
    case 4:
      return 'img/d4.png';
    case 5:
      return 'img/d5.png';
    case 6:
      return 'img/d6.png';
    default:
      // Manejar el caso en que el número no esté en el rango esperado (1-6)
      console.error('Número fuera del rango esperado');
      return null;
  }
}

// Función para lanzar los dados y mostrar las imágenes
function lanzarDados() {
  // Limpiamos el contenido anterior
  dadosContainer.innerHTML = '';

  const cantidad = parseInt(cantidadDados.value);

  // Generamos y mostramos las imágenes de los dados lanzados
  for (let i = 0; i < cantidad; i++) {
    const resultado = lanzarDado();
    const imagenDado = obtenerImagenDado(resultado);
    if (imagenDado) {
      const imagenElement = document.createElement('img');
      imagenElement.setAttribute('class', 'dado');
      imagenElement.src = imagenDado;
      dadosContainer.appendChild(imagenElement);
    }
  }
}

// Evento click para lanzar los dados
btnLanzar.addEventListener('click', lanzarDados);

// Evento change para actualizar la cantidad de dados
cantidadDados.addEventListener('change', lanzarDados);

// Lanzar los dados al cargar la página
lanzarDados();