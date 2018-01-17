function Platform(player, myWindow, img) {
  this.myWindow = myWindow;
  this.img = img;
  this.size = "normal";
  this.frozen = false;
  this.moveUp = false;
  this.moveDown = false;
  this.speed = 5;
  this.x;
  this.y;
  this.sprite;

  this.getSprite = function() {
    return this.sprite;
  }

  this.getCoordinates = function() {
    var coordinates = [this.getX(), this.getY()];
    return coordinates;
  }

  this.getX = function() {
    return this.x;
  }

  this.getY = function() {
    return this.y;
  }

  this.assignInitialX = function() {
    var x;
    if (player === 1) {
      x = this.img.net.width;
    } else {
      x = this.myWindow.getWidth() - (this.img.net.width + this.img.platform2.normal.width);
    }
    return x;
  }

  this.assignInitialY = function() {
    var y = Math.round(this.myWindow.getHeight() / 2) - Math.round(this.img.platform1.normal.height / 2);
    return y;
  }

  this.assignSprite = function(size, frozen) {
    var sprite;
    if (player === 1) { //Player 1
      if (frozen) {
        switch(size) {
          case "small":
            sprite = img.platform1.smallFrozen;
            break;
          case "normal":
            sprite = img.platform1.normalFrozen;
            break;
          case "big":
            sprite = img.platform1.bigFrozen;
            break;
        }
      } else {
        switch(size) {
          case "small":
            sprite = img.platform1.small;
            break;
          case "normal":
            sprite = img.platform1.normal;
            break;
          case "big":
            sprite = img.platform1.big;
            break;
        }
      }
    } else {  //Player 2
      if (frozen) {
        switch(size) {
          case "small":
            sprite = img.platform2.smallFrozen;
            break;
          case "normal":
            sprite = img.platform2.normalFrozen;
            break;
          case "big":
            sprite = img.platform2.bigFrozen;
            break;
        }
      } else {
        switch(size) {
          case "small":
            sprite = img.platform2.small;
            break;
          case "normal":
            sprite = img.platform2.normal;
            break;
          case "big":
            sprite = img.platform2.big;
            break;
        }
      }
    }
    return sprite;
  }

  this.assignValues = function() {
    this.x = this.assignInitialX();
    this.y = this.assignInitialY();
    this.sprite = this.assignSprite(this.size, this.frozen);
  }

  this.assignValues();
}
