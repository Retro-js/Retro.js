var nave;
var mons = [];

function setup() {
  var altura = 600;
  var ancho = 800;
  createCanvas(ancho, altura);
  nave = new Personaje();
  for(var i = 0; i < 8; i++){
    mons[i] = new Enemigos(100*i,100);
  }
}

function draw() {
  background(0);
  nave.mostrar();
  for(var i = 0; i < mons.length; i++){
    mons[i].mostrar();
    mons[i].move();
  }
}


  function keyPressed(){
      if(keyCode === RIGHT_ARROW){
          nave.move(5);
      }
      else if (keyCode === LEFT_ARROW){
          nave.move(-5);
      }
    }
