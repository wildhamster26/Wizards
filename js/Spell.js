class Spell extends Component {
    constructor(spellName, x, y, color, direction, vx, vy, speed, width, height, imageSrc, effect){
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
        this.effect = effect;
        this.image = new Image();
        this.image.src = imageSrc;
        this.frameIndex = 0;
        this.frameIndexY = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 5;
        this.centerX = this.x + this.width/2
        this.centerY = this.y + this.height/2
    }
    
    setFrameIndexY(){
        if (this.vx === -1)
            this.frameIndexY = 50;
        else if (this.vx === 1)
            this.frameIndexY = 100;
        else if (this.vy === 1)
            this.frameIndexY = 0;
        else
            this.frameIndexY = 150;
    }

    setSpellCenter(){
        this.centerX = this.x + this.width/2
        this.centerY = this.y + this.height/2
    }
    
    draw(){
        this.setFrameIndexY();
        super.tickFrame();
        this.ctx.drawImage(this.image, this.frameIndex*50, this.frameIndexY, 50, 50, this.x, this.y, 32, 32);
    }

}