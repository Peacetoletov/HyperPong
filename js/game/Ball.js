function Ball(myWindow, img, disco) {
  this.myWindow = myWindow;
  this.img = img;
  this.discoSpeedMultiplier = 2;
  this.speed = 8;
  this.sprite;
  this.xSpeed;
  this.ySpeed;
  this.x;
  this.y;

  this.assignSprite = function(disco) {
    if (disco) {
      return this.img.discoball;
    } else {
      return this.img.ball;
    }
  }

  this.assignInitialXYSpeed = function() {
    var speed = this.speed;
    if (disco) {
      speed *= this.discoSpeedMultiplier;
    }

    var ySpeed = Math.random() * speed;   //Randomize ySpeed
    var xSpeed = Math.sqrt((Math.pow(speed, 2) - Math.pow(ySpeed, 2)));   //Calculate the remainer as xSpeed (Pythagoras)
    var yRandom = Math.round(Math.random()) * 2 - 1;    //50% chance to assign the minus sign to ySpeed;
    var xRandom = Math.round(Math.random()) * 2 - 1;
    this.ySpeed = ySpeed * yRandom;
    this.xSpeed = xSpeed * xRandom;
  }

  this.assignInitialX = function() {
    var x = Math.round(myWindow.getWidth() / 2 - this.sprite.width / 2);
  }

  this.assignInitialY = function() {
    var y = Math.round(myWindow.getHeight() / 2 - this.sprite.height / 2);
  }

  this.assignValues = function() {
    this.sprite = this.assignSprite(disco);
    this.assignInitialXYSpeed(disco);
    this.x = this.assignInitialX();
    this.y = this.assignInitialY();
  }

  this.assignValues(disco);
}
