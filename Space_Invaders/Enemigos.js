function Enemigos(x,y){
  this.x = x;
  this.y = y;
  this.vida = true;
  this.derecha = true;

  this.move = function () {
  if(this.derecha){
    this.x += 3;
    if (this.x >= 800){
      this.y += 100;
      this.derecha = false;
    }
  }
  else{
    this.x -= 3;
    if (this.x <= 0){
      this.y += 100;
      this.derecha = true;
    }
  }
  }

  this.mostrar = function() {
    rect(this.x,this.y, 40,40);
  }

}
