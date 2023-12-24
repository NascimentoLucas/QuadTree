let pause = false;
var canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", function (e) {
  pause = !pause;
});

var ctx = canvas.getContext("2d");
ctx.font = "12px serif";

current_mode = null;
min_x = 10;
map_widht = 2900;

count = 0;
total = 0;

amount = 500;

current_mode = new HorseMode(amount);
current_mode = new QuadTreeMode(amount);
setInterval(Update, 10);

function Update() {
  if (pause) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(min_x, min_x, map_widht, map_widht);
  ctx.stroke();

  var startTime = performance.now();
  current_mode.Update(ctx);
  var endTime = performance.now();
  total += endTime - startTime;
}
