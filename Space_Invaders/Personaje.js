class Personaje {
    constructor(x) {
        this.x = x;
        this.show = true;
        this.r = 40;
        this.y = 575;
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

      borrar(){
        this.show = false;
        this.y = -height*2;
      }

      mostrar() {
         if(this.show){
           ellipse(this.x,this.y,this.r,this.r);
           return true;
         }
         return false;
    }
    }
