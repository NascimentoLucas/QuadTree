var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '12px serif';

amount = 15;

min_x = 25;
map_widht = 500;

background = new QuadTree(null, min_x, min_x, 
    map_widht*1.01, map_widht *1.01);

quadtree = new QuadTree(null, min_x, min_x, 
    map_widht, map_widht);

for (let i = 0; i < amount; i++) {
    const x = min_x + Math.floor(Math.random() * map_widht)
    quadtree.AddBoid(new Boid(x , 50, 5));
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
