function handleCollisions() {
	enemies.forEach(function(enemy) {
		// hero.collides(enemy);
		if (enemy.collides(hero)) {
			enemy.hurt();
		}
	});
}
