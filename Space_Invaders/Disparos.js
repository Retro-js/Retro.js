class Disparos {
	constructor(x,y,avance) {
		this.x = x;
		this.y = y;
		this.r = 10;
   	this.show = true;
		this.avance = avance;
	}

	mover(){
		this.y += this.avance;
	}

	mostrar(){
		if ( this.show ) {
			fill(255);
			rect(this.x-5,this.y,this.r,this.r*2);
		}
	}

	borrar(){
		this.show = false;
		this.y = -1;
	}

	choque( Enemigo ){
		if( collideRectRect(this.x-5,this.y,this.r,this.r*2,Enemigo.x,Enemigo.y,Enemigo.r,Enemigo.r) ){
			Enemigo.borrar();
			this.borrar();
			return true;
		}
		return false;
	}
}
