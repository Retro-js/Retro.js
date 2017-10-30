function Personaje(){
  this.x = 200;
  this.vida = true;

  this.move = function (mov) {
    this.x += mov;
  }

  this.mostrar = function() {
    ellipse(this.x,575, 50,50);
  }

}
