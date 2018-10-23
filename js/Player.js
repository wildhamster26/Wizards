class Player extends Component {
    constructor(ctx, size, color, speed, x, y) {
      super(ctx);
      this.color = color;
      this.size = size;
      this.score = 0
      this.speed = speed;
      this.movement = null;
      this.rotation = null;
      this.x = x;
      this.y = y;
      this.direction = null;
    }
    update() {
      switch (this.direction) {
        case "N":
          this.y -= this.speed;
          break;
          case "NE":
          this.y -= this.speed;
          this.x += this.speed;
          break;
        case "E":
          this.x += this.speed
          break;
          case "SE":
          this.y += this.speed;
          this.x += this.speed;
          break;
        case "S":
          this.y += this.speed
          break;
          case "SW":
          this.y += this.speed;
          this.x -= this.speed;
          break;
        case "W":
          this.x -= this.speed
          break;
          case "NW":
          this.y -= this.speed;
          this.x -= this.speed;
          break;
      }
    }
  }