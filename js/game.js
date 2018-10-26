let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

var p1 = new Player(ctx, 32, 32, "red", ctx.canvas.width - 100, ctx.canvas.height - 100, 100, -1, -1, 2, "./Images/harry.png")
var p2 = new Player(ctx, 32, 32, "green", 100, 100, 100, 1, 1, 2, "./Images/voldemort.png");
p1.opponent = p2;
p2.opponent = p1;
let intervalId;
let endHarry = new Image();
endHarry.src = "./Images/voldemort_infinity_war_death_meme.png"
let endVoldemort = new Image();
endVoldemort.src = "./Images/voldemort_kills.jpg"

function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save()
  ctx.fillStyle="#71BE76";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  p1.draw()
  p2.draw()
}

function checkCollision(a,b) {
  return Math.abs(a.centerX - b.centerX) <= a.width && Math.abs(a.centerY - b.centerY) <= a.height;
}

function checkCollisionSpell(a,b) {
  return Math.abs(a.centerX - b.centerX) <= b.width/2 && Math.abs(a.centerY - b.centerY) <= b.height/2;
}

function startGame(){
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
            if(p1.x - p2.x){
              p1.x += 10
              p2.x -= 10
            }
            else if(p2.x > p1.x){
              p2.x += 10
              p1.x -= 10
            }
          }
            // switch (p1.direction) {
            //   case "N":
            //     p1.y += 5;
            //     break;
            //   case "NE":
            //     p1.y += 5;
            //     p1.x -= 5;
            //     break;
            //   case "E":
            //     p1.x -= 5;
            //     break;
            //   case "SE":
            //     p1.y -= 5;
            //     p1.x -= 5;
            //     break;
            //   case "S":
            //     p1.y -= 5;
            //     break;
            //   case "SW":
            //     p1.y -= 5;
            //     p1.x += 5;
            //     break;
            //   case "W":
            //     p1.x += 5;
            //     break;
            //   case "NW":
            //     p1.y += 5;
            //     p1.x += 5;
            //     break;
            // }
            // switch (p2.direction) {
            //   case "N":
            //     p2.y += 5;
            //     break;
            //   case "NE":
            //     p2.y += 5;
            //     p2.x -= 5;
            //     break;
            //   case "E":
            //     p2.x -= 5;
            //     break;
            //   case "SE":
            //     p2.y -= 5;
            //     p2.x -= 5;
            //     break;
            //   case "S":
            //     p2.y -= 5;
            //     break;
            //   case "SW":
            //     p2.y -= 5;
            //     p2.x += 5;
            //     break;
            //   case "W":
            //     p2.x += 5;
            //     break;
            //   case "NW":
            //     p2.y += 5;
            //     p2.x += 5;
            //     break;
            // }
          // }
        drawEverything()
    }, 1000/50)
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
      case 220:
        p1.cast("Expelliarmus");
        break;
      case 221:
        p1.cast("Stupefy");
        break;
      case 219:
        p1.cast("Sectum-Sempra");
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
