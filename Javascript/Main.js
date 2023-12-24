let pause = false;
const ui = new UIControl();
ui.canvas.addEventListener("mousedown", function (e) {
  pause = !pause;
});

min_x = 10;
map_widht = 2900;
amount = 5000;
total = 0;
count = 0;

horse_mode = true;
ChangeMode();

ui.total_boids.innerText = "Total Boids:" + amount;
ui.CreateButton("Change Mode", ChangeMode);
ui.CreateButton("Change Paint", ChangePaint);
CreateNew();
setInterval(Update, 10);

function CreateNew() {
  amount = 5000;
  total = 0;
  count = 0;
}

function Update() {
  if (pause) return;

  ui.ctx.clearRect(0, 0, ui.canvas.width, ui.canvas.height);
  ui.ctx.beginPath();
  ui.ctx.rect(min_x, min_x, map_widht, map_widht);
  ui.ctx.stroke();

  var startTime = performance.now();
  current_mode.Update(ui.ctx);
  var endTime = performance.now();
  total += endTime - startTime;
  count++;

  ui.frame_info.innerText = "Avg frame time: \n" + (total / count).toFixed(2);
}

function ChangePaint() {
  ui.is_to_paint = !ui.is_to_paint;
}

function ChangeMode() {
  pause = true;
  horse_mode = !horse_mode;
  if (horse_mode) {
    current_mode = new HorseMode(amount);
  } else {
    current_mode = new QuadTreeMode(amount);
  }
  CreateNew();
  pause = false;
}
