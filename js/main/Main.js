var pageLoaded = false;
var initialized = false;

var input;
var game;
var canvas;
var myWindow = new MyWindow();
var img = new SpriteLoader();

window.onload = function() {
  pageLoaded = true;
};

function initialize() {
  game = new Game(myWindow, img);
  input = new Input(game);
  canvas = new Canvas(myWindow, img, game);
	initialized = true;
}


/*
//Balance
var platform1Speed = 5;
var platform2Speed = 5;
var ballSpeed = 8;

function createInitialElements() {
	var x;
	var y;

	x = Img.net.width;
	y = HEIGHT / 2 - Math.round(Img.platformNormal.height / 2);
	createPlatform(Img.platformNormal, "platform1", x, y);
	y = HEIGHT / 2 - Math.round(Img.platformNormal2.height / 2);
	x = WIDTH - (Img.platformNormal2.width + Img.net.width);
	createPlatform(Img.platformNormal2, "platform2", x, y);

	x = WIDTH / 2 - Math.round(Img.ball.width / 2);
	y = HEIGHT / 2 - Math.round(Img.ball.height / 2);
	var randomX = Math.round(Math.random()) * 2 - 1;
	var randomY = Math.round(Math.random()) * 2 - 1;
	var xSpeed = ballSpeed*0.6 * randomX;
	var ySpeed = Math.sqrt(Math.pow(ballSpeed, 2) - Math.pow(xSpeed, 2)) * randomY;
	createBall(Img.ball, 0, x, y, xSpeed, ySpeed);

}

function ballMovement() {
	for (var key in gameElements[1]) {
		if (gameElements[1][key].y + gameElements[1][key].ySpeed >= 0 && gameElements[1][key].y + gameElements[1][key].ySpeed + gameElements[1][key].image.height <= HEIGHT) {
			gameElements[1][key].y += gameElements[1][key].ySpeed;
		} else {
			gameElements[1][key].y -= gameElements[1][key].ySpeed;
			gameElements[1][key].ySpeed = -gameElements[1][key].ySpeed;
		}

		var collision = checkPlatformCollision(gameElements[1][key].x, gameElements[1][key].y, gameElements[1][key].xSpeed, gameElements[1][key].ySpeed);
		if ((gameElements[1][key].y + gameElements[1][key].ySpeed )
		gameElements[1][key].x += gameElements[1][key].xSpeed;
	}
}

function checkPlatformCollision(x, y, xSpeed, ySpeed) {
	var isColliding;
	if (x + xSpeed )		//TADY JSEM SKONČIL
	var collision = {

	};
	return collision;
}
*/

document.onkeydown = function(event) {
  if (initialized) {
    input.keyDown(event.keyCode);
  }
};
document.onkeyup = function(event) {
  if (initialized) {
    input.keyUp(event.keyCode);
  }
};


function update() {
  if (pageLoaded) {

    if (!initialized) {
  		initialize();
  	}

  /*
  	//Move
  	//Platforms
  	if (platform1moveUp) {
  		gameElements[getKey("platform1")].y -= platform1Speed;
  	}
  	if (platform1moveDown) {
  		gameElements[getKey("platform1")].y += platform1Speed;
  	}
  	if (platform2moveUp) {
  		gameElements[getKey("platform2")].y -= platform2Speed;
  	}
  	if (platform2moveDown) {
  		gameElements[getKey("platform2")].y += platform2Speed;
  	}

  	//Balls
  	ballMovement();
    */

    //Game
    game.update();

  	//Clear
  	myWindow.getCtx().clearRect(0, 0, myWindow.getWidth(), myWindow.getHeight());

  	//Draw
  	canvas.draw();
  }
}


setInterval(update,20);
