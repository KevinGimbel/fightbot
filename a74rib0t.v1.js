
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {
	
};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
  	robot.turn(45);
  	robot.ahead(55);
  	robot.rotateCannon(45);
}; 

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
  
  	robot.stop();
		robot.fire();
  	robot.ahead(20);
  	robot.fire();
  	robot.ahead(20);
  	robot.fire();
};
 
Robot.prototype.onRobotCollision = function(ev) {
	var robot = ev.robot;
 		robot.stop();
  	robot.turn(45);
  	robot.ahead(90);
};

// need to fix this fucked up thing here...
Robot.prototype.onWallCollision = function(ev) {
  	var robot = ev.robot;
  	robot.turn(ev.bearing);
  	robot.turn(90);
  	robot.ahead(120);
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
  	robot.stop();
		robot.turn(ev.bearing);
  	robot.fire();
		robot.back(30);
};
