function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    
    stroke("black");
    fill("black")
    
    if(mouseIsPressed){
    rect(mouseX,mouseY,20,20);
  }
  }