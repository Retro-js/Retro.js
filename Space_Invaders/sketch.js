  var basicos = [];
  var medios = [];
  var dificiles = [];
  var nave;
  var balas = [] ;
  var ancho = 600;
  var alto = 600;

  function setup(){
    createCanvas(ancho,alto);
    nave =  new Personaje(ancho/2);
    for(var i = 0; i < 10; i++){
      basicos[i] = [];
      for(var j = 0; j < 3; j++)
        basicos[i][j] = new Enemigos(500-i*50,175+j*50,10);
    }

    for(var i = 0; i < 10; i++){
      medios[i] = [];
      for(var j = 0; j < 2; j++)
        medios[i][j] = new Enemigos(50+i*50,75+j*50,20);
    }

    for(var i = 0; i < 10; i++){
      dificiles[i] = [];
      for(var j = 0; j < 1; j++)
        dificiles[i][j] = new Enemigos(500-i*50,25+j*50,30);
    }

    frameRate( 40 );
  }

  function draw(){
    background(0);
    
    var cambio = false;
    for (var i = 0; i < basicos.length; i++){
      for(var j = 0; j < 3; j++){
        basicos[i][j].mostrar();
        basicos[i][j].move();
        if( basicos[i][j].x > ancho-30 || basicos[i][j].x <0 )
          cambio = true;
      }
    }

    for (var i = 0; i < medios.length; i++){
      for(var j = 0; j < 2; j++){
        fill(100);
        medios[i][j].mostrar();
        medios[i][j].move();
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
        if( medios[i][j].x > ancho-30 || medios[i][j].x <0 )
          cambio = true;
        fill(255);
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
        for (var k = 0; k <basicos[j].length; k++)
          balas[i].choque(basicos[j][k]) ;
      }
    }
    for (var i = 0; i < balas.length; i++){
      balas[i].mostrar();
      balas[i].mover();
      for (var j = 0; j < medios.length; j++){
        for (var k = 0; k <medios[j].length; k++)
          balas[i].choque(medios[j][k]) ;
      }
    }
    for (var i = 0; i < balas.length; i++){
      balas[i].mostrar();
      balas[i].mover();
      for (var j = 0; j < dificiles.length; j++){
        for (var k = 0; k <dificiles[j].length; k++)
          balas[i].choque(dificiles[j][k]) ;
      }
    }

    nave.mostrar();
    nave.move();


    for(var i = 0; i < balas.length; i++){
      if(balas[i].y <= 0 )
        balas.splice(i,1);
    }


  }


  function keyReleased(){
      if(key == ' '){
        bala = new Disparos(nave.x, alto);
        balas.push(bala);
  }
      else {
        return false;
      }
  }
//128
