let lock = false;
var canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", function (e) {
  lock = !lock;
});

var ctx = canvas.getContext("2d");
ctx.font = "12px serif";

current_mode = null;
min_x = 10;
map_widht = 2900;

quadtree = new QuadTree(null, min_x, min_x, map_widht, map_widht);

count = 0;
total = 0;

boids = Array();

function Update() {
  if (lock) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(min_x, min_x, map_widht, map_widht);
  ctx.stroke();

  var startTime = performance.now();
  current_mode.Update(ctx, boids);
  var endTime = performance.now();
  total += endTime - startTime;
}

amount = 500;

current_mode = new HorseMode(boids, amount);
current_mode = new QuadTreeMode(boids, amount);
setInterval(Update, 10);
