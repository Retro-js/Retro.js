class Personaje {
    constructor(x) {
        this.x = x;
    }
      move(){
        if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)){
          this.x = this.x;
        }
        else if(keyIsDown(LEFT_ARROW)){
          this.x -= 3;
        }
        else if(keyIsDown(RIGHT_ARROW)){
          this.x += 3;
        }
      }

      mostrar() {
         ellipse(this.x,575,50,50);
      }
    }
