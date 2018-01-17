function SpriteLoader() {
  //Background
  this.bg = new Image();
  this.bg.src = "assets/sprites/individualSprites/Bg.png";
  this.discobg = new Image();
  this.discobg.src = "assets/sprites/individualSprites/Discobg.png";

  //Platforms
  this.platform1 = new Platform1();
  this.platform2 = new Platform2();

  //Balls
  this.ball = new Image();
  this.ball.src = "assets/sprites/individualSprites/Ball.png";
  this.discoball = new Image();
  this.discoball.src = "assets/sprites/individualSprites/Discoball.png";

  //Upgrades
  this.upgrade = new Upgrades();

  //Upgrade effects
  this.net = new Image();
  this.net.src = "assets/sprites/individualSprites/Net.png";
}
