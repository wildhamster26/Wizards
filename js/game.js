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

// drawEverything();
function checkCollision(a,b) {
    // console.log("collision");
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
    case 104:
    (checkCollision(p1, p2) || p1.y <=30) ? p1.direction = null : p1.direction = "N";
      break
    case 105:
    (checkCollision(p1, p2) || (p1.y <=30 || p1.x >= ctx.canvas.width - 60)) ? p1.direction = null : p1.direction = "NE";
      break
    case 102:
    (checkCollision(p1, p2) || p1.x >= ctx.canvas.width - 60) ? p1.direction = null : p1.direction = "E";
      break
    case 99:
    (checkCollision(p1, p2) || (p1.y >=ctx.canvas.height - 60 || p1.x >= ctx.canvas.width - 60)) ? p1.direction = null : p1.direction = "SE";
      break
    case 98:
    (checkCollision(p1, p2) || p1.y >=ctx.canvas.height - 60) ? p1.direction = null : p1.direction = "S";
      break
    case 97:
    (checkCollision(p1, p2) || (p1.y >=ctx.canvas.height - 60 || p1.x <= 30)) ? p1.direction = null : p1.direction = "SW";
      break
    case 100:
    (checkCollision(p1, p2) || p1.x <= 30) ? p1.direction = null : p1.direction = "W";
      break
    case 103:
    (checkCollision(p1, p2) || (p1.x <= 30 || p1.y <=30)) ? p1.direction = null : p1.direction = "NW";
      break
      //PLAYER 2
    case 69:
    (checkCollision(p1, p2) || p2.y <=30) ? p2.direction = null : p2.direction = "N";
      break
    case 82:
    (checkCollision(p1, p2) || (p2.y <=30 || p2.x >= ctx.canvas.width - 60)) ? p2.direction = null : p2.direction = "NE";
      break
    case 70:
    (checkCollision(p1, p2) || p2.x >= ctx.canvas.width - 60) ? p2.direction = null : p2.direction = "E";
      break
    case 86:
    (checkCollision(p1, p2) || (p2.y >= ctx.canvas.height - 60 || p2.x >= ctx.canvas.width - 60)) ? p2.direction = null : p2.direction = "SE";
      break
    case 67:
    (checkCollision(p1, p2) || p2.y >= ctx.canvas.height - 60) ? p2.direction = null : p2.direction = "S";
      break
    case 88:
    (checkCollision(p1, p2) || (p2.y >= ctx.canvas.height - 60 || p2.x <= 30)) ? p2.direction = null : p2.direction = "SW";
      break
    case 83:
    (checkCollision(p1, p2) || p2.x <= 30) ? p2.direction = null : p2.direction = "W";
      break
    case 87:
    (checkCollision(p1, p2) || (p2.x <= 30 || p2.y <=30)) ? p2.direction = null : p2.direction = "NW";
      break
  }
}

document.onkeyup = function (event) {
    event.preventDefault()
    switch (event.which) {
        //PLAYER 1
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
        //PLAYER 2
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
    }
  }