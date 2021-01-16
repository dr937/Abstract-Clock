function setup() {
  createCanvas(500, 500);
  frameRate(24);
}

function draw(){
  if (hour() > 12) {
    background(96, 61, 192);
  } else {
    background(66, 135, 245);
  }
  //Minute Hand 
  stroke(76, 158, 62);
  strokeWeight(3);
  let m1 = map(minute(), 0, 60, 0, 500);
  line(m1, 500, m1, 0);
  // Hour Petals
  stroke(214, 109, 134, 20);
  translate(250, 250);
  for (let i = 0; i < 12; i ++) {
    if (hour()%12 === 0){
      continue;
    } else if (hour()%12 > i){
      fill(250, 177, 205, 200);
      ellipse(0, 30, 30, 150);
      rotate(PI/6);
    } else {
      fill(250, 177, 205, 25);
      ellipse(0, 30, 30, 150);
      rotate(PI/6);
    }
  if (second() == 0)
      {
          print(minute());
      }
  }
  //Seconds timer
  if (hour() < 12){
    fill(252, 212, 64);
  } else {
    fill(169,169,169);
  }
    rectMode(CENTER);
    translate(p5.Vector.fromAngle(second()/9.6, 200));
    circle(0, 0, 30, 30);
}
