let textos = ["TEXTO 1", "TEXTO 2"]
let pantallaActual = 0

function preload(){
  Precarga();
}

function setup() {
 createCanvas(800, 450); 
}


function draw() {
  background(0);
  Pantallas(fondos[pantallaActual], textos[pantallaActual]);
  Boton();
  
  
}

//Prueba de mouseclicked, utilizado para cambiar de fondo

//La lógica detrás de esto se trata que hay una variable en la cual pantallaActual es un valor que se le puede asignar
//a los function (pantallas), la cual, al presionar el click con mouseClicked debería aumentar su valor por uno
//llevando a la pantalla siguiente. mouseClicked, let, function, dist (?), ellipseMode (?). DRAW. Algo con i (?) Un
//ciclo for tal vez.

//Parámetros**

function mouseClicked(){
  
  
}

 /* 
  if ( pantallaActual == 0 && mouseX > 300 && mouseX < 500 && mouseY > 520 && mouseY < 570) {
  pantallaActual = 1;
  }
 if (pantallaActual == 1 && mouseX > 200 && mouseX < 600 && mouseY > 500 && mouseY < 560){
   pantallaActual = 2;
   */
