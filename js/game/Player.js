function Player(player, myWindow, img) {
  this.player = player;
  if (player === 1) {
    this.platform = new Platform(1, myWindow, img);
  }
  if (player === 2) {
    this.platform = new Platform(2, myWindow, img);
  }
}
