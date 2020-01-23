function setup() {
  createCanvas(500, 500);
  frameRate(1);
}

function draw() {
    stroke(255,255,140)
    strokeWeight(8)
    background(135,206,235);  
    let s = color(255, 255, 140) //Sun Color 
    fill(s)
    circle(250,250,150)
    
    let m1 = map(minute(), 0, 60, 0, 150) // minutes mapping
    fill(252, 212, 0)
    circle(250, 250, m1)   
  
    stroke(255,139,150) 
    strokeWeight(2)
    noFill()
    let m = map(second(), 0, 60, 0, 150) //radius map
    circle(250, 250, m) //inner circle (seconds) 
    
    stroke(252,212,0)
    strokeWeight(6)
    
      if(hour() > 0)
        line(250, 100, 250, 65) //line 1 done
      if(hour() > 1)
        line(296.5, 108, 312, 75) //line 2 done
      if(hour() > 2)
        line(342, 130, 367, 100) //line 3 done
      if(hour() > 3)
        line(374,166,405,145) //line 4 done
      if(hour() > 4)
        line(393, 207, 425, 192) //line 5 done
      if(hour() > 5)
        line(400, 250, 435, 250) //line 6 done
      if(hour() > 6)
        line(394, 289, 430, 300) //line 7 done
      if(hour() > 7)
        line(379, 325, 410, 350) //line 8 done
      if(hour() > 8)
        line(356, 356, 383, 388) //line 9 done
      if(hour() > 9)
        line(325, 379, 342, 415) //line 10 done
      if(hour() > 10)
        line(288, 396, 297, 428) //line 11 done
      if(hour() > 11)
        line(250, 400, 250, 435) //line 12 done
      if(hour() > 12)
        line(212, 396, 203, 432) //line 13 
      if(hour() > 13)
        line(175, 381, 156, 419) //line 14
      if(hour() > 14)
        line(144, 358, 115, 392) //line 15
      if(hour() > 15)
        line(121, 327, 88, 354) //line 16
      if(hour() > 16)
        line(106, 291, 68, 304) //line 17 done
      if(hour() > 17)
        line(100, 250, 60, 250) //line 18 done
      if(hour() > 18)
        line(106, 209, 68, 196) //line 19 done
      if(hour() > 19)
        line(121, 173, 88, 146) //line 20 done
      if(hour() > 20)
        line(144, 142, 115, 108) //line 21 done
      if(hour() > 21)
        line(175,119,156,81) //line 22 done
      if(hour() > 22)
        line(212, 104, 203, 68) //line 23 done
}
