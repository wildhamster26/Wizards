class Component {
    constructor(ctx, size = 10, color ="purple", x, y, vx=0, vy=0, speed = 0) {
        this.ctx = ctx
        this.size = size
        this.color = color
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.speed = speed;
    }
    draw() {
        this.ctx.save()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
        this.ctx.restore()
    }
    update(opponent){
        this.x += this.vx*this.speed;
        this.y += this.vy*this.speed;
        if(checkCollision(this, opponent)){
            if (!!this.spellName === true){
                console.log(this.effect);
                this.effect(opponent);
            }
        };
    }
}