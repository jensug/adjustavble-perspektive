let mid;
let horLine;
let vert;
let leftHp;
let rightHp;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let rectW;
let rectH;
let rectWh;
let rectHh;
let buildingDiv;
let overRec = false;
let overPoint = false;
let slider;
let sliderW;
let sliderH;

function setup() {
  cnv = createCanvas(800, 600);

  mid = width / 2;
  vert = height / 2 + 0;
  horLine = height / 2;
  leftHp = width / 2 - 150;
  rightHp = leftHp + 300;
  rectW = 10;
  rectH = 10;
  buildingDiv = 0;

  slider = createSlider(1, 10, 5, 0.1);
  slider.position(100, 100);
  slider.style('width', '80px');

  sliderW = createSlider(1, 600, 140, 1);
  sliderW.position(100, 120);
  sliderW.style('width', '80px');

  sliderH = createSlider(1, 600, 240, 1);
  sliderH.position(100, 140);
  sliderH.style('width', '80px');

  frameRate(30);
}



function draw(){



  background(255);
  stroke(10);
  line(0, horLine, width, horLine);
  fill(0);
  circle(leftHp, horLine, 6);
  circle(rightHp, horLine, 6);

  noStroke();

  buildingDiv = slider.value();
  rectW = sliderW.value();
  rectH = sliderH.value();


  //left wall
  fill(167);
//  triangle(leftHp, vert, mid-rectW/2, vert-rectH/2, mid-rectW/2, vert+rectH/2);
    beginShape();
    vertex(leftHp+((mid-rectW/2)-leftHp)/buildingDiv, horLine-(horLine-vert-rectH/2)/buildingDiv);
    vertex(leftHp+((mid-rectW/2)-leftHp)/buildingDiv, horLine-(horLine-vert+rectH/2)/buildingDiv);
    vertex(mid-rectW/2,vert-rectH/2);
    vertex(mid-rectW/2,vert+rectH/2);
    endShape();

  //rigth wall
  fill(50);
  //triangle(rightHp, vert, mid+rectW/2, vert+rectH/2, mid+rectW/2, vert-rectH/2);
    beginShape();
    vertex(rightHp-((rightHp-(mid+rectW/2))/buildingDiv), horLine-(horLine-vert+rectH/2)/buildingDiv);
    vertex(rightHp-((rightHp-(mid+rectW/2))/buildingDiv),horLine-(horLine-vert-rectH/2)/buildingDiv);
    vertex(mid+rectW/2,vert+rectH/2);
    vertex(mid+rectW/2,vert-rectH/2);
    endShape();



  //front wall
  fill(87);
  rect(mid-rectW/2, vert-rectH/2, rectW, rectH);
  //fill(0);

  if(horLine < vert - rectH/2){
    fill(209);
    //roof
      beginShape();
      vertex(leftHp+((mid-rectW/2)-leftHp)/buildingDiv, horLine-(horLine-vert+rectH/2)/buildingDiv);
      vertex(rightHp-((rightHp-(mid+rectW/2))/buildingDiv), horLine-(horLine-vert+rectH/2)/buildingDiv);

      vertex(mid+rectW/2,vert-rectH/2);
      vertex(mid-rectW/2,vert-rectH/2);
      endShape();
  }

}



function mouseDragged(){
  if(overRec){
    if(mouseX > leftHp+0 && mouseX < rightHp-0 && mouseY > horLine-rectH/2 && mouseY < height-rectH/2){
      mid = mouseX - xOffset;
      vert = mouseY;
      print("rect: "+mid);
    }
  }
  if(overPoint){
    leftHp = mouseX;
    rightHp = leftHp + 300;
    print("horizon: "+ leftHp+150);
  }

}


function mousePressed() {
  if (
      mouseX > mid-rectW/2&&
      mouseX < mid+rectW/2 &&
      mouseY > vert-rectH/2 &&
      mouseY < vert+rectH/2
    ){
      print("over rec");
      overRec = true;
    }else if (
        mouseX > leftHp -10&&
        mouseX < leftHp +10&&
        mouseY > horLine -10&&
        mouseY < horLine +10
    ){
      print("over horizon point");
      overPoint = true;
    }else{
      overRec = false;
      overPoint = false;
    }
}

function mouseReleased(){

    overRec = false;
    overPoint = false;
}
