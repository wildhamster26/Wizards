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

    cast(spellName) {
        switch(spellName){
            case "Expelliarmus":
            let Expelliarmus = new Spell(spellName, this.x, this.y, "red", this.direction, this.vx, this.vy, 5, 4, 20, 
            function(el){
                el.health -= 35;
                el.cast = null;
                setTimeout(function(){
                    el.cast = function cast(spellName) {
                        switch(spellName){
                            case "Expelliarmus":
                            let Expelliarmus = new Spell(spellName, this.x, this.y, "red", this.direction, this.vx, this.vy, 5, 4, 20, 
                            function(el){
                                el.health -= 35;
                                el.cast = null;
                                setTimeout(function(){
                                }, 1000);
                            });
                            this.spells.push(Expelliarmus);
                            break;         
                            case "Reducto":
                            let Reducto = new Spell(spellName, this.x, this.y, "yellow", this.direction, this.vx, this.vy, 10, 4, 20, 
                            function(el){
                                el.health -= 35;
                                
                            });
                            this.spells.push(Reducto);
                            break;            
                            case "Sectum-Sempra":
                            let SectumSempra = new Spell(spellName, this.x, this.y, "purple", this.direction, this.vx, this.vy, 1, 4, 20, 
                            function(el){
                                el.health -= 35;
                                
                            });
                            this.spells.push(SectumSempra);
                            break;            
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
                                
                            });
                            this.spells.push(Imperio);
                            break;            
                        }
                        
                    }
                }, 3000);
            });
            this.spells.push(Expelliarmus);
            break;         
            case "Reducto":
            let Reducto = new Spell(spellName, this.x, this.y, "yellow", this.direction, this.vx, this.vy, 10, 4, 20, 
            function(el){
                el.health -= 35;
                
            });
            this.spells.push(Reducto);
            break;            
            case "Sectum-Sempra":
            let SectumSempra = new Spell(spellName, this.x, this.y, "purple", this.direction, this.vx, this.vy, 1, 4, 20, 
            function(el){
                el.health -= 35;
                
            });
            this.spells.push(SectumSempra);
            break;            
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
                
            });
            this.spells.push(Imperio);
            break;            
        }
        
    }
}