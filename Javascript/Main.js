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

for (let i = 0; i < amount; i++) {
    const x = min_x + Math.floor(Math.random() * (map_widht)) 
    const y = min_x + Math.floor(Math.random() * (map_widht/2))   
    quadtree.AddBoid(new Boid(x , y, 5));
}




setInterval(Update, 10);

function Update(){    
    if(!lock)
    {            
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        quadtree.Update(ctx, 'cyan');        
    }    
}
