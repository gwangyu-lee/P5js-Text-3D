var charG1;
var charW1;
var charA1;
var charAi1;
var charN1;

var charHypen1;

var charG2;
var charY1;
var charU1;

var charL1;
var charE1;
var charE2;

var charA2;
var charAi2;
var charK1;
var charA3;
var charAi3;

var charF1;
var charR1;
var charRi1;
var charE3;
var charD1;
var charDi1;
var charE4;
var charR2;
var charRi2;
var charI1;
var charC1;
var charK2;

var charF2;
var charR3;
var charRi3;
var charE5;
var charD2;
var charDi2;
var charN2;
var charI2;
var charR4;
var charRi4;

var constMouseX;
var constMouseY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  smooth();

  charG1 = new char3D(0, -60);
  charW1 = new char3D(40, -60);
  charA1 = new char3D(80, -60);
  charAi1 = new char3D(80, -60);
  charN1 = new char3D(120, -60);

  charHypen1 = new char3D(160, -60);

  charG2 = new char3D(200, -60);
  charY1 = new char3D(240, -60);
  charU1 = new char3D(280, -60);

  charL1 = new char3D(0, 0);
  charE1 = new char3D(40, 0);
  charE2 = new char3D(80, 0);

  charA2 = new char3D(0, 60);
  charAi2 = new char3D(0, 60);
  charK1 = new char3D(40, 60);
  charA3 = new char3D(80, 60);
  charAi3 = new char3D(80, 60);

  charF1 = new char3D(0, 120);
  charR1 = new char3D(40, 120);
  charRi1 = new char3D(40, 120);
  charE3 = new char3D(80, 120);
  charD1 = new char3D(120, 120);
  charDi1 = new char3D(120, 120);
  charE4 = new char3D(160, 120);
  charR2 = new char3D(200, 120);
  charRi2 = new char3D(200, 120);
  charI1 = new char3D(240, 120);
  charC1 = new char3D(280, 120);
  charK2 = new char3D(320, 120);

  charF2 = new char3D(0, 180);
  charR3 = new char3D(40, 180);
  charRi3 = new char3D(40, 180);
  charE5 = new char3D(80, 180);
  charD2 = new char3D(120, 180);
  charDi2 = new char3D(120, 180);
  charN2 = new char3D(160, 180);
  charI2 = new char3D(200, 180);
  charR4 = new char3D(240, 180);
  charRi4 = new char3D(240, 180);

}

function draw() {

  background(0);

  constMouseX = mouseX-width/2;
  constMouseY = mouseY-height/2;
  var constAngleX = constrain(constMouseX/10, -20, 20);
  var constAngleY = constrain(constMouseX/10, -20, 20);
  var constAngleZ = constrain(constMouseY/10, -20, 20);

  translate(constMouseX/2, constMouseY/2, -dist(0, 0, constMouseX, constMouseY));

  rotateX(constAngleX);
  rotateY(constAngleY);
  rotateZ(constAngleZ);

  push();
    noFill();
    stroke(0, 150, 50);

    charG1.char(0, 0, 0, 50, 30, 50, 30, 20, 10, 20, 10, 30, 20, 30, 20, 40, 10, 40, 10, 10, 30, 10, 30, 0);
    charW1.char(0, 0, 0, 50, 30, 50, 30, 0, 20, 0, 20, 40, 20, 0, 10, 0, 10, 40, 10, 0);
    charA1.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 30, 20, 50, 30, 50, 30, 0);
    charAi1.char(10, 10, 10, 20, 20, 20, 20, 10);
    charN1.char(0, 0, 0, 50, 10, 50, 10, 20, 20, 50, 30, 50, 30, 0, 20, 0, 20, 30, 10, 0);

    charHypen1.char(0, 20, 0, 30, 30, 30, 30, 20);

    charG2.char(0, 0, 0, 50, 30, 50, 30, 20, 10, 20, 10, 30, 20, 30, 20, 40, 10, 40, 10, 10, 30, 10, 30, 0);
    charY1.char(0, 0, 10, 30, 10, 50, 20, 50, 20, 30, 30, 0, 20, 0, 15, 20, 10, 0);
    charU1.char(0, 0, 0, 50, 30, 50, 30, 0, 20, 0, 20, 40, 10, 40, 10, 0);

    charL1.char(0, 0, 0, 50, 30, 50, 30, 40, 10, 40, 10, 0);
    charE1.char(0, 0, 0, 50, 30, 50, 30, 40, 10, 40, 10, 30, 30, 30, 30, 20, 10, 20, 10, 10, 30, 10, 30, 0);
    charE2.char(0, 0, 0, 50, 30, 50, 30, 40, 10, 40, 10, 30, 30, 30, 30, 20, 10, 20, 10, 10, 30, 10, 30, 0);

    charA2.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 30, 20, 50, 30, 50, 30, 0);
    charAi2.char(10, 10, 10, 20, 20, 20, 20, 10);
    charK1.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 50, 30, 50, 20, 30, 20, 20, 30, 0, 20, 0, 10, 20, 10, 0);
    charA3.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 30, 20, 50, 30, 50, 30, 0);
    charAi3.char(10, 10, 10, 20, 20, 20, 20, 10);

    charF1.char(0, 0, 0, 50, 10, 50, 10, 30, 30, 30, 30, 20, 10, 20, 10, 10, 30, 10, 30, 0);
    charR1.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 50, 30, 50, 30, 40, 20, 30, 30, 30, 30, 0);
    charRi1.char(10, 10, 10, 20, 20, 20, 20, 10);
    charE3.char(0, 0, 0, 50, 30, 50, 30, 40, 10, 40, 10, 30, 30, 30, 30, 20, 10, 20, 10, 10, 30, 10, 30, 0);
    charD1.char(0, 0, 0, 50, 20, 50, 30, 40, 30, 10, 20, 0);
    charDi1.char(10, 10, 10, 40, 20, 30, 20, 20);
    charE4.char(0, 0, 0, 50, 30, 50, 30, 40, 10, 40, 10, 30, 30, 30, 30, 20, 10, 20, 10, 10, 30, 10, 30, 0);
    charR2.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 50, 30, 50, 30, 40, 20, 30, 30, 30, 30, 0);
    charRi2.char(10, 10, 10, 20, 20, 20, 20, 10);
    charI1.char(0, 0, 0, 10, 10, 10, 10, 40, 0, 40, 0, 50, 30, 50, 30, 40, 20, 40, 20, 10, 30, 10, 30, 0);
    charC1.char(0, 10, 0, 40, 10, 50, 30, 50, 30, 40, 20, 40, 10, 30, 10, 20, 20, 10, 30, 10, 30, 0, 10, 0);
    charK2.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 50, 30, 50, 20, 30, 20, 20, 30, 0, 20, 0, 10, 20, 10, 0);
    
    charF2.char(0, 0, 0, 50, 10, 50, 10, 30, 30, 30, 30, 20, 10, 20, 10, 10, 30, 10, 30, 0);
    charR3.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 50, 30, 50, 30, 40, 20, 30, 30, 30, 30, 0);
    charRi3.char(10, 10, 10, 20, 20, 20, 20, 10);
    charE5.char(0, 0, 0, 50, 30, 50, 30, 40, 10, 40, 10, 30, 30, 30, 30, 20, 10, 20, 10, 10, 30, 10, 30, 0);
    charD2.char(0, 0, 0, 50, 20, 50, 30, 40, 30, 10, 20, 0);
    charDi2.char(10, 10, 10, 40, 20, 30, 20, 20);
    charN2.char(0, 0, 0, 50, 10, 50, 10, 20, 20, 50, 30, 50, 30, 0, 20, 0, 20, 30, 10, 0);
    charI2.char(0, 0, 0, 10, 10, 10, 10, 40, 0, 40, 0, 50, 30, 50, 30, 40, 20, 40, 20, 10, 30, 10, 30, 0);
    charR4.char(0, 0, 0, 50, 10, 50, 10, 30, 20, 50, 30, 50, 30, 40, 20, 30, 30, 30, 30, 0);
    charRi4.char(10, 10, 10, 20, 20, 20, 20, 10);
  pop();

}

class char3D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  char() {
    var arrNum = -1;
    var offsetZ = -20;
    var magnifyZ = 0;
    var translateX = -350/2;
    var translateY = -110/2;
    var translateZ = 0;
    var rotateAngleX = 0;

    var distMouse = dist(this.x+translateX, this.y+translateY, constMouseX, constMouseY);

    switch (true) {
      case (distMouse < 4):
        magnifyZ =  20;
        rotateAngleX = 20;
        break;
      case (distMouse< 8):
        magnifyZ =  18;
        rotateAngleX = 18;
        break;
      case (distMouse < 12):
        magnifyZ =  16;
        rotateAngleX = 16;
        break;
      case (distMouse < 16):
        magnifyZ =  14;
        rotateAngleX = 14;
        break;
      case (distMouse < 20):
        magnifyZ =  12;
        rotateAngleX = 12;
        break;
      case (distMouse < 24):
        magnifyZ =  10;
        rotateAngleX = 10;
        break;
      case (distMouse < 28):
        magnifyZ =  8;
        rotateAngleX = 8;
        break;
      case (distMouse < 32):
        magnifyZ =  6;
        rotateAngleX = 6;
        break;
      case (distMouse < 36):
        magnifyZ =  4;
        rotateAngleX = 4;
        break;
      case (distMouse < 40):
        magnifyZ =  2;
        rotateAngleX = 2;
        break;
      default:
    }

    push();
      translate(this.x, this.y, magnifyZ);
      translate(-15, -25, 0);
      translate(translateX, translateY, translateZ);
      rotateX(rotateAngleX);
      
      beginShape();
        for (var i = 0; i < arguments.length; i++) {
          arrNum += 1;       
          if (i % 2 == 0) {
            vertex(arguments[arrNum], arguments[arrNum+1], offsetZ);     
          }
        }    
      endShape(CLOSE);
      arrNum = -1;
      beginShape();
        for (var i = 0; i < arguments.length; i++) {
          arrNum += 1;       
          if (i % 2 == 0) {
            vertex(arguments[arrNum], arguments[arrNum+1], 0);        
          }
        }    
      endShape(CLOSE);
      arrNum = -1;
      for (var i = 0; i < arguments.length; i++) {
        arrNum += 1;       
        if (i % 2 == 0) {
          beginShape();
            vertex(arguments[arrNum], arguments[arrNum+1], 0);   
            vertex(arguments[arrNum], arguments[arrNum+1], offsetZ);  
          endShape(CLOSE);
        }
      }   
    pop();
  }
}
