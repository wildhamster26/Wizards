class Player extends Component {
    constructor(ctx, size, color, speed, x, y) {
      super(ctx, size, color,0,0)
      this.score = 0
      this.speed = speed;
      this.movement = null;
      this.rotation = null;
      this.x = x;
      this.y = y;
    }
    move(direction) {
      var xMin = -this.size
      var xMax = this.ctx.canvas.width
      var yMin = -this.size
      var yMax = this.ctx.canvas.height
      switch (direction) {
        case "up":
          this.y -= this.size / 10
          if (this.y <= yMin) 
            this.y = yMax
          break;
        case "right":
          this.x += this.size / 10
          if (this.x >= xMax) 
            this.x = xMin
          break;
        case "down":
          this.y += this.size / 10
          if (this.y >= yMax) 
            this.y = yMin
          break;
        case "left":
          this.x -= this.size / 10
          if (this.x <= xMin) 
            this.x = xMax
          break;
      }
    }
  }