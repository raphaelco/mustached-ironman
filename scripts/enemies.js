Array.prototype.update = function() {
	this._handleCollisions();
	
	this.forEach(function(enemy){
		enemy.update();
	});
};

Array.prototype.draw = function() {
	this.forEach(function(enemy){
                enemy.draw();
        });
};

Array.prototype._handleCollisions = function() {
        enemies.forEach(function(enemy) {
                if (hero.collides(enemy)) {
                        enemy.hurt();
                }
        });
};

