class Game {
  constructor(){
    this.score = 0;
  }

  drawGrid() {
    // Iteration 1 
    for(let i = 0; i < 11; i++){
       line(i*100, 0, i*100, 1000);
       line(0, i*100, 1000, i*100);
    }
  }

  catch() {
    if(player.col === treasure.col && player.row === treasure.row){
      this.score++;
      treasure.setRandomPosition();
      treasure.draw();
      this.updateStatus();
    }
  }

  updateStatus(){
    document.querySelector("#score").innerText = `Score: ${this.score}`;
  }
}

class Player {
  constructor(col, row){
    this.col = col;
    this.row = row;
    this.image;
  }

  draw(){
    image(this.image, this.col*100, this.row*100, 100, 100);  
  }

  moveUp(){
    clear();
    this.row -= 1;
    this.image = loadImage("./assets/character-up.png");
    this.draw();
  }

  moveDown(){
    clear();
    this.image = loadImage("./assets/character-down.png");
    this.row += 1;
    this.draw();
  }

  moveLeft(){
    clear();
    this.image = loadImage("./assets/character-left.png");
    this.col -= 1;
    this.draw();
  }

  moveRight(){
    clear();
    this.image = loadImage("./assets/character-right.png");
    this.col += 1;
    this.draw();
  }

}


class Treasure {
  constructor(){
    this.col;
    this.row;
    this.image;
  }

  draw(){
    image(this.image, this.col*100, this.row*100, 100, 100); 
  }

  setRandomPosition(){
    this.col = Math.floor(Math.random()*10);
    this.row = Math.floor(Math.random()*10);
  }
}