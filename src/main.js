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
/*
const game = new Game()

function preload() {
    game.preload()
} 

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT)
    canvas.parent("canvas")
}

function draw() {
    game.draw()
}

function keyPressed() {

    if (keyCode === 39) {
		game.player.moveRight()
	}

	if (keyCode === 37) {
		game.player.moveLeft()
	}

	if (keyCode === 38) {
		game.player.moveUp()
	}

	if (keyCode === 40) {
		game.player.moveDown()
	}
}
*/