const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  game.preload();
  
} 

function draw() {
  clear()
  game.draw();
}

function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
  game.player.moveRight()
}

if (keyCode === LEFT_ARROW) {
  game.player.moveLeft()
}

if (keyCode === UP_ARROW) {
  game.player.moveUp()
}

if (keyCode === DOWN_ARROW) {
  game.player.moveDown()
}
}
