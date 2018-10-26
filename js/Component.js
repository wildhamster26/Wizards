class Component {
    constructor(ctx, width, height, color ="purple", x, y, vx=0, vy=0, speed = 0) {
        this.ctx = ctx
        this.width = width;
        this.height = height;
        this.color = color
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.speed = speed;
        this.centerX = this.x + this.width/2
        this.centerY = this.y + this.height/2
    }
    draw() {
        this.ctx.save()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()
    }

    tickFrame() {
        this.tickCount++;
            if(this.tickCount > this.ticksPerFrame){
                this.tickCount = 0;
                if(this.frameIndex < 2)
                    this.frameIndex++;
                else
                    this.frameIndex = 0;
            }

    }

    update(opponent){
        this.x += this.vx*this.speed;
        this.y += this.vy*this.speed;
        if (this.x > this.ctx.canvas.width || this.x < 0 || this.y < 0 || this.y > this.ctx.canvas.height) this.width = 0;
        //If spell hits a player, it disappears
        if(checkCollisionSpell(this, opponent)){
            if (!!this.spellName === true){
                this.effect(opponent);
                this.width = 0;
            }
        };
    }
}