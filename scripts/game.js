var CANVAS_WIDTH	= 800;
var CANVAS_HEIGHT	= 500;
var FPS 		= 20;

enemies = new Array();
enemies.push(new Enemy());

var hero = new Hero();

environment = new Environment();

var canvasElement = document.getElementById("canvasGame");
var canvas = canvasElement.getContext("2d");

setInterval(updateGame, 1000/FPS);

function update() {
	hero.update();
	
	enemies.update();
	
	//Remove dead enemies from list
	enemies = enemies.filter(function(enemy) {
                return enemy.active;
        });
};

function draw() {
	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
	environment.draw();
	enemies.draw();
	hero.draw();
};

function updateGame() {update(); draw();};
