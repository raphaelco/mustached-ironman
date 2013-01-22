Character.prototype = new Element();
Character.prototype.constructor = Character;

function Character() {
	this._TOTAL_LIFE	= 100;
	this._DEFEATED_LIFE	= 6;
	this._DESTROYED_LIFE	= 0;
	this._action            = Actions.flying;
	this.count		= 0;
	this._explode = function() {
		this._action.isExploding() ? this._changeImage(this.image.transition)
					   : this._changeImage(Images.explosion1);
		this._action = Actions.exploding;
        };
	
	this._isDefeated = function() {
                return this._TOTAL_LIFE <= this._DEFEATED_LIFE &&
                       this._TOTAL_LIFE >  this._DESTROYED_LIFE;
        };

        this._isDestroyed = function() {
                return this._TOTAL_LIFE <= this._DESTROYED_LIFE;
        };
	
	this.hurt = function() {
                this._TOTAL_LIFE        -= 1;
        };
	
	this.update = function() {
		if (this._isDefeated()) this._explode();
		else if (this._isDestroyed()) this._destroy();
        };
};
