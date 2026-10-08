//Todo todito acá carga la info y animaciones, no lo toques por las dudas

function Precarga(){
  Propuesta = loadImage("data/La-propuesta.png");
  Malo = loadImage("data/Final-malo.png");
  Neutral = loadImage("data/Final-neutral.png");
  Bueno = loadImage("data/Final-bueno.png");
  Maray = loadImage("data/Unido-al-maray.png");
  Abandonar = loadImage("data/Abandona-seeker-y-tiburon.png");
  Calamar = loadImage("data/Calamar-gigante.png");
  Cofres = loadImage("data/Carga-de-cofres.png");
  ExplorarCueva = loadImage("data/Explora-cueva.png");
  DejasMaray = loadImage("data/Suelta-seeker-del-maray.png");
  Traicion = loadImage("data/Te-empujan-del-barco.png");
  Vuelta = loadImage("data/Vuelta-a-maray-y-fama.png");
  Fondo = loadImage("data/Fondo.png");
  
}

//Para cargar la animación del inicio. Dios me salve.

function cargarAccion(nombre, cantidad) {
  let frames = [];
  for (let i = 1; i <= cantidad; i++) {
    frames.push(loadImage('data/' + nombre + '_' + i + '.png'));
  }
  return frames;
}

function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}
