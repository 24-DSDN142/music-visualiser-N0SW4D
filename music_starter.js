
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(165, 244, 250);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  let R = map(vocal, 0, 100, 0, 256);
  let G = map(drum, 0, 100, 0, 256);
  let B = map(bass, 0, 100, 0, 256);
  let bounce = map(bass, 0, 100, 200, 300);


  strokeWeight(0);

  
  drawMinion(150, 200, 300, 1);
  drawMinion(400, 300, 200, 2);
  drawMinion(650, 400, 100, 3);
  drawMinion(900, bounce, 300, 4);

  //eyes
  for (let i=0; i<4; i++){
    //setting x and y
    let x=150+250*i;
    let y=200+100*i;
    if (i==3) {y=bounce;} //if i==4 then y=bounce

    //the strap
    fill(0,0,0);
    rect(x, y, 200, 20);

    //the goggles
    fill(110,110,110);
    if (i==0){fill(R,G,B);}
    ellipse(x, y, 100, 100);
    fill(256,256,256);
    ellipse(x, y, 75, 75);
  }
  
  

}

function drawMinion(cenX, cenY, height, type){
  fill(250, 217, 117); //minion yellow
  ellipse (cenX, cenY, 200, 200);
  rect (cenX, cenY+height/2, 200, height)

if (type==1){

}
if (type==2){

}
if (type==3){

}
if (type==4){
  
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