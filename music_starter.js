
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(165, 244, 250);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  let mouthW = map(vocal, 0, 100, 20, 70);
  let mouthH = map(vocal, 0, 100, 20, 40);
  let stomp = map(drum, 0, 100, 440, 480)

  strokeWeight(0);

  //face
  fill(255, 207, 77);
  ellipse(450, 200, 200, 200);
  rect(450, 300, 200, 200);

  //legs
  rect(380,480, 40, 70);
  rect(520, stomp, 40, 70);
  fill(38,38,38);
  rect(380, 515, 45, 30);
  rect(520, stomp+35, 45, 30);

  //vest
  fill(46, 77, 171);
  rect(450, 400, 200, 100)
  rect(360, 350, 20, 50)
  rect(540, 350, 20, 50)


  //eye and goggles
  fill(38,38,38);
  rect(450, 200, 200, 20);
  fill(128,128,128);
  ellipse (450, 200, 120, 120);
  fill(256,256,256);
  ellipse (450, 200, 100, 100);
  fill(98, 128, 222);
  ellipse(450,200,50,50);
  fill(0,0,0);
  ellipse(450,200,35,35);
  fill(256,256,256);
  ellipse(465,185,30,30);

  //Mouth
  fill(0,0,0);
  ellipse(450, 300, mouthW, mouthH);

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