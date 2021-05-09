var seconds, minutes;
function setup(){
  angleMode(DEGREES);
  createCanvas(800,800);
  background(0);
  seconds = 0;
  minutes = 0;
}
function draw(){
  background(0);
  seconds += 0.1;
  minutes += (1/120);
  stroke(255);
  clock(400,400,100,0,0)
}

function clock(xOff, yOff, length, rot,rot2){
var offset = {x:xOff,y:yOff};
var L = length*0.7

stroke(100-(L*5),L*2.5,255-(L*4));

  line(offset.x,offset.y,offset.x+(length*sin(seconds+rot)),offset.y+(-length*cos(seconds+rot)));
  line(offset.x,offset.y,offset.x+(length*sin(minutes+rot)),offset.y+(-length*cos(minutes+rot)));

 if(L < 1){
   return ;
 } else {
   clock(offset.x+(length*sin(seconds+rot)),offset.y+(-length*cos(seconds+rot)),L,rot+seconds,rot2+minutes);
   clock(offset.x+(length*sin(minutes+rot)),offset.y+(-length*cos(minutes+rot)),L,rot+minutes,rot2+minutes);
 }
}