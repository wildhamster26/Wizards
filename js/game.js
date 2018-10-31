
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

var p1;
var p2;

let intervalId;
let endHarry = new Image();
endHarry.src = "./Images/voldemort_infinity_war_death_meme.png";
let endVoldemort = new Image();
endVoldemort.src = "./Images/voldemort_kills.jpg";
let bgPic = new Image();
bgPic.src = "./Images/grassBg.jpg";
let harryDisplay = new Image();
harryDisplay.src = "../Images/harry-display.png";
let ronDisplay = new Image();
ronDisplay.src = "../Images/ronDisplay.png";
let hermioneDisplay = new Image();
hermioneDisplay.src = "../Images/hermioneDisplay.png";
let umbridgeDisplay = new Image();
umbridgeDisplay.src = "../Images/umbridgeDisplay.png";
let luciusDisplay = new Image();
luciusDisplay.src = "../Images/luciusDisplay.png";
let voldemortDisplay = new Image();
voldemortDisplay.src = "../Images/voldemort-display.png";

let gamebtn = document.querySelector(".play");
gamebtn.addEventListener("click", startGame);

canvas.addEventListener("mousedown", function(event){
  if (event.offsetY >= 350 && event.offsetY <= 410){
    if (event.offsetX >= 200 && event.offsetX <= 260){
      p1 = new Player(ctx, 32, 32, "red", ctx.canvas.width - 100, ctx.canvas.height - 100, 150, -1, -1, 2, "./Images/ron.png", "ron")
    }
    else if (event.offsetX >= 300 && event.offsetX <= 360){
      p1 = new Player(ctx, 32, 32, "red", ctx.canvas.width - 100, ctx.canvas.height - 100, 150, -1, -1, 2, "./Images/harry-transparent.png", "harry")
    }
    else if (event.offsetX >= 400 && event.offsetX <= 460){
      p1 = new Player(ctx, 32, 32, "red", ctx.canvas.width - 100, ctx.canvas.height - 100, 150, -1, -1, 2, "./Images/hermione.png", "hermione")
    }
    else if (event.offsetX >= 750 && event.offsetX <= 810){
      p2 = new Player(ctx, 32, 32, "green", 100, 100, 150, 1, 1, 2, "./Images/lucius.png", "lucius");
    }
    else if (event.offsetX >= 850 && event.offsetX <= 910){
      p2 = new Player(ctx, 32, 32, "green", 100, 100, 150, 1, 1, 2, "./Images/voldemort-transparent.png", "voldemort");
    }
    else if (event.offsetX >= 950 && event.offsetX <= 1010){
      p2 = new Player(ctx, 32, 32, "green", 100, 100, 150, 1, 1, 2, "./Images/umbridge.png", "umbridge");
    } 
  }
});

function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save()
  ctx.drawImage(bgPic, 0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.restore();
  p1.draw()
  p2.draw()
  if(p2.textTime > 0){
    ctx.save()
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "chartreuse";
    ctx.fillText("Yes... Dark magic!", p2.x -30, p2.y -50);
    ctx.restore()
}
}

function checkCollision(a,b) {
  return Math.abs(a.centerX - b.centerX) <= a.width && Math.abs(a.centerY - b.centerY) <= a.height;
}

function checkCollisionSpell(a,b) {
  return Math.abs(a.centerX - b.centerX) <= b.width/2 && Math.abs(a.centerY - b.centerY) <= b.height/2;
}

function player1Text(p1){

}

function welcome(){
  ctx.save();
  ctx.font = "20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Harry and Voldy are BFFs.", canvas.width/2, 100, canvas.width-100);
  ctx.fillText("They are both gifted wizards whose only wish is to win the UK's greatest tournament of all - Britain's got talent.", canvas.width/2, 140, canvas.width-100);
  ctx.fillText("One sunny afternoon they stroll together to the forbidden forest,", canvas.width/2, 180, canvas.width-100);
  ctx.fillText("where they can practice their show and try to beat each other while entertaining Simon 'The Sorcerer' Cowel.", canvas.width/2, 220, canvas.width-100);
  ctx.fillText("Choose your player and let's get it on!", canvas.width/2, 260, canvas.width-100);
  ronDisplay.onload = function(){ctx.drawImage(ronDisplay, 200, 350)};
  harryDisplay.onload = function(){ctx.drawImage(harryDisplay, 300, 350)};
  hermioneDisplay.onload = function(){ctx.drawImage(hermioneDisplay, 400, 350)};
  luciusDisplay.onload = function(){ctx.drawImage(luciusDisplay, 750, 350)};
  voldemortDisplay.onload = function(){ctx.drawImage(voldemortDisplay, 850, 350)};
  umbridgeDisplay.onload = function(){ctx.drawImage(umbridgeDisplay, 950, 350)};
  ctx.fillText("All players have 150 health.", canvas.width/2, 380, canvas.width-100);
  ctx.textAlign = "left";
  ctx.fillText("Harry moves with the Arrow keys.", 150, 500, canvas.width-100);
  ctx.fillText("Voldy moves with the ESDF keys.", 670, 500, canvas.width-100);
  ctx.fillText("Press '8' for Expelliarmus - 35 damage.", 150, 540, canvas.width-100);
  ctx.fillText("Opponent can't cast spells for 4 seconds.", 150, 560, canvas.width-100);
  ctx.fillText("Press '9' for Stupefy - 35 damage.", 150, 600, canvas.width-100);
  ctx.fillText("Opponent can't move for 2 seconds.", 150, 620, canvas.width-100);
  ctx.fillText("Press '0' for Sectum-sempra - 50 damage.", 150, 660, canvas.width-100);
  ctx.fillText("Press '1' for Avada-kedavra - 100 damage.", 670, 540, canvas.width-100);
  ctx.fillText("Press '2' for Cruciio - 50 damage.", 670, 580, canvas.width-100);
  ctx.fillText("Opponent can't move for 2 seconds.", 670, 600, canvas.width-100);
  ctx.fillText("Press '3' for Imperio - 35 damage.", 670, 640, canvas.width-100);
  ctx.fillText("Opponent moves towards the center for 3 seconds.", 670, 660, canvas.width-100);
  ctx.textAlign = "center";
  ctx.fillText("Click on the 'Play' button at the top to begin!", canvas.width/2, 750, canvas.width-100);
  ctx.restore();
}

welcome();

function startGame(){
  p1.opponent = p2;
  p2.opponent = p1;
  p1.health = 150;
  p1.x = ctx.canvas.width - 100;
  p1.y = ctx.canvas.height - 100;
  p1.spells = [];
  p2.health = 150;
  p2.x = 100;
  p2.y = 100;
  p2.spells = [];
  intervalId = setInterval(function(){
      //END GAME IF SOMEONE LOSES ALL HEALTH
        if(p1.health <= 0){
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.save()
          ctx.drawImage(endVoldemort, 98, 111);
          ctx.font="30px harry";
          ctx.fillStyle="#0A0A0A";          
          ctx.fillText("Nagini... giʃe...('eat in parseltongue')", 340, 60);
          ctx.restore()
          clearInterval(intervalId);
          return;
        }
        else if(p2.health <= 0){
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(endHarry, 98, 140);
          clearInterval(intervalId);
          return;
        }
      //MAKE THE ANIMATIONS
        p1.update();
        p2.update();
          if (checkCollision(p1, p2)) {
            if(p1.x > p2.x && p1.y >p2.y){ 
              p1.x += 2
              p1.y += 2
              p2.y -= 2
              p2.x -= 2
            } else if(p2.x > p1.x && p2.y > p1.y){
              p2.x += 2
              p2.y += 2
              p1.y -= 2
              p1.x -= 2
            } else if(p2.x > p1.x && p2.y < p1.y){
                p2.x += 2
                p2.y -= 2
                p1.y += 2
                p1.x -= 2
            } else if(p2.x < p1.x && p2.y > p1.y){
                p2.x -= 2
                p2.y += 2
                p1.y -= 2
                p1.x += 2
            }  else if(p2.x === p1.x && p2.y > p1.y){
              p2.y += 2
              p1.y -= 2
            } else if(p2.x === p1.x && p2.y < p1.y){
              p2.y -= 2
              p1.y += 2
            } else if(p2.x > p1.x && p2.y === p1.y){
              p2.x += 2
              p1.x -= 2
            } else if(p2.x < p1.x && p2.y === p1.y){
              p2.x -= 2
              p1.x += 2
            }
          }
          document.onkeydown = function(event) {
            event.preventDefault();
            if(event.which === 38)
              p1.up = true;
            else if(event.which === 39)
              p1.right = true;
            else if(event.which === 40)
              p1.down = true;
            else if(event.which === 37)
              p1.left = true;
            else if(event.which === 69)
              p2.up = true;
            else if(event.which === 70)
              p2.right = true;
            else if(event.which === 68)
              p2.down = true;
            else if(event.which === 83)
              p2.left = true;
          }
          
          document.onkeyup = function (event) {
              event.preventDefault()
              if(event.which === 38)
                p1.up = false;
              else if(event.which === 39)
                p1.right = false;
              else if(event.which === 40)
                p1.down = false;
              else if(event.which === 37)
                p1.left = false;
              else if(event.which === 69)
                p2.up = false;
              else if(event.which === 70)
                p2.right = false;
              else if(event.which === 68)
                p2.down = false;
              else if(event.which === 83)
                p2.left = false;
                
              switch (event.which) {
                  //PLAYER 1 SPELLS
                case 56:
                  p1.cast("Expelliarmus");
                  break;
                case 57:
                  p1.cast("Stupefy");
                  break;
                case 48:
                  p1.cast("Sectum-Sempra");
                  p2.textTime = 2000;
                  setTimeout(function(){
                    p2.textTime = 0;
                  }, p2.textTime)
                  break;
                   //PLAYER 2 SPELLS
                case 49:
                  p2.cast("Avada-kedavra");
                  break;
                case 50:
                  p2.cast("Crucio");
                  break;
                case 51:
                  p2.cast("Imperio");
                  break;
              }
          }
        drawEverything()
    }, 1000/50)
}



