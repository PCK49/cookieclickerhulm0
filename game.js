var gamestart = 0;
var start = createSprite(200,200);
var cookie;
var shop;
start.setAnimation("Start");
start.scale = 1;
var startbutton = createSprite(310,350);
startbutton.setAnimation("Start Button");
startbutton.scale = 1.5;
var cookiesclicked=0;
var wshop=0;
var shop1;
var shop2;
var shop3;
var shop4;
var cookiesbought=0;
var winner=0;
var win;
var timer=0;
function draw() {
  background("blue");
    if (mouseIsOver(startbutton)) {
        startbutton.scale = startbutton.scale + 0.005;
        if (startbutton.scale > 1.55) {
            startbutton.scale = 1.54999;
        }
    }  
    if (mouseWentDown("leftButton")&&mousePressedOver(startbutton)) {
        gamestart = 1;
        start.destroy();
        startbutton.destroy();
    }
    if (gamestart == 1) {
      timer++;
      if (timer==30) {
        cookiesclicked=cookiesclicked+cookiesbought;
        timer=0;
      }
      if (!cookie) {  
          cookie = createSprite(110,200);
          cookie.scale=0.9;
          cookie.setAnimation("Cookie");
        }
      if (!shop) {
        shop=createSprite(150,250);
        shop.scale=1.25;
        shop.setAnimation("Shop");
        shop1=createSprite(325,200);
        shop1.setAnimation("Shop1");
        shop2=createSprite(325,250);
        shop2.setAnimation("Shop2");
        shop3=createSprite(325,300);
        shop3.setAnimation("Shop3");
        shop4=createSprite(325,350);
        shop4.setAnimation("Shop4");
        }
        if (mouseWentDown("leftButton")&&mouseIsOver(cookie)&&gamestart==1) {
          cookiesclicked++;
        }
      
        if (mouseWentDown("leftButton")&&mouseIsOver(shop1)&&gamestart==1&&cookiesclicked>25) {
          wshop=1;
        }
        if (mouseWentDown("leftButton")&&mouseIsOver(shop2)&&gamestart==1&&cookiesclicked>50) {
          wshop=2;
        }
        if (mouseWentDown("leftButton")&&mouseIsOver(shop3)&&gamestart==1&&cookiesclicked>100) {
          wshop=3;
        }
        if (mouseWentDown("leftButton")&&mouseIsOver(shop4)&&gamestart==1&&cookiesclicked>500) {
          wshop=4;
        }
        if (wshop==1) {
          cookiesclicked-=25;
          wshop=0;
          cookiesbought+=1;
        }
        if (wshop==2) {
          cookiesclicked-=50;
          wshop=0;
          cookiesbought+=10;
        }
        if (wshop==3) {
          cookiesclicked-=100;
          wshop=0;
          cookiesbought+=50;
        }
        if (wshop==4) {
          cookiesclicked-=500;
          wshop=0;
          cookiesbought+=100;
        }
    drawSprites();
    fill("#FFBA30");
    textSize(30);
    if (cookiesclicked<10000) {
    text("Cookies Clicked:"+cookiesclicked,50,50);
    } else {
      winner=1;
    }
    } else {
      drawSprites();
    }
    if (winner==1) {
      win=createSprite(200,200);
      win.setAnimation("You Won!");
      drawSprites();
}
}
