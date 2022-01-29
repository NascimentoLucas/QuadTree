class QuadTree {
    constructor(_x , _y, _widht, _height){            
        this.x = _x;
        this.y = _y;
        this.width = _widht;
        this.height = _height;
        this.boids = Array()//quadtree
        
        this.hasLeaf = false;
        this.northwest = null;
        this.southwest = null;
        this.southeast = null;
        this.northeast = null;

        this.max_boids = 5;
    }

    IsInside(boid){
        if(boid.x > this.x 
            & boid.x < this.x + this.width)
            {
                if(boid.y > this.y 
                    & boid.y < this.y + this.height)
            {
                return true;
            }
        }
        return false;
    }

    AddToLeaf(b)
    {
        if(this.northwest.IsInside(b)){
            this.northwest.AddBoid(b);
            return;
        }

        if(this.southwest.IsInside(b)){
            this.southwest.AddBoid(b);
            return;
        }

        if(this.southeast.IsInside(b)){
            this.southeast.AddBoid(b);
            return;
        }

        if(this.northeast.IsInside(b)){
            this.northeast.AddBoid(b);
            return;
        }
    }

    Divide(boid){
        this.hasLeaf = true;

        const w = this.width / 2;
        const h = this.height / 2;
        console.log(h);
        let x = this.x;
        let y = this.y;

        this.northwest = new QuadTree(x,y, w, h);
        y += h;
        this.southwest = new QuadTree(x,y, w, h);
        x += w;
        this.southeast = new QuadTree(x,y, w, h);
        y -= h;
        this.northeast = new QuadTree(x,y, w, h);

        for (let i = 0; i < this.boids.length; i++) {
            const b = this.boids[i];
            this.AddToLeaf(b);
        }

        this.AddToLeaf(boid)

    }
    
    AddBoid(boid){
        if(this.boids.length >= this.max_boids){
            this.Divide(boid);
            return;
        }
        this.boids.push(boid);
    }
        
    UpdateBoids(){
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

    Update (ctx, color) {    
        ctx.beginPath();  
        ctx.strokeStyle = color; 
        ctx.fillStyle = color;        
        //ctx.fillText(this.id + '', posX, posY );  
        ctx.rect(this.x, this.y, 
            this.width, this.height); 
        ctx.stroke();

        if(this.hasLeaf){
            this.northwest.Update(ctx, 'yellow');
            this.southwest.Update(ctx, 'blue');
            this.southeast.Update(ctx, 'yellow');
            this.northeast.Update(ctx, 'blue');
        }
        else{
        this.UpdateBoids();
        }
    }
}