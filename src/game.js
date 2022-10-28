class Game {
  constructor() {
    this.player = new Player()
    this.treasure = new Treasure()
}
  preload() {
    this.player.image = loadImage("../assets/character-down.png")
    this.player.imageUp = loadImage('../assets/character-up.png')
    this.player.imageDown = loadImage('../assets/character-down.png')
    this.player.imageLeft = loadImage('../assets/character-left.png')
    this.player.imageRight = loadImage('../assets/character-right.png')
         this.treasure.image = loadImage('../assets/treasure.png')
  }
  draw() {
    clear()
    this.drawGrid()
    this.player.draw()
    this.treasure.drawTreasure()
}
  drawGrid() {
    let x = 0;
  while ( x < 1100){
    line (x, 0 , x, height);
    x = x + 100;
  }
  let y = 0;
  while ( y < 1100){
    line (0,y,width,y);
    y = y + 100;
  }
  }
}

class Player {
	constructor() {
		this.col = 0;
		this.row  = 0;
    this.imageUp
    this.imageDown
    this.imageLeft
    this.imageRight
    this.image
	}
  draw() {
    image(this.image, this.col, this.row, 100, 100)
    }     
    moveUp() {
    if (this.row >= 100) {
    this.row -= 100
    }
    game.treasure.collision()
    this.image = this.imageUp
}
    moveDown() {
    if (this.row <= 800) {
    this.row += 100
    }
    game.treasure.collision()
    this.image = this.imageDown
}
    moveLeft() {
    if (this.col >= 100) {
    this.col -= 100
    }
    game.treasure.collision()
    this.image = this.imageLeft
}
    moveRight() {
    if (this.col <= 800) {
    this.col += 100
    }
    game.treasure.collision()
    this.image = this.imageRight
}  
}

class Treasure {
  constructor() {
      this.col = 0
      this.row = 0
      this.image
      this.setRandomPosition()
  }
  setRandomPosition() {
      this.col = Math.floor(Math.random() * 10) * 100
      this.row = Math.floor(Math.random() * 10) * 100
  }
  drawTreasure() {
      image(this.image, this.col, this.row, 100, 100)
  }
  collision() {
      if (dist(this.col, this.row, game.player.col, game.player.row) < 100) {
      this.setRandomPosition()
      }
  }
}
