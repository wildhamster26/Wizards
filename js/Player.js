class Player extends Component {
    constructor(ctx, width, height, color, x, y, health, vx, vy, speed, imageSrc) {
        super(ctx, width, height, color, x, y);
        // this.width = width;
        // this.height = height;
        this.score = 0
        this.speed = speed;
        this.direction = null;
        this.spells = [];
        this.opponent = null;
        this.health = health;
        this.vx = vx;
        this.vy = vy;
        this.paralyze = false;
        this.image = new Image();
        this.image.src = imageSrc;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 5;
    }
    
    update() {
        if(this.paralyze) return;
        switch (this.direction) {
            case "N":
                this.y -= this.speed;
                this.tickCount++;
                break;
            case "NE":
                this.y -= this.speed;
                this.x += this.speed;
                this.tickCount++;
                break;
            case "E":
                this.x += this.speed;
                this.tickCount++;
                break;
            case "SE":
                this.y += this.speed;
                this.x += this.speed;
                this.tickCount++;
                break;
            case "S":
                this.y += this.speed;
                this.tickCount++;
                break;
            case "SW":
                this.y += this.speed;
                this.x -= this.speed;
                this.tickCount++;
                break;
            case "W":
                this.x -= this.speed;
                this.tickCount++;
                break;
            case "NW":
                this.y -= this.speed;
                this.x -= this.speed;
                this.tickCount++;
                break;
        }
        this.x = Math.max(0, this.x);
        this.x = Math.min(this.ctx.canvas.width-this.width, this.x);
        this.y = Math.max(0, this.y);
        this.y = Math.min(this.ctx.canvas.height-this.height, this.y);
        for (let i = this.spells.length-1; i >= 0; i--) {
            this.spells[i].update(this.opponent);
            if (this.spells[i].width === 0 ) {
                this.spells.splice(i,1);
            } 
        }
    }

    draw() {
        this.ctx.drawImage(this.image, 0, 0, 32, 32, this.x, this.y, 32, 32);
        for (let i = 0; i < this.spells.length; i++) {
            this.spells[i].draw();
        }
    }

    //BEGINNING OF THE CAST SPELL METHOD
    cast(spellName) {
        switch(spellName){
            case "Expelliarmus":
            let Expelliarmus = new Spell(spellName, this.x, this.y, "red", this.direction, this.vx, this.vy, 10, 30, 10, 
            function(el){
                el.health -= 35;
                el.cast = null;
                setTimeout(function(){
                    el.cast = function cast(spellName) {
                        switch(spellName){
                            case "Avada-kedavra":
                            let AvadaKedavra = new Spell(spellName, this.x, this.y, "chartreuse", this.direction, this.vx, this.vy, 2, 4, 4, 
                            function(el){
                                el.health = -1;
                                
                            });
                            if (this.spells.length < 3) this.spells.push(AvadaKedavra);
                            break;            
                            case "Crucio":
                            let Crucio = new Spell(spellName, this.x, this.y, "black", this.direction, this.vx, this.vy, 5, 10, 20, 
                            function(el){
                                el.health -= 35;
                                el.paralyze = true;
                                setTimeout(function(){
                                    el.paralyze = false;
                                }, 2000);
                            });
                            if (this.spells.length < 3) this.spells.push(Crucio);
                            break;            
                            case "Imperio":
                            let Imperio = new Spell(spellName, this.x, this.y, "green", this.direction, this.vx, this.vy, 5, 10, 10, 
                                function(el){
                                    el.health -= 35;
                                    el.update = function(){
                                        (this.x < this.ctx.canvas.width/2)? this.x++ : this.x--;
                                        (this.y < this.ctx.canvas.height/2)? this.y++ : this.y--;
                                    }
                                    setTimeout(function(){
                                        el.update = function(paralyze) {
                                            if(this.paralyze) return false;
                                            switch (this.direction) {
                                                case "N":
                                                    this.y -= this.speed;
                                                    break;
                                                case "NE":
                                                    this.y -= this.speed;
                                                    this.x += this.speed;
                                                    break;
                                                case "E":
                                                    this.x += this.speed;
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
                                    for (let i = 0; i < this.spells.length; i++) {
                                        this.spells[i].update(this.opponent);
                                    }
                                    }
                            },3000)});
                            if (this.spells.length < 3) this.spells.push(Imperio);
                            break;                   
                        }
                    }
                }, 4000);
            });
            if (this.spells.length < 3) this.spells.push(Expelliarmus);
            break;         
            case "Stupefy":
            let Stupefy = new Spell(spellName, this.x, this.y, "yellow", this.direction, this.vx, this.vy, 10, 8, 20, 
            function(el){
                el.health -= 35;
                el.paralyze = true;
                setTimeout(function(){
                    el.paralyze = false;
                }, 2000);
            });
            if (this.spells.length < 3) this.spells.push(Stupefy);
            break;            
            case "Sectum-Sempra":
            let SectumSempra = new Spell(spellName, this.x, this.y, "purple", this.direction, this.vx, this.vy, 8, 20, 20, 
            function(el){
                el.health -= 50;
            });
            if (this.spells.length < 3) this.spells.push(SectumSempra);
            break;            
            case "Avada-kedavra":
            let AvadaKedavra = new Spell(spellName, this.x, this.y, "chartreuse", this.direction, this.vx, this.vy, 3, 4, 4, 
            function(el){
                el.health = -1;
            });
            if (this.spells.length < 3) this.spells.push(AvadaKedavra);
            break;            
            case "Crucio":
            let Crucio = new Spell(spellName, this.x, this.y, "black", this.direction, this.vx, this.vy, 5, 10, 20, 
            function(el){
                el.health -= 50;
                el.paralyze = true;
                setTimeout(function(){
                    el.paralyze = false;
                }, 2000);
            });
            if (this.spells.length < 3) this.spells.push(Crucio);
            break;            
            case "Imperio":
            let Imperio = new Spell(spellName, this.x, this.y, "green", this.direction, this.vx, this.vy, 5, 10, 10, 
            function(el){
                el.health -= 35;
                el.update = function(){
                    (this.x < this.ctx.canvas.width/2)? this.x++ : this.x--;
                    (this.y < this.ctx.canvas.height/2)? this.y++ : this.y--;
                }
                setTimeout(function(){
                    el.update = function(paralyze) {
                        if(paralyze) return false;
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
                        for (let i = 0; i < this.spells.length; i++) {
                            this.spells[i].update(this.opponent);
                        }
                    }
            },2000)});
            if (this.spells.length < 3) this.spells.push(Imperio);
            break;            
        }
    }
}