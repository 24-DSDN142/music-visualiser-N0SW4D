
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(165, 244, 250);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  let R = map(vocal, 0, 100, 0, 256);
  let G = map(drum, 0, 100, 0, 256);
  let B = map(bass, 0, 100, 0, 256);
  let bounce = map(drum, 0, 100, 200, 300);

  stroke(0,0,0);
  strokeWeight(0);

  //making the minions
  drawMinion(150, 200, 300, 1);
  drawMinion(400, 300, 200, 2);
  drawMinion(650, 400, 100, 3);
  drawMinion(900, bounce, 300, 4);

  //eyes
  for (let i=0; i<4; i++){
    strokeWeight(0);
    //setting x and y
    let x=150+250*i;
    let y=200+100*i;
    if (i==3) {y=bounce;} //if i==4 then y=bounce

    //the strap
    fill(0,0,0);
    rect(x, y, 200, 20);
    //the goggles
    fill(110,110,110);
    if (i==0){
      fill(R,0,0);
      strokeWeight(4);
    }
    else if(i==3){
      fill(0,G,0)
      strokeWeight(2);
    }
    ellipse(x, y, 100, 100);
    //eye
    fill(256,256,256);
    ellipse(x, y, 75, 75);
    strokeWeight(0);
    fill (0,0,0);
    ellipse(x,y,30,30);
    //eye sparkle
    fill(256,256,256);
    ellipse(x+10,y-10,20,20);
  }
  
  minionTypes(1, bass);
  
}

//To make a base minion
function drawMinion(cenX, cenY, height){
  fill(250, 217, 117); //minion yellow
  //makes the minion shape
  ellipse (cenX, cenY, 200, 200);
  rect (cenX, cenY+height/2, 200, height)
}

//to customise each minion
function minionTypes(type, bass){
  if (type==1){
    let strum = map(bass,0,100,0,10);

    //making the goggles sunglasses
    fill(30,30,30);
    ellipse(150,200,75,75);
    //shine on the sunglasses
    strokeWeight(5);
    stroke(256,256,256);
    line(121,220,180,180);
    strokeWeight(3);
    line(130,230,185,193);
    strokeWeight(0);


    //jacket
    fill(0,0,0);
    beginShape();
    vertex(125,300);
    vertex(50,270);
    vertex(50,450);
    vertex(125,450);
    endShape(CLOSE);
    beginShape();
    vertex(175,300);
    vertex(250,270);
    vertex(250,450);
    vertex(175,450);
    endShape(CLOSE);


    //crazy rock hair
    fill(0,0,0);
    beginShape();
    vertex(50,190);
    vertex(40,90);
    vertex(100,50);
    vertex(90, 80);
    vertex(170,40);
    vertex(140,70);
    vertex(250,50);
    vertex(200,100);
    vertex(330,90);
    vertex(250,130);
    vertex(300,200);
    vertex(190,170);
    vertex(190,200);
    vertex(120,170);
    endShape(CLOSE);
    //red highlights
    fill(120,0,0);
    triangle(48,170,46,150,200,130);
    triangle(44,130,43,120,150,110);


    //guitar
    triangle(-20,400,100,350,70,400);
    triangle(70,400,70,500,120,370);
    //handle or whatever its called
    fill(30,30,30);
    beginShape();
    vertex(100,350);
    vertex(260,230);
    vertex(270,240);
    vertex(120,370);
    vertex(70,400);
    endShape(CLOSE);
    //the end thing of guitar
    fill(120,0,0);
    beginShape();
    vertex(255,235);
    vertex(255,225);
    vertex(275,210);
    vertex(305,215);
    vertex(275,245);
    vertex(265,245);
    endShape(CLOSE);
    strokeWeight(0)

    
  //arm1
  stroke(0,0,0);
  fill(256, 190, 90);
  beginShape();
  vertex(90+(5*strum),340+(5*strum));
  vertex(110+(5*strum),320+(5*strum));
  vertex(40+(5*strum),250+(5*strum));
  vertex(20+(5*strum),270+(5*strum));
  endShape(CLOSE)
  ellipse(100+(5*strum),330+(5*strum),29,29);
  ellipse(30+(5*strum),260+(5*strum),29,29);
  //arm2
  ellipse(250,255,29,29);
  rect(250,300,29,95);
  ellipse(250,350,29,29);
    }


    else if (type==2){
    
    }


    else if (type==3){
    
    }


    else if (type==4){
      
    }    
}


//  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
   // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);