function Element(){
	this.image		= new Image();
    this.width		= this.image.width;
    this.height		= this.image.height;
	this.active		= true;
	this._posX		= 0;
	this._posY		= 0;
	
	this.draw = function() {
                canvas.drawImage(this.image,
                                 0, 0, this.width, this.height,
                                 this._posX, this._posY, this.width, this.height);
        };

	this._changeImage = function(image) {
			this.image	= image;
			this.width	= image.width;
			this.height	= image.height;
	};
	
	this.collides = function(anotherObject) {
		return this._collidesHorizontally(anotherObject) &&
				this._collidesVertically(anotherObject);
	};

	this._collidesHorizontally = function(anotherObject) {
		return this._posX < anotherObject._posX + anotherObject.width &&
				this._posX + this.width > anotherObject._posX;
	};

	this._collidesVertically = function(anotherObject) {
			return this._posY < anotherObject._posY + anotherObject.height &&
					this._posY + this.height > anotherObject._posY;
	};

	this._destroy = function() {
			this.active = false;
	};
	
};
