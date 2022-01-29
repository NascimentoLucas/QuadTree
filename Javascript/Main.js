var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '12px serif';



min_x = 25;
map_widht = 500;

background = new QuadTree(min_x, min_x, 
    map_widht, map_widht);

quadtree = new QuadTree(50, 50, 100, 100);
for (let i = 0; i < 10; i++) {
    
quadtree.boids.push(new Boid(50,50, 5));
}

Update();

function Update(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
background.Update(ctx, 'black');
quadtree.Update(ctx, 'green');

setInterval(function() {
    Update();
  }, 100);
}
