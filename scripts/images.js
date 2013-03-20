var Images = {};

var std_posture			= new Image();
std_posture.src			= "images/std_posture.png";

var shoot_std_posture1 	= new Image();
shoot_std_posture1.src 	= "images/shoot_std_posture1.png";

var shoot_std_posture2 	= new Image();
shoot_std_posture2.src 	= "images/shoot_std_posture2.png";

var fly_posture1		= new Image();
fly_posture1.src		= "images/fly_posture1.png";

var fly_posture2		= new Image();
fly_posture2.src		= "images/fly_posture2.png";

var shoot_fly_posture1	= new Image();
shoot_fly_posture1.src	= "images/shoot_fly_posture1.png";

var shoot_fly_posture2	= new Image();
shoot_fly_posture2.src	= "images/shoot_fly_posture2.png";

var front_fly_posture1	= new Image();
//front_fly_posture1.src	= "images/front_fly_posture1.png";

var front_fly_posture2	= new Image();
//front_fly_posture2.src	= "images/front_fly_posture2.png";

var bad_robot			= new Image();
bad_robot.src			= "images/bad_robot.png";

var explosion1			= new Image();
explosion1.src			= "images/explosion1.png";

var explosion2			= new Image();
explosion2.src			= "images/explosion2.png";

var explosion3			= new Image();
explosion3.src			= "images/explosion3.png";

var explosion4			= new Image();
explosion4.src			= "images/explosion4.png";

var ground				= new Image();
ground.src				= "images/ground.png";

std_posture.transition          = std_posture
shoot_std_posture1.transition	= shoot_std_posture2
shoot_std_posture2.transition	= shoot_std_posture1
fly_posture1.transition         = fly_posture2
fly_posture2.transition         = fly_posture1
shoot_fly_posture1.transition	= shoot_fly_posture2
shoot_fly_posture2.transition	= shoot_fly_posture1
front_fly_posture1.transition	= front_fly_posture2
front_fly_posture2.transition	= front_fly_posture1
bad_robot.transition			= bad_robot
explosion1.transition			= explosion2
explosion2.transition			= explosion3
explosion3.transition			= explosion4
explosion4.transition			= explosion4
ground.transition				= ground

Images["std_posture"] 	        = std_posture;
Images["shoot_std_posture1"] 	= shoot_std_posture1;
Images["shoot_std_posture2"] 	= shoot_std_posture2;
Images["fly_posture1"] 	        = fly_posture1;
Images["fly_posture2"] 	        = fly_posture2;
Images["shoot_fly_posture1"] 	= shoot_fly_posture1;
Images["shoot_fly_posture2"] 	= shoot_fly_posture2;
Images["front_fly_posture1"]	= front_fly_posture1;
Images["front_fly_posture2"]	= front_fly_posture2;
Images["bad_robot"]				= bad_robot;
Images["explosion1"]			= explosion1;
Images["explosion2"]			= explosion2;
Images["explosion3"]			= explosion3;
Images["explosion4"]			= explosion4;
Images["ground"]				= ground;
