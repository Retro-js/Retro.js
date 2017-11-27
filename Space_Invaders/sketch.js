  var basicos = [];
  var medios = [];
  var dificiles = [];
  var nave;
  var balas = [] ;
  var ancho = 600;
  var alto = 600;
  var balEnemigo = [];
  var puntaje = 0;
  var myFont;
  var shoot;
  var invaderkilled;
  var lives = 3;
  var muertes = [];

  function preload() {
  soundFormats('mp3', 'ogg');
   shoot = loadSound('shoot.mp3');
   invaderkilled = loadSound('invaderkilled.mp3');
   myFont = loadFont('ca.ttf');
}


  function setup(){
    createCanvas(ancho,alto);
    nave =  new Personaje(ancho/2);

    for(var i = 0; i < 10; i++){
      basicos[i] = [];
      for(var j = 0; j < 3; j++)
        basicos[i][j] = new Enemigos(500-i*50,200+j*50,10);
    }

    for(var i = 0; i < 10; i++){
      medios[i] = [];
      for(var j = 0; j < 2; j++)
        medios[i][j] = new Enemigos(50+i*50,100+j*50,20);
    }

    for(var i = 0; i < 10; i++){
      dificiles[i] = [];
      for(var j = 0; j < 1; j++)
        dificiles[i][j] = new Enemigos(500-i*50,50+j*50,30);
    }

    frameRate( 45 );
  }

  function draw(){
    background(0);
  if (lives == 0) {
  fill(255);
  textFont(myFont);
  textSize(30);
	text("GAME OVER", 185, 250);
	textSize(25);
	text("Puntaje:  ", 180, 300);
	text(puntaje, 330, 300);
	textSize(18);
	fill(255, 100, 0);
	noLoop();

	}
	else {

    for(i=0; i<lives; i++) {
      push()
      fill(255,0,0);
      translate(360+(i*20), 15);
      scale(0.5);
      beginShape();
      vertex(50, 15);
      bezierVertex(50, -5, 90, 5, 50, 40);
      vertex(50, 15);
      bezierVertex(50, -5, 10, 5, 50, 40);
      endShape(CLOSE);
      pop();
    }
    textAlign(LEFT);
    textFont(myFont);
    textSize(20);
    text("SCORE", 30, 30);
    text(puntaje, 120, 30);
    var cambio = false;
    for (var i = 0; i < basicos.length; i++){
      for(var j = 0; j < 3; j++){
        basicos[i][j].mostrar();
        basicos[i][j].move();
        if((frameCount % 109 == 0) && (i % 2== 0) && basicos[i][j].y >= 0 ){
        muerte = new Disparos(basicos[i][j].x,basicos[i][j].y,5);
        muertes.push(muerte);
        }
        if( basicos[i][j].x > ancho-30 || basicos[i][j].x <0 )
          cambio = true;
      }
    }

    for (var i = 0; i < medios.length; i++){
      for(var j = 0; j < 2; j++){
        fill(100);
        medios[i][j].mostrar();
        medios[i][j].move();
        if((frameCount % 89 == 0) && (i % 2== 0) && medios[i][j].y >= 0){
        muerte = new Disparos(medios[i][j].x,medios[i][j].y,5);
        muertes.push(muerte);
        }
        if( medios[i][j].x > ancho-30 || medios[i][j].x <0 )
          cambio = true;
        fill(255);
      }
    }

    for (var i = 0; i < dificiles.length; i++){
      for(var j = 0; j < 1; j++){
        fill(200);
        dificiles[i][j].mostrar();
        dificiles[i][j].move();
        if((frameCount % 137 == 0 ) && (i % 2== 0) && dificiles[i][j].y >= 0){
        muerte = new Disparos(dificiles[i][j].x,dificiles[i][j].y,5);
        muertes.push(muerte);
        }
        if( medios[i][j].x > ancho-30 || medios[i][j].x <0 )
          cambio = true;
        fill(255);
      }
    }

    for(var i = 0; i < muertes.length; i++){
      if(i % 2== 0){
      muertes[i].mostrar();
      muertes[i].mover();
      if(collideRectCircle(muertes[i].x,muertes[i].y-50,muertes[i].r,muertes[i].r*2,nave.x,nave.y,nave.r)){
        lives = 2;
      }
    }
    }


    if( cambio ){
      for (var i = 0; i < medios.length; i++){
        for(var j = 0; j < 2; j++)
          medios[i][j].bajar();
      }
      for (var i = 0; i < dificiles.length; i++){
        for(var j = 0; j < 1; j++)
          dificiles[i][j].bajar();
      }
      for (var i = 0; i < basicos.length; i++){
        for(var j = 0; j < 3; j++)
          basicos[i][j].bajar();
      }
    }

    for (var i = 0; i < balas.length; i++){
      balas[i].mostrar();
      balas[i].mover();
      for (var j = 0; j < basicos.length; j++){
        for (var k = 0; k < basicos[j].length; k++)
          if(balas[i].choque(basicos[j][k])){
            puntaje += basicos[j][k].type;
            invaderkilled.setVolume(0.1);
            invaderkilled.play();
          }
      }
    }
    for (var i = 0; i < balas.length; i++){
      balas[i].mostrar();
      balas[i].mover();
      for (var j = 0; j < medios.length; j++){
        for (var k = 0; k < medios[j].length; k++)
        if(balas[i].choque(medios[j][k])){
          puntaje += medios[j][k].type;
          invaderkilled.setVolume(0.1);
          invaderkilled.play();
        }
      }
    }
    for (var i = 0; i < balas.length; i++){
      balas[i].mostrar();
      balas[i].mover();
      for (var j = 0; j < dificiles.length; j++){
        for (var k = 0; k < dificiles[j].length; k++)
        if(balas[i].choque(dificiles[j][k])){
          puntaje += dificiles[j][k].type;
          invaderkilled.setVolume(0.1);
          invaderkilled.play();
        }
      }
    }

    for (var i = 0; i < basicos.length; i++){
      for (var j = 0; j < 3; j++){
        if(basicos[i][j].choque(nave)){
          lives = 0;
        }
      }
    }
    for (var i = 0; i < medios.length; i++){
      for (var j = 0; j < 2; j++){
        if(medios[i][j].choque(nave)){
          lives = 0;
        }
      }
    }
    for (var i = 0; i < dificiles.length; i++){
      for (var j = 0; j < 1; j++){
        if(dificiles[i][j].choque(nave)){
          lives = 0;
        }
      }
    }


    nave.mostrar();
    nave.move();

    for(var i = 0; i < balas.length; i++){
      if(balas[i].y <= 0 )
        balas.splice(i,1);
    }
  }

  }


  function keyReleased(){
      if(key == ' '){
        bala = new Disparos(nave.x, alto,-5);
        balas.push(bala);
        shoot.setVolume(0.1);
        shoot.play();
  }
      else {
        return false;
      }
  }
//128
