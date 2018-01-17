function Canvas(myWindow, img, game) {
  this.myWindow = myWindow;
  this.img = img;
  this.game = game;

  this.draw = function() {
    this.background();
    this.platform();
  }

  this.background = function() {
    if (this.game.disco)
      image = img.discobg;
    else
      image = img.bg;
    this.myWindow.getCtx().drawImage(image, 0, 0);
  }

  this.platform = function() {
    for (var key in this.game.players) {
      var coordinates = this.game.players[key].platform.getCoordinates();
      var image = this.game.players[key].platform.sprite;
      this.myWindow.getCtx().drawImage(image, coordinates[0], coordinates[1]);
    }
  }
}
