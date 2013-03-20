function Environment(){
	this.ground	= new Ground();
	
	this.draw = function() {
		this.ground.draw();
	};
};

Ground.prototype = new Element();
Ground.prototype.constructor = Ground;

function Ground() {
	this._changeImage(Images.ground);
	this._posX		= CANVAS_WIDTH 	- this.width;
	this._posY		= CANVAS_HEIGHT - this.height;
	this.surface	= this._posY 	- hero.height + 17;
};
