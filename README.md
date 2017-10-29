# Retro.js
Retro Video-Games.
  
  
  
  
  Cada uno cree su propia carpeta con su juego respectivo, y trabaje desde allí, recuerden usar el main.html que puse o si crean el suyo     usen la librería p5.js.
  
  
  
  PD: NO SUBAN actualizaciones del archivo HTML, eso lo miramos luego cuando creemos un menú principal.
  
  
  
  
  
  Si usan el que puse solo cambien la ruta: "<script src="pacman/pacman.js"></script> y lo ponen así de esta manera:                                                                                                                                                                            
  <script src="carpeta/nombre-archivo"></script>

  <Completar el readme empleando [markdown](https://guides.github.com/features/mastering-markdown/), de acuerdo a la información de cada proyecto. Modifique el archivo de licencia, de ser necesario. Elimine las instrucciones (texto que aparece entre "<" y ">")>

# Retro.js

# Integrantes

| Nombre | Github nickname |
|--------|-----------------|
| Laura Ximena Gordillo | lgordillom |
| Jose Francisco Lugo | solotov25 |
| Maria Valentina Molina | mariavmflorez |
| Santiago Velandia Casas | svelandiac |
| Cristian Fernando Santos | santosfernando99 |

# Introducción

## Problemática

Este proyecto no se hace con el fin de resolver una problemática en sí, la plataforma terminada tiene como único objetivo entretener al usuario.

## Marco teórico
### p5.js

p5.js es una librería de JavaScript que usa la metáfora original de Processing de un 'cuaderno de bocetos' de software, tiene  un conjunto completo de funciones de dibujo, sin embargo, no está limitado a su lienzo de dibujo. Para esto, p5.js tiene bibliotecas de complementos que facilitan la interacción con otros objetos HTML5, incluidos texto, entrada, video, cámara web y sonido. **[1](https://p5js.org/)**

### p5.collide2D

*La colisión de objetos subyace a la mayoría de las experiencias de juego y las interfaces de usuario. Los bates de béisbol chocan con las bolas, los zombis chocan contra las paredes, y Mario aterriza en plataformas y pisotea tortugas. Incluso algo tan simple como hacer clic en un botón (un rectángulo) con su mouse (un punto) es una colisión.* [ Jeffrey Thompson's Collision Detection Book](http://www.jeffreythompson.org/collision-detection/)

La librería de detección de colisiones 2d de p5.js es p5.collide2D, esta proporciona herramientas para calcular la detección de colisiones para la geometría 2D. Todas las funciones p5.collide2D devuelven verdadero si la geometría especificada colisiona y es falsa si no lo son.**[2](https://github.com/bmoren/p5.collide2D)**

### p5.play


p5.play es una biblioteca p5.js para la creación de juegos y personajes. p5.play proporciona una clase Sprite para administrar objetos visuales en el espacio 2D y funciones como soporte de animación, detección y resolución de colisiones básicas, agrupación de sprites, ayudantes para interacciones con el mouse y el teclado, y una cámara virtual.**[3](http://p5play.molleindustria.org/)**

## Antecedentes

VideoJuegos de las primeras consolas producidas en el mercado llegando a ser los más populares de su época. Se pretende una remasterización de estos usando JavaScript como lenguaje de programación.

# Objetivos

## General

Crear una plataforma en la que fácilmente se encuentren y jueguen algunos de los videojuegos más importantes de los años 70's y 80's.

## Específicos

1. Entender el funcionamiendo y la lógica básica del front-end de una página web como también de videojuegos.
1. Realizar diversos juegos con aspecto retro usando conceptos propios de programación orientada a objetos y programación estructurada.
1.

# Requisitos

El proyecto **Retro.js** se escribirá en JavaScript y se hará uso de librerías como [p5.js][] *para JavaScript*, [p5.collide2D][] y [p5.play][] *Para p5.js*

[p5.js]:https://p5js.org/
[p5.collide2D]:https://github.com/bmoren/p5.collide2D
[p5.play]:http://p5play.molleindustria.org/
