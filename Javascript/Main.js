let lock = false;
var canvas = document.getElementById('canvas');
canvas.addEventListener('mousedown', function(e) {
    lock= !lock;
})
var ctx = canvas.getContext('2d');
ctx.font = '12px serif';

amount = 5000;

min_x = 10;
map_widht = 2900;

quadtree = new QuadTree(null, min_x, min_x, 
    map_widht, map_widht);
boids = Array();

count = 0;
total=0;

function Update(){    
    if(!lock)
    {            
        var startTime = performance.now()
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        quadtree.Update(ctx, 'cyan'); 
        var endTime = performance.now()

        count++;
        total +=endTime - startTime
        console.log(`${total/count}`)       
    }    
}

function QuadTreeMethod(){

    for (let i = 0; i < amount; i++) {
        const x = min_x + Math.floor(Math.random() * (map_widht)) 
        const y = min_x + Math.floor(Math.random() * (map_widht/2))   
        quadtree.AddBoid(new Boid(x , y, 5));
    }

    setInterval(Update, 10);   
}

function HorseUpdate(){
    if(!lock)
    {            
        var startTime = performance.now()
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
ctx.rect(min_x, min_x, map_widht, map_widht);
ctx.stroke();
        for (let i = 0; i < boids.length; i++) 
        {
            const boid = boids[i];

            for (let j = i + 1; j < this.boids.length; j++) 
            {
                const col = boid.Colision(this.boids[j]);
                if(col)
                    break;
            }

            boid.Update(ctx, 'black');
        }
        var endTime = performance.now()

        count++;
        total +=endTime - startTime
        console.log(`${total/count}`);
    }
}

function HorseMode(){
    for (let i = 0; i < amount; i++) {
        const x = min_x + Math.floor(Math.random() * (map_widht)) 
        const y = min_x + Math.floor(Math.random() * (map_widht/2))   
        boids.push(new Boid(x , y, 5));
    }

    
    setInterval(HorseUpdate, 10);
}

//HorseMode();
QuadTreeMethod();