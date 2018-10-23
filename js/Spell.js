class Spell extends Component {
    constructor(spellName, x, y, color, direction, vx, vy, speed){
        super(ctx);
        this.spellName = spellName;
        this.x = x;
        this.y = y;
        this.color = color;
        this.direction = direction;
        this.vx = vx;
        this.vy = vy;
        this.speed = speed;
    }
}