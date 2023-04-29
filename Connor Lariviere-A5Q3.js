
class Ship {
	constructor(x, y, size) { //ship class (x position, y position, size)
		this.x = x;
		this.y = y;
		this.size = size;
	}
  
	update() {
	}
  
	show() { //display ship
      
 push();
 translate(this.x,this.y);
 scale(this.size);
 noStroke();
 fill("rgb(68,68,68)") //create UFO underside
 ellipse(0,28,70,30)
 
 fill("gray") // create UFO base
 ellipse(0,25,70,30) 
 
 fill("lightblue") //create cockpit
 ellipse(0,15,30,20)
 
 fill("white")  //create glint of light on the cockpit
 ellipse(5,10,5,3)
 
 fill("black") // create dots on the UFO
 ellipse(-21,23,5)
 ellipse(-13,30,5)
 ellipse(0,32,5)
 ellipse(12,30,5)
 ellipse(21,23,5)
 pop();
	}
} 
class Star {
	constructor(x, y, size) { //ship class (x position, y position, size)
		this.x = x;
		this.y = y;
		this.size = size;
        //considered adding rotation but it actually made the stars look worse
	}
  
	update() {
      
	}
  
	show() { //display particle
      if(random(0,1) <= 0.9975){ //the stars twinkle by having a very small chance of not being drawn (1 in 400 chance every frame)
      push();
      noStroke();
      translate(this.x,this.y);
      scale(this.size);
      beginShape();
      vertex(1,1)
      vertex(5,0)
      vertex(1,-1)
      vertex(0,-5)
      vertex(-1,-1)
      vertex(-5,0)
      vertex(-1,1)
      vertex(0,5)
      vertex(1,1)
      endShape();
      pop();
	}
    }
} 

class Asteroid {
	constructor(x, y, size, rotation) { //Asteroid class (x position, y position, size, rotation)
		this.x = x;
		this.y = y;
		this.size = size;
        this.rotation = rotation;
	}
  
	update() {
      
	}
  
	show() { //display asteroid
      push();
      noStroke();
      translate(this.x,this.y);
      scale(this.size);
      rotate(this.rotation)
      fill("rgb(73,48,26)")
      beginShape();
      vertex(0,25)//first quadrant
      vertex(3,24)
      vertex(5,20)
      vertex(10,17)
      vertex(15,16)
      vertex(20,11)
      vertex(22,10)
      vertex(25,4)
      //second quadrant
      vertex(25,0)
      vertex(23,-4)
      vertex(20,-10)
      vertex(15,-13)
      vertex(12,-16)
      vertex(10,-22)
      vertex(5,-24)
      vertex(0,-25)
      //third quadrant
      vertex(0,-25)
      vertex(-3,-24)
      vertex(-5,-20)
      vertex(-10,-17)
      vertex(-15,-16)
      vertex(-20,-11)
      vertex(-22,-10)
      vertex(-25,-4)
      //fourth  quadrant
      vertex(-25,0)
      vertex(-23,4)
      vertex(-20,10)
      vertex(-15,13)
      vertex(-12,16)
      vertex(-10,22)
      vertex(-5,24)
      vertex(0,25)
      endShape();
      
      //craters
      fill("rgb(56,32,12)")
      ellipse(0,10,4)
      ellipse(-12,-14,6)
      ellipse(16,4,8)
      pop();    
    }
}

function setup() {
  createCanvas(400, 400);
  ships = [];
  stars = [];
  asteroids = [];
  for(starsMade = 0;starsMade < 50; starsMade++){
    stars.push(new Star(random(0,400),random(0,400),random(0.9,1.1)))
              }
  for(shipsMade = 0;shipsMade < 5; shipsMade++){
    ships.push(new Ship(random(0,400),random(0,400),random(0.9,1.1)))
              }
  for(asteroidsMade = 0;asteroidsMade < 5; asteroidsMade++){
    asteroids.push(new Asteroid(random(0,400),random(0,400),random(0.7,1.2), random(1,360)))
              }

  print("ships: " + ships.length)
  print("stars: " + stars.length)
  print("asteroids " + asteroids.length)
}

function draw() {
  background(30);
  for(starsShown = 0; starsShown < stars.length ; starsShown++){
    stars[starsShown].show();
  }
  for(shipsShown = 0; shipsShown < ships.length ; shipsShown++){
    ships[shipsShown].show();
    ships[shipsShown].update();
  }


  for(asteroidsShown = 0; asteroidsShown < asteroids.length ; asteroidsShown++){
    asteroids[asteroidsShown].show();
    asteroids[asteroidsShown].update();
}
}
