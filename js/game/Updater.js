function Updater(myWindow) {
  this.myWindow = myWindow;

  this.update = function(players) {
    this.platform(players);
  }

  this.platform = function(players) {
    for (var key in players) {
      var ySpeed;
      if (players[key].platform.moveUp === true) {
        ySpeed = -players[key].platform.speed;
      } else if (players[key].platform.moveDown === true) {
        ySpeed = players[key].platform.speed;
      } else {
        ySpeed = 0;
      }

      var y = players[key].platform.y;
      var newY;
      if (y + ySpeed < 0) {
        newY = 0;
      } else if (y + ySpeed + players[key].platform.sprite.height > this.myWindow.getHeight()) {
        newY = this.myWindow.getHeight() - players[key].platform.sprite.height;
      } else {
        newY = y + ySpeed;
      }

      players[key].platform.y = newY;
    }
  }
}
