function Ball(r) {
  this.radius = r; //the radius variable is local to the ball object
  this.area = 3.14*r*r;
  this.printArea = function(){ //objects can contain functions
    return this.area;
  };
}

myBall = new Ball(5); //creates a new instance of the ball object with radius 5
myBall.printArea();

