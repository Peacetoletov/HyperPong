function Game(myWindow, img) {
  this.disco = false;
  this.player1 = new Player(1, myWindow, img);
  this.player2 = new Player(2, myWindow, img);
  this.players = [this.player1, this.player2];
  this.ball = new Ball(myWindow, img, this.disco);

  this.updater = new Updater(myWindow);
  this.update = function() {
    this.updater.update(this.players);
  }
}
