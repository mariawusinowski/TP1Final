function preload(){
  Precarga();
}

function setup() {
 createCanvas(800, 450); 
}


function draw() {
  background(0);
  
  Animacion();
  tiempoActual = frameCount;
  //Pantallas(fondos[pantallaActual], textos[pantallaActual]);
  //Boton();
  
  
}
