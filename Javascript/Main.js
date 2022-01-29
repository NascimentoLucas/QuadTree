var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '12px serif';

amount = 6;

min_x = 25;
map_widht = 500;

background = new QuadTree(min_x, min_x, 
    map_widht, map_widht);

quadtree = new QuadTree(min_x, min_x, 
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
return;
setInterval(function() {
    Update();
  }, 100);
}
