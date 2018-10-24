class Spell extends Component {
    constructor(spellName, x, y, color, direction, vx, vy, speed, width, height){
        super(ctx);
        this.spellName = spellName;
        this.x = x;
        this.y = y;
        this.color = color;
        this.direction = direction;
        this.vx = vx;
        this.vy = vy;
        this.speed = speed;
        this.width = width;
        this.height = height;
    }
}