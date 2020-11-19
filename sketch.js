var particles=[];
var plinko=[];
var division=[];
var divisionHeight=300;
for (var k=0;k<=innerWidth;k=k+80){
  division.push(new Division(k,height-divisionheight/2,10,divisionHeight));
}
for (var j =40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}




function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
background(255,255,255);  
if(frameCount%60===0){
  particles.push(new Particle(random)(width/2-10,width/2+10)(10,10));
}
  drawSprites();

}
