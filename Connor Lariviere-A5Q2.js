class Bubble {
	constructor(x, y, r, bubbleColor) { //Bubble class (x position, y position, radius)
		this.x = x;
		this.y = y;
		this.r = r;
        this.bubbleColor = bubbleColor
	}
  
	update() { //makes the bubbles jitter radomly
		this.x = this.x + random(-1,1)
        this.y = this.y + random(-1,1)
	}
  
	show() { //display bubbles
      
push();

translate(this.x, this.y);
fill("gray")
ellipse((this.r/10),(this.r/10), this.r * 2)
fill(this.bubbleColor)
ellipse(0, 0, this.r * 2);
		
pop();
	}
} 

function setup() {
  createCanvas(800, 800);
  bubbles = []
  bubbleColors = ["rgb(170,170,243)","rgb(240,255,255)","rgb(97,203,235)","rgb(97,238,234)"]
  for(bubblesMade = 0;bubblesMade < 50; bubblesMade++){
    bubbles.push(new Bubble(random(0,800),random(0,800),random(10,40),random(bubbleColors)))
              }
}
                            

function draw() { //call the methods to show the bubbles
  background("rgb(56,139,167)");
  fill("rgb(156,239,255)")
  for(bubblesShown = 0; bubblesShown < bubbles.length - 1; bubblesShown++){
    bubbles[bubblesShown].show();
    bubbles[bubblesShown].update();
  }
  
}
