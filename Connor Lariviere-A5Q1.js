class Bubble {
	constructor(x, y, r) { //Bubble class (x position, y position, radius)
		this.x = x;
		this.y = y;
		this.r = r;
	}
  
	update() { //makes the bubbles jitter radomly
		this.x = this.x + random(-1,1)
        this.y = this.y + random(-1,1)
	}
  
	show() { //display bubbles
      
push();

translate(this.x, this.y);
ellipse(0, 0, this.r * 2);
		
pop();
	}
} 

function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(100, 20, 10); //create bubbles to be shown in setup
  bubble2 = new Bubble(250, 100, 35);
  bubble3 = new Bubble(40, 200, 20);
  bubble4 = new Bubble(100, 300, 25);
  bubble5 = new Bubble(300, 200, 40);
  
  
}

function draw() { //call the methods to show the bubbles
  background("rgb(56,139,167)");
  fill("rgb(156,239,255)")
  bubble1.update();
  bubble1.show();
  
  bubble2.update();
  bubble2.show();

  bubble3.update();
  bubble3.show();
  
  bubble4.update();
  bubble4.show();
  
  bubble5.update();
  bubble5.show();
  
}
