class QuadTree {
    constructor(_x , _y, _widht, _height){            
        this.x = _x;
        this.y = _y;
        this.width = _widht;
        this.height = _height;
        this.boids = Array()//quadtree
        this.leaf = Array();//boid
    }
        
    Update (ctx, color) {    
        ctx.beginPath();  
        ctx.strokeStyle = color; 
        ctx.fillStyle = color;        
        //ctx.fillText(this.id + '', posX, posY );  
        ctx.rect(this.x, this.y, 
            this.width, this.height); 
        ctx.stroke();


        for (let i = 0; i < this.boids.length; i++) {
            for (let j = i + 1; j < this.boids.length; j++) {
                const col = this.boids[i].Colision(this.boids[j]);
                if(col)
                break;
            }
        }

        for (let i = 0; i < this.boids.length; i++) {
            const boid = this.boids[i];
            boid.Update(ctx, 'black');
        }
    }
}