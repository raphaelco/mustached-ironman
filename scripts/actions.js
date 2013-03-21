function Action(action) {
	this._action = action;
	
	this.isFlying = function() {
		return this._action == "flying";
	};

	this.isShooting = function() {
		return this._action == "shooting";
	};
	
	this.isExploding = function() {
		return this._action == "exploding";
	};
	
	this.isLanded = function() {
		return this._action == "landed";
	};
};




var Actions = {};

var FLYING		= new Action("flying");
var SHOOTING	= new Action("shooting");
var EXPLODING	= new Action("exploding");
var LANDED		= new Action("landed");

Actions["flying"]		= FLYING;
Actions["shooting"]		= SHOOTING;
Actions["exploding"]	= EXPLODING;
Actions["landed"]		= LANDED;