  
  export const crearCartas = (cartas,nombre) => {
      const nuevaImagen = document.createElement('img');
      nuevaImagen.classList.add('carta');
      nuevaImagen.src = 'public/Cartas/' + cartas + '.png';
      nombre.appendChild(nuevaImagen);
  }
  