class QuadTree {
    constructor(_root, _x , _y, _widht, _height){      
        this.root = _root;      
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
        if(boid.x >= this.x 
            & boid.x <= this.x + this.width)
            {
                if(boid.y >= this.y 
                    & boid.y <= this.y + this.height)
            {
                return true;
            }
        }
        return false;
    }

    AddFromLeaf(boid){
        if(!this.AddToLeaf(boid)){
            if(this.root != null)
            this.root.AddFromLeaf(boid);
        }
    }

    AddToLeaf(b)
    {
        if(this.northwest.IsInside(b)){
            this.northwest.AddBoid(b);
            return true;
        }

        if(this.southwest.IsInside(b)){
            this.southwest.AddBoid(b);
            return true;
        }

        if(this.southeast.IsInside(b)){
            this.southeast.AddBoid(b);
            return true;
        }

        if(this.northeast.IsInside(b)){
            this.northeast.AddBoid(b);
            return true;
        }
        
        return false;
    }

    Divide(boid){
        this.hasLeaf = true;

        const w = this.width / 2;
        const h = this.height / 2;
        let x = this.x;
        let y = this.y;

        this.northwest = new QuadTree(this, x, y, w, h);
        y += h;
        this.southwest = new QuadTree(this, x, y, w, h);
        x += w;
        this.southeast = new QuadTree(this, x, y, w, h);
        y -= h;
        this.northeast = new QuadTree(this, x, y, w, h);

        for (let i = 0; i < this.boids.length; i++) {
            const b = this.boids[i];
            this.AddToLeaf(b);
        }

        this.AddToLeaf(boid)

    }
    
    AddBoid(boid){
        if(!this.hasLeaf){
            if(this.boids.length >= this.max_boids){           
                this.Divide(boid);
                return;
            }
            this.boids.push(boid);
        }
        else{
            this.AddToLeaf(boid);
        }
    }
        
    UpdateBoids(color){

        if(this.root != null){
            for (let i = this.boids.length - 1; 
                i >=0 ; i--) 
            {
                const boid = this.boids[i];
                if(!this.IsInside(boid)){
                    this.root.AddFromLeaf(boid);
                    this.boids.splice(i, 1);
                }
            }
        }

        for (let i = 0; i < this.boids.length; i++) 
        {
            const boid = this.boids[i];

            for (let j = i + 1; j < this.boids.length; j++) 
            {
                const col = boid.Colision(this.boids[j]);
                if(col)
                    break;
            }

            boid.Update(ctx, color);
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
            this.northwest.Update(ctx, 'red');
            this.southwest.Update(ctx, 'green');
            this.southeast.Update(ctx, 'blue');
            this.northeast.Update(ctx, 'yellow');
        }
        else{
            this.UpdateBoids(color);
        }
    }
}