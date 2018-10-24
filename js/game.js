let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

var p1 = new Player(ctx, 30, "red", 2, ctx.canvas.width - 100, ctx.canvas.height - 100 )
var p2 = new Player(ctx, 30, "green", 2, 100, 100);
let intervalId;

function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  p1.draw()
  p2.draw()
}

function checkCollision(a,b) {
  return Math.abs(a.x - b.x) <= a.size && Math.abs(a.y - b.y) <= a.size
}
function startGame(){
    intervalId = setInterval(function(){
        p1.update();
        p2.update();
        if (checkCollision(p1, p2)){
            p1.direction = null;
            p2.direction = null;
        };
        drawEverything()
    }, 1000/50)
}


document.onkeydown = function (event) {
  event.preventDefault()
  switch (event.which) {
      //PLAYER 1
    case 104: // key 8 - N
    (checkCollision(p1, p2) || p1.y <=30) ? p1.direction = null : p1.direction = "N";
    p1.vy = -1;
    p1.vx = 0;
    break
    case 105: // key 9 - NW
    (checkCollision(p1, p2) || (p1.y <=30 || p1.x >= ctx.canvas.width - 60)) ? p1.direction = null : p1.direction = "NE";
    p1.vy = -1;
    p1.vx = 1;
    break
    case 102: // key 6 - E
    (checkCollision(p1, p2) || p1.x >= ctx.canvas.width - 60) ? p1.direction = null : p1.direction = "E";
    p1.vx = 1;
    p1.vy = 0;
    break
    case 99: // key 3 - SE
    (checkCollision(p1, p2) || (p1.y >=ctx.canvas.height - 60 || p1.x >= ctx.canvas.width - 60)) ? p1.direction = null : p1.direction = "SE";
    p1.vx = 1;
    p1.vy = 1;
    break
    case 98: // key 2 - S
    (checkCollision(p1, p2) || p1.y >=ctx.canvas.height - 60) ? p1.direction = null : p1.direction = "S";
    p1.vy = 1;
    p1.vx = 0;
    break
    case 97: //key 1 - SW
    (checkCollision(p1, p2) || (p1.y >=ctx.canvas.height - 60 || p1.x <= 30)) ? p1.direction = null : p1.direction = "SW";
    p1.vy = 1;
    p1.vx = -1;
    break
    case 100: //left arrow
    (checkCollision(p1, p2) || p1.x <= 30) ? p1.direction = null : p1.direction = "W";
    p1.vx = -1;
    p1.vy = 0;
    break
    case 103: // key 7 - NW
    (checkCollision(p1, p2) || (p1.x <= 30 || p1.y <=30)) ? p1.direction = null : p1.direction = "NW";
    p1.vx = -1;
    p1.vy = -1;
      break
      //PLAYER 2
    case 69: // key e - N
    (checkCollision(p1, p2) || p2.y <=30) ? p2.direction = null : p2.direction = "N";
    p2.vy = -1;
    p2.vx = 0;
    break
    case 82: // key r - NE
    (checkCollision(p1, p2) || (p2.y <=30 || p2.x >= ctx.canvas.width - 60)) ? p2.direction = null : p2.direction = "NE";
    p2.vy = -1;
    p2.vx = 1;
      break
    case 70: // key f - E
    (checkCollision(p1, p2) || p2.x >= ctx.canvas.width - 60) ? p2.direction = null : p2.direction = "E";
      p2.vy = 0;
      p2.vx = 1;
      break
    case 86: // key v - SE
    (checkCollision(p1, p2) || (p2.y >= ctx.canvas.height - 60 || p2.x >= ctx.canvas.width - 60)) ? p2.direction = null : p2.direction = "SE";
      p2.vy = 1;
      p2.vx = 1;
      break
    case 67: // key c - S
    (checkCollision(p1, p2) || p2.y >= ctx.canvas.height - 60) ? p2.direction = null : p2.direction = "S";
      p2.vy = 1;
      p2.vx = 0;
      break
    case 88: // key x - SW
    (checkCollision(p1, p2) || (p2.y >= ctx.canvas.height - 60 || p2.x <= 30)) ? p2.direction = null : p2.direction = "SW";
      p2.vy = 1;
      p2.vx = -1;
      break
    case 83: // key s - W
    (checkCollision(p1, p2) || p2.x <= 30) ? p2.direction = null : p2.direction = "W";
      p2.vy = 0;
      p2.vx = -1;
      break
    case 87: // key w - NW
    (checkCollision(p1, p2) || (p2.x <= 30 || p2.y <=30)) ? p2.direction = null : p2.direction = "NW";
      p2.vy = -1;
      p2.vx = -1;
      break
  }
}

document.onkeyup = function (event) {
    event.preventDefault()
    switch (event.which) {
        //PLAYER 1 MOVEMENT
      case 104:
        p1.direction = null;
        break
      case 105:
        p1.direction =  null;
        break
      case 102:
        p1.direction = null;
        break
      case 99:
        p1.direction =  null;
        break
      case 98:
        p1.direction = null;
        break
      case 97:
        p1.direction =  null;
        break
      case 100:
        p1.direction = null;
        break
      case 103:
        p1.direction =  null;
        break
        //PLAYER 1 SPELLS
      case 220:
        p1.cast("Expelliarmus");
        break;
      case 221:
        p1.cast("Reducto");
        break;
      case 219:
        p1.cast("Sectum-Sempra");
        break;


        //PLAYER 2 MOVEMENT
      case 69:
        p2.direction =null;
        break
      case 82:
        p2.direction = null;
        break
      case 70:
        p2.direction =null;
        break
      case 86:
        p2.direction = null;
        break
      case 67:
        p2.direction =null;
        break
      case 88:
        p2.direction = null;
        break
      case 83:
        p2.direction =null;
        break
      case 87:
        p2.direction = null;
        break
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

// document.onkeydown = function (event) {
//     event.preventDefault()
//     switch (event.which) {
//         //PLAYER 1
//       case 104: // 8
//       (checkCollision(p1, p2) || p1.y <=30) ? p1.direction = null : p1.direction = "N";
//         break
//       case 105:
//       (checkCollision(p1, p2) || (p1.y <=30 || p1.x >= ctx.canvas.width - 60)) ? p1.direction = null : p1.direction = "NE";
//         break
//       case 102:
//       (checkCollision(p1, p2) || p1.x >= ctx.canvas.width - 60) ? p1.direction = null : p1.direction = "E";
//         break
//       case 99:
//       (checkCollision(p1, p2) || (p1.y >=ctx.canvas.height - 60 || p1.x >= ctx.canvas.width - 60)) ? p1.direction = null : p1.direction = "SE";
//         break
//       case 98:
//       (checkCollision(p1, p2) || p1.y >=ctx.canvas.height - 60) ? p1.direction = null : p1.direction = "S";
//         break
//       case 97:
//       (checkCollision(p1, p2) || (p1.y >=ctx.canvas.height - 60 || p1.x <= 30)) ? p1.direction = null : p1.direction = "SW";
//         break
//       case 100:
//       (checkCollision(p1, p2) || p1.x <= 30) ? p1.direction = null : p1.direction = "W";
//         break
//       case 103:
//       (checkCollision(p1, p2) || (p1.x <= 30 || p1.y <=30)) ? p1.direction = null : p1.direction = "NW";
//         break
//         //PLAYER 2
//       case 69:
//       (checkCollision(p1, p2) || p2.y <=30) ? p2.direction = null : p2.direction = "N";
//         break
//       case 82:
//       (checkCollision(p1, p2) || (p2.y <=30 || p2.x >= ctx.canvas.width - 60)) ? p2.direction = null : p2.direction = "NE";
//         break
//       case 70:
//       (checkCollision(p1, p2) || p2.x >= ctx.canvas.width - 60) ? p2.direction = null : p2.direction = "E";
//         break
//       case 86:
//       (checkCollision(p1, p2) || (p2.y >= ctx.canvas.height - 60 || p2.x >= ctx.canvas.width - 60)) ? p2.direction = null : p2.direction = "SE";
//         break
//       case 67:
//       (checkCollision(p1, p2) || p2.y >= ctx.canvas.height - 60) ? p2.direction = null : p2.direction = "S";
//         break
//       case 88:
//       (checkCollision(p1, p2) || (p2.y >= ctx.canvas.height - 60 || p2.x <= 30)) ? p2.direction = null : p2.direction = "SW";
//         break
//       case 83:
//       (checkCollision(p1, p2) || p2.x <= 30) ? p2.direction = null : p2.direction = "W";
//         break
//       case 87:
//       (checkCollision(p1, p2) || (p2.x <= 30 || p2.y <=30)) ? p2.direction = null : p2.direction = "NW";
//         break
//     }
//   }