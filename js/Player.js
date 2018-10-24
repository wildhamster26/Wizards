class Player extends Component {
    constructor(ctx, size, color, speed, x, y, health) {
        super(ctx, size, color, x, y);
        this.score = 0
        this.speed = speed;
        this.direction = null;
        this.spells = [];
        this.vx = 0;
        this.vy = 0;
        this.opponent = null;
        this.health = health;
        this.paralyze = false;
    }
    
    update(paralyze) {
        //I'M HERE! NEED TO GET THE PARALYZE TO WORK AND IMMOBILIZE THE PARALYZED PLAYER
        if(paralyze) return;
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

    draw() {
        super.draw()
        for (let i = 0; i < this.spells.length; i++) {
            this.spells[i].draw();
        }
    }

    //BEGINNING OF THE CAST SPELL METHOD
    cast(spellName) {
        switch(spellName){
            case "Expelliarmus":
            let Expelliarmus = new Spell(spellName, this.x, this.y, "red", this.direction, this.vx, this.vy, 10, 4, 20, 
            function(el){
                el.health -= 35;
                el.cast = null;
                setTimeout(function(){
                    el.cast = function cast(spellName) {
                        switch(spellName){
                            case "Avada-kedavra":
                            let AvadaKedavra = new Spell(spellName, this.x, this.y, "chartreuse", this.direction, this.vx, this.vy, 2, 4, 20, 
                            function(el){
                                el.health -= 35;
                                
                            });
                            this.spells.push(AvadaKedavra);
                            break;            
                            case "Crucio":
                            let Crucio = new Spell(spellName, this.x, this.y, "black", this.direction, this.vx, this.vy, 5, 4, 20, 
                            function(el){
                                el.health -= 35;
                                
                            });
                            this.spells.push(Crucio);
                            break;            
                            case "Imperio":
                            let Imperio = new Spell(spellName, this.x, this.y, "green", this.direction, this.vx, this.vy, 5, 4, 20, 
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
                            },3000)});
                            this.spells.push(Imperio);
                            break;                   
                        }
                    }
                }, 3000);
            });
            this.spells.push(Expelliarmus);
            break;         
            case "Stupefy":
            let Stupefy = new Spell(spellName, this.x, this.y, "yellow", this.direction, this.vx, this.vy, 6, 4, 20, 
            function(el){
                el.health -= 35;
                el.paralyze = true;
            });
            this.spells.push(Stupefy);
            break;            
            case "Sectum-Sempra":
            let SectumSempra = new Spell(spellName, this.x, this.y, "purple", this.direction, this.vx, this.vy, 4, 4, 20, 
            function(el){
                el.health -= 50;
            });
            this.spells.push(SectumSempra);
            break;            
            case "Avada-kedavra":
            let AvadaKedavra = new Spell(spellName, this.x, this.y, "chartreuse", this.direction, this.vx, this.vy, 3, 4, 20, 
            function(el){
                el.health -= 0;
            });
            this.spells.push(AvadaKedavra);
            break;            
            case "Crucio":
            let Crucio = new Spell(spellName, this.x, this.y, "black", this.direction, this.vx, this.vy, 5, 4, 20, 
            function(el){
                el.health -= 50;
                el.paralyze = true;
            });
            this.spells.push(Crucio);
            break;            
            case "Imperio":
            let Imperio = new Spell(spellName, this.x, this.y, "green", this.direction, this.vx, this.vy, 5, 4, 20, 
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
            },3000)});
            this.spells.push(Imperio);
            break;            
             
        }
    }
}