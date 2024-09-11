 let R = 103;
 let G = 108;
 let B = 117;

 // vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   background(256,256,256);
   textFont('Verdana'); // please use CSS safe fonts
rectMode(CENTER);
   textAlign(CENTER);
   textSize(50);
   stroke(0,0,0);
   strokeWeight(0);

   let bam = map(vocal,0,100,0,256);
   let times = 0;
   let fall = counter;

   //background timing
   if (counter>6400){
     let fade=counter-6400;
     if (R>0){R-=(fade/3.88)/160}
     if (G>0){G-=(fade/3.7)/160}
     if (B>0){B-=(fade/3.42)/160}
   }
   fill(R,G,B);
   if(counter > 6850) {fill(bam,0,0)}

   strokeWeight(5);
   rect(150,125,300,250);
   rect(300,375,600,250);
   rect(400,175,200,150);
   rect(1150,350,100,300);
   rect(1050,100,300,200);

   beginShape();
   vertex(300,0);
   vertex(900,0);
   vertex(900,250);
   vertex(500,250);
   vertex(500,100);
   vertex(300,100);
   endShape(CLOSE);

   beginShape();
   vertex(600,250);
   vertex(800,250);
   vertex(1000,500);
   vertex(600,500);
   endShape(CLOSE);

   beginShape();
   vertex(800,250);
   vertex(900,250);
   vertex(900,200);
   vertex(1100,200);
   vertex(1100,500);
   vertex(1000,500);
   endShape(CLOSE);

   fill(0,0,0);
   ellipse(20,20,5,5);
   ellipse(20,270,5,5);
   ellipse(20,480,5,5);
   ellipse(20,230,5,5);
   ellipse(280,20,5,5);
   ellipse(280,230,5,5);
   ellipse(320,20,5,5);
   ellipse(320,80,5,5);
   ellipse(320,120,5,5);
   ellipse(480,120,5,5);
   ellipse(515,85,5,5);
   ellipse(790,265,5,5);
   ellipse(830,265,5,5);
   ellipse(880,20,5,5);
   ellipse(880,230,5,5);
   ellipse(915,265,5,5);
   ellipse(920,20,5,5);
   ellipse(920,180,5,5);
   ellipse(920,220,5,5);
   ellipse(975,490,5,5);
   ellipse(1010,490,5,5);
   ellipse(1080,220,5,5);
   ellipse(1080,490,5,5);
   ellipse(1120,220,5,5);
   ellipse(1120,490,5,5);
   ellipse(1180,20,5,5);
   ellipse(1180,180,5,5);
   ellipse(1180,220,5,5);
   ellipse(1180,490,5,5);
   strokeWeight(0);


   //making the minions
   minionTypes(150,200,1,bass,vocal,drum,other); //Guitarist
   minionTypes(650,200,3,bass,vocal,drum,other); //Singer
   minionTypes(400,250,2,bass,vocal,drum,other); //Drummer


   //speech bubble
   fill(256,256,256);
   triangle(765,270,780,230,830,250);
   rect(980,180,400,150);
   fill(0,0,0);
   text(words, 980, 200);

}

 //To make a base minion
 function drawMinion(cenX, cenY){
   fill(250, 217, 117); //minion yellow
   //makes the minion shape
   ellipse (cenX, cenY, 200, 200);
   rect (cenX, cenY+150, 200, 300)
   //goggle strap
   fill(0,0,0);
     rect(cenX, cenY, 200, 20);
 }

// //to customise each minion
 function minionTypes(x, y, type, bass, vocal, drum, other){
   let R1 = map(other, 0, 100, 0, 256);
   let G1 = map(drum, 0, 100, 0, 256);
   let B1 = map(bass, 0, 100, 0, 256);


   if (type==1){
     let strum = map(bass,0,100,0,10);

     //draw minion
     drawMinion(x,y);

     //making the goggles sunglasses
     fill(R1,0,0);
     strokeWeight(4);
     ellipse(150,200,100,100);
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
     for(let i=0; i<2; i++){
       fill(0,0,0);
     beginShape();
     vertex(125+(i*50),300);
     vertex(50+(i*200),270);
     vertex(50+(i*200),450);
     vertex(125+(i*50),450);
     endShape(CLOSE);
     }


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
     fill(R1,0,0);
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
     fill(R1,0,0);
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
       let bop = map(drum,0,100,0,10);
      
       //mullet
       fill(222, 195, 100);
       ellipse(300,270,90,90);
       ellipse(330,300,90,90);
       ellipse(500,270,90,90);
       ellipse(470,300,90,90);

       //draw minion
       drawMinion(x,y);

       //eyes
       for (let i=0; i<2; i++){
         //glasses
         fill(110,110,110);
        rect(360+(i*80),250,70,50);
         fill(G1,0,G1);
         rect(360+(i*80),250,55,35);
         //shine
         strokeWeight(5);
         stroke(256,256,256);
         line(385+(i*80),234,335+(i*80),265);
         strokeWeight(0);
       }

       //dome
       fill(222, 195, 100);
       beginShape()
       curveVertex(300,200);
       curveVertex(300,200);
       curveVertex(325,130);
       curveVertex(400,110);
       curveVertex(475,130);
       curveVertex(500,200);
       curveVertex(500,200);
       endShape(CLOSE);
       //bandana
       fill(G1,50,G1);
       beginShape();
       curveVertex(300,200);
       curveVertex(300,200);
       curveVertex(325,150);
       curveVertex(400,130);
       curveVertex(475,150);
       curveVertex(500,200);
       curveVertex(500,200);
       endShape(CLOSE);
       //fringe
       fill(222, 195, 100);
       ellipse(310,200,55,50);
       ellipse(350,195,60,50);
       ellipse(400,185,60,40);
       ellipse(450,195,60,50);
       ellipse(490,200,55,50);


       //denium jacket
       fill(159, 199, 209);
       beginShape();
       vertex(300,320);
       vertex(380,350);
       vertex(400,380);
       vertex(420,350);
       vertex(500,320);
       vertex(500,500);
       vertex(300,500);
       endShape(CLOSE);
       //collar
       fill(109, 136, 143);
       triangle(300,320,300,360,370,350);
       triangle(500,320,500,360,430,350);
       fill(159, 199, 209);
       triangle(300,320,300,355,370,350);
       triangle(500,320,500,355,430,350);


       //hands and sticks
       for(let i=0; i<2; i++){
         fill(212, 197, 157);
         //back of sticks
         beginShape();
         vertex(320+(i*160),320+(4*bop));
         vertex(310+(i*180),320+(4*bop));
         vertex(295+(i*210),350+(4*bop));
         vertex(305+(i*190),350+(4*bop));
         endShape(CLOSE);
         //hands
         fill(256, 190, 90);
         ellipse(300+(i*200),350+(4*bop),32,32);
         //front of sticks
         fill(212, 197, 157);
         beginShape();
         vertex(305+(i*190),350+(4*bop));
         vertex(295+(i*210),350+(4*bop));
         vertex(280+(i*240),380+(4*bop));
         vertex(290+(i*220),380+(4*bop));
         endShape(CLOSE);
         ellipse(285+(i*230),380+(4*bop),15,15);
       }


       //drums
       for (let i=0; i<2; i++){
         //front drums
         fill(G1, 0, G1);
         rect(360+(i*80),470,60,60);
         //front lining
         fill(147, 159, 173);
         rect(360+(i*80),440,65,10);
         rect(360+(i*60),470,5,60);
         rect(380+(i*60),470,5,60);
         //back drums
         fill(G1, 75, G1);
         rect(300+(i*200),460,100,100);
         //back lining
         fill(147, 159, 173);
         rect(300+(i*200),410,110,10);
         rect(267+(i*200),460,5,100);
         rect(300+(i*200),460,5,100);
         rect(333+(i*200),460,5,100);
       }
     }


       else if (type==3){
       let sing = map(vocal,0,100,5,45);
       let vibe = map(other,0,100,0,20);
     
       drawMinion(x,y+vibe);

       //eye
       fill(80,80,80);
       ellipse(675,200+vibe,100,100);
       fill(110,110,110);
       ellipse(680,200+vibe,90,100);
       fill(256,256,256);
       ellipse(682,200+vibe,70,75);
       fill(0,0,0);
       ellipse(682,200+vibe,17,20);
       fill(256,256,256);
       ellipse(689,194+vibe,10,10)

       //mouth
       fill(0,0,0);
       ellipse(675,280+vibe,sing,sing);

       //suit
       //shirt
       fill(256,256,256);
       beginShape();
       vertex(600,310+vibe);
       vertex(630,315+vibe);
       vertex(680,330+vibe);
       vertex(720,310+vibe);
       vertex(720,450+vibe);
       vertex(600,450+vibe);
       endShape(CLOSE);
       fill(200,200,200);
       triangle(600,330+vibe,600,340+vibe,680,330+vibe);
       //tie
       fill(R1,G1,B1);
       beginShape();
       vertex(680,330+vibe);
       vertex(670,340+vibe);
       vertex(675,350+vibe);
       vertex(660,380+vibe);
       vertex(680,400+vibe);
       vertex(700,380+vibe);
       vertex(685,350+vibe);
       vertex(690,340+vibe);
       endShape(CLOSE);
       //jacket
       fill(56, 82, 143);
       beginShape();
       vertex(550,300+vibe);
       vertex(620,300+vibe);
       vertex(680,400+vibe);
       vertex(720,300+vibe);
       vertex(750,300+vibe);
       vertex(750,500+vibe);
       vertex(550,500+vibe);
       endShape(CLOSE);
       //pockets
       fill(42, 61, 105);
       rect(600,430+vibe,50,5);
       rect(735,430+vibe,30,5);


       //microphone
       fill(40,40,40);
       beginShape();
       vertex(688,300+vibe);
       vertex(712,300+vibe);
       vertex(707,350+vibe);
       vertex(693,350+vibe);
       endShape(CLOSE);
       fill(127, 144, 148);
       ellipse(700,300+vibe,30,30);


       //arms
       //left arm
       fill(24, 36, 61);
       triangle(710,325+vibe,710,365+vibe,688,325+vibe)
       //hand
       fill(256, 190, 90);
       ellipse(700,330+vibe,30,30);
       //sleeve
       fill(42, 61, 105);
       beginShape();
       vertex(710,315+vibe);
       vertex(730,345+vibe);
       vertex(725,330+vibe);
       vertex(765,330+vibe);
       vertex(745,405+vibe);
       vertex(710,365+vibe);
       endShape(CLOSE);
       ellipse(745,330+vibe,40,40);
       //right arm
       fill(24, 36, 61);
       triangle(688,330+vibe,688,370+vibe,700,330+vibe);
       //hand
       fill(256, 190, 90);
       ellipse(700,340+vibe,30,30);
       //sleeve
       fill(42, 61, 105);
       beginShape();
       vertex(688,330+vibe);
       vertex(630,370+vibe);
       vertex(600,325+vibe);
       vertex(560,335+vibe);
       vertex(610,410+vibe);
       vertex(688,370+vibe);
       endShape(CLOSE);
       ellipse(580,330+vibe,40,40);
     }  
 }

