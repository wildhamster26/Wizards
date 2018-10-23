class Player extends Component {
    constructor(ctx, size, color, speed, x, y) {
        super(ctx, size, color, x, y);
        this.score = 0
        this.speed = speed;
        this.direction = null;
        this.spells = [];
        this.vx = 0;
        this.vy = 0;
    }
    update() {
        switch (this.direction) {
            case "N":
                this.y -= this.speed;
                break;
            // case "NE":
            //     this.y -= this.speed;
            //     this.x += this.speed;
            //     break;
            case "E":
                this.x += this.speed
                break;
            // case "SE":
            //     this.y += this.speed;
            //     this.x += this.speed;
            //     break;
            case "S":
                this.y += this.speed
                break;
            // case "SW":
            //     this.y += this.speed;
            //     this.x -= this.speed;
            //     break;
            case "W":
                this.x -= this.speed
                break;
            // case "NW":
            //     this.y -= this.speed;
            //     this.x -= this.speed;
            //     break;
        }
        for (let i = 0; i < this.spells.length; i++) {
            this.spells[i].update();
        }
    }

    draw() {
        super.draw()
        for (let i = 0; i < this.spells.length; i++) {
            this.spells[i].draw();
        }
    }

    cast(spellName) {
        // switch(spellName){
        //     case "Expelliarmus":
                let spellType = new Spell(spellName, this.x, this.y, "red", this.direction, -2, -2)
                this.spells.push(spellType);
        // }

        
    }
}