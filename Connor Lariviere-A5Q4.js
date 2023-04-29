
class Ship {
	constructor(x, y, size, index) { //ship class (x position, y position, size, place in list)
		this.x = x;
		this.y = y;
		this.size = size;
        this.speedx = random(speeds);
        this.speedy = random(speeds);
        this.index = index
	}
  
	update() {
      //if both speeds are 0, then move completely horizontally.
      if (this.speedx === 0 && this.speedy === 0){
       this.speedx = 1;
      }
      this. x = this.x + this.speedx;
      this. y = this.y + this.speedy;
      
      //this handles if the ship goes offscreen. Since it is in space, they wrap around the screen rather than bouncing off the edge of it.
      if(this.x > width + 25){
        this.x = 0
      }
      if(this.x < 0 - 25){
        this.x = width
      }
      if(this.y > height + 25){
        this.y = 0
      }
      if(this.y < 0 - 25){
        this.y = height
      }         
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
	constructor(x, y, size) { //star class (x position, y position, size)
		this.x = x;
		this.y = y;
		this.size = size;
        //considered adding rotation but it actually made the stars look worse
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
	constructor(x, y, size, rotation, index) { //Asteroid class (x position, y position, size, rotation, place in list)
		this.x = x;
		this.y = y;
		this.size = size;
        this.rotation = rotation;
        this.index = index;
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
  spawnDelay = 0;
  createCanvas(400, 400); 
  speeds = [1,-1,0.75,0.5,-0.75,-0.5,0,-0.3,0.3]
  ships = [];                            //make empty arrays to put the objects of
  stars = [];                            //the simulation into. Iterate through them to 
  asteroids = [];                        //spawn the creatures
  for(starsMade = 0;starsMade < 50; starsMade++){
    stars.push(new Star(random(0,400),random(0,400),random(0.9,1.1)))
              }       // xposition   y position    size
  for(shipsMade = 0;shipsMade < 5; shipsMade++){
    ships.push(new Ship(random(0,400),random(0,400),random(0.9,1.1), ships.length))
              }       // xposition   y position    size              index
  for(asteroidsMade = 0;asteroidsMade < 5; asteroidsMade++){
    asteroids.push(new Asteroid(random(0,400),random(0,400),random(0.7,1.2), random(1,360), asteroids.length ))
              }               // xposition   y position      size            rotation        index

  print("ships: " + ships.length)
  print("stars: " + stars.length)
  print("asteroids: " + asteroids.length)
}

function draw() {
  background(30);
  spawnDelay ++
  for(starsShown = 0; starsShown < stars.length - 1; starsShown++){
    stars[starsShown].show();
  }
  for(shipsShown = 0; shipsShown < ships.length - 1; shipsShown++){
    ships[shipsShown].show();
    ships[shipsShown].update();
                //this handles collisions between ships 
      for(let i = 0; i < ships.length; i++){
        if(isTouching(ships[shipsShown],ships[i]) && shipsShown != i && spawnDelay > 30){
          print("new ship!")
          ships.push(new Ship(random(0,400),random(0,400),random(0.9,1.1), ships.length))
          ships[shipsShown].x = ships[shipsShown].x - 20 
          ships[shipsShown].y = ships[shipsShown].y - 20;
          spawnDelay = 0;
        }
  }
}

  for(asteroidsShown = 0; asteroidsShown < asteroids.length ; asteroidsShown++){
    asteroids[asteroidsShown].show();
    asteroids[asteroidsShown].update();
  }
}

function isTouching(object1,object2){
  let distance = dist(object1.x, object1.y, object2.x, object2.y)
    if( distance < 30){
      return true
    }
    else return false
}
