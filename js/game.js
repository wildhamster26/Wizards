let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

var size = 50;
var p1 = new Player(ctx, size, "red", 5, ctx.canvas.width - 100, ctx.canvas.height - 100 )
var p2 = new Player(ctx, size, "green", 5, 100, 100);

function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  p1.draw()
  p2.draw()
//   drawScore()
}

// ctx.font = "50px sans-serif"
// function drawScore() {
//   ctx.fillText("Player 1: " + p1.score, canvas.width - 300, 50)
//   ctx.fillText("Player 2: " + p2.score, canvas.width - 300, 100)
// }

function checkCollision(a,b) {
  return Math.abs(a.x - b.x) <= size && Math.abs(a.y - b.y) <= size
}

function update() {
  drawEverything()
  if (checkCollision(p1, p2)) {
    p1.score++
  }
  if (checkCollision(p2, p1)) {
    p2.score++
  }
}

update()

document.onkeydown = function (event) {
  event.preventDefault()
  switch (event.code) {
    case "ArrowUp":
      p1.move("up")
      break
    case "ArrowRight":
      p1.move("right")
      break
    case "ArrowDown":
      p1.move("down")
      break
    case "ArrowLeft":
      p1.move("left")
      break
    case "KeyW":
      p2.move("up")
      break
    case "KeyD":
      p2.move("right")
      break
    case "KeyS":
      p2.move("down")
      break
    case "KeyA":
      p2.move("left")
      break
  }
  console.log(event.code);

  update()
}