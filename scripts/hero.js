Hero.prototype = new Character();
Hero.prototype.constructor = Hero;

function Hero(){
	this._changeImage(Images.fly_posture1);
	this._posX		= 50;
	this._posY		= 50;
	
	this._act = function() {
		this._action.isShooting() ? this._verifyAltitude()
								  : this._shoot();
	};
	
	this._checkKeyboardInputs = function() {
		if (keydown.up) {
			this._moveUp();
        }
		if (keydown.down) {
			this._moveDown();
		}
		if (keydown.left) {
			this._moveLeft();
		}
		if (keydown.right) {
			this._moveRight();
		}
		if (keydown.space) {
			this._act();
		}
	};
	
	this._clampPosition =  function() {
		this._posX      = this._posX.clamp(0, CANVAS_WIDTH - this.width);
		this._posY      = this._posY.clamp(0, environment.ground.surface); //Don't allow the hero to pass the ground
	};

	this._isOnGround = function() {
		return this._posY == environment.ground.surface;
	}
	
	this._land = function() {
		this._changeImage(Images.std_posture);
		this._action	= Actions.landed;
	};
	
	this._shoot = function() {
		this._action.isFlying() ? this._changeImage(Images.shoot_fly_posture1) 
								: this._changeImage(Images.shoot_std_posture1);
		this._action    = Actions.shooting;
	};
	
	this._fly = function() {
		this.image == Images.fly_posture1 ? this._changeImage(this.image.transition)
										  : this._changeImage(Images.fly_posture1);
		this._action    = Actions.flying;
	};
	
	this._moveDown = function() {
		this._posY 	+= 2;
	};
	
	this._moveUp = function() {
		this._posY 	-= 2;
	};
	
	this._moveLeft = function() {
		this._posX 	-= 2;
	};
	
	this._moveRight = function() {
		this._posX 	+= 2;
	};
	
	this._verifyAltitude = function() {
		this._isOnGround() ? this._land()
						   : this._fly();
	};
	
	this.update = function(){
		this._verifyAltitude();
		this._checkKeyboardInputs();
		this._clampPosition();
	};
};
