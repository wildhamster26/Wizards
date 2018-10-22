class Component {
    constructor(ctx, size, color,x,y) {
      this.ctx = ctx
      this.size = size
      this.color = color
      this.x = x
      this.y = y
    }
    draw() {
      this.ctx.fillStyle = this.color
      this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }
  }