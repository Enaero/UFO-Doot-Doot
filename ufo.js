"use strict";

document.getElementById('bleh').addEventListener('click', function(event) {
  alert("Happy Birthday!");
})

let count = 0;
let swap = function(){
  let text = "";
  if (count % 2) {
    text = "gooby pls";
  }
  else {
    text = "OHOHOHOHOHOH --Banta Plause";
  }
  count += 1;
  document.getElementById('gooby').innerHTML = text;
  window.setTimeout(swap, 1000)
}

document.getElementById('gooby').innerHTML = 'hi';
window.setTimeout(swap, 1000);

let game = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPEED: 10,
  keyboard: {},
  DELAY: 20
}

game.get_spaceship = function(){
  return document.getElementById('spaceship');
}

game.move = function(x, y) {
  let spaceship = game.get_spaceship();
  let top = Number(spaceship.style.top.slice(0, -2));
  let left = Number(spaceship.style.left.slice(0, -2));
  
  spaceship.style.top = top + y + 'px';
  spaceship.style.left = left + x + 'px';
  console.log('Position:', spaceship.style.left, spaceship.style.top);
}

game.step = function() {
	let keyboard = game.keyboard;
 	let LEFT = game.LEFT;
  let UP = game.UP;
  let RIGHT = game.RIGHT;
  let DOWN = game.DOWN;
 
  if (keyboard[LEFT]) {
    game.move(-game.SPEED, 0);
  }
  if (keyboard[RIGHT]) {
    game.move(game.SPEED, 0);
  }
  if (keyboard[UP]) {
    game.move(0, -game.SPEED);
  }
  if (keyboard[DOWN]) {
    game.move(0, game.SPEED);
  }
  window.setTimeout(game.step, game.DELAY);
}

game.handleInput = function(event) {
  let key = event.keyCode;
  if (event.type == 'keydown'){
    game.keyboard[key] = true;
  }
  else if (event.type == 'keyup') {
    game.keyboard[key] = false;
  }
}
game.run = function() {
	window.addEventListener('keydown', game.handleInput);
  window.addEventListener('keyup', game.handleInput);
  window.setTimeout(game.step, game.DELAY);
}

game.run();
