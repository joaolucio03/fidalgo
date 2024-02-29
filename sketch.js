function setup() {
    createCanvas(1920, 1080, WEBGL);
    background(255,0,0);
  }
  
  
  function draw() {
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(mouseY, mouseY);
  }