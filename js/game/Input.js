function Input(game) {
  this.game = game;
  //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  this.keyDown = function(keyCode) {
    switch(keyCode) {
  		case 87:		//W
        this.game.player1.platform.moveUp = true;
        this.game.player1.platform.moveDown = false;
        break;
  		case 83:		//S
        this.game.player1.platform.moveUp = false;
        this.game.player1.platform.moveDown = true;
  			break;
  		case 38:		//arrow up
        this.game.player2.platform.moveUp = true;
        this.game.player2.platform.moveDown = false;
  			break;
  		case 40:		//arrow down
        this.game.player2.platform.moveUp = false;
        this.game.player2.platform.moveDown = true;
  			break;
  	}
  }

  this.keyUp = function(keyCode) {
    switch (event.keyCode) {
    	case 87:		//W
        this.game.player1.platform.moveUp = false;
    		break;
    	case 83:		//S
    		this.game.player1.platform.moveDown = false;
    		break;
    	case 38:		//arrow up
    		this.game.player2.platform.moveUp = false;
    		break;
    	case 40:		//arrow down
    		this.game.player2.platform.moveDown = false;
    		break;
    }
  }

}
