Enemy.prototype = new Character();
Enemy.prototype.constructor = Enemy;

function Enemy(){
	this._changeImage(Images.bad_robot);
	this._posX              	= 150;
        this._posY              	= 150;
};
