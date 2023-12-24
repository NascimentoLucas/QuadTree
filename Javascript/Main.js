let pause = false;
const ui = new UIControl();
ui.canvas.addEventListener("mousedown", function (e) {
  pause = !pause;
});

const left_padding = 10;
const map_widht = 2900;
amount = 1000;
total = 0;
count = 0;

ui.CreateButton("Update Amount", ChangeAmount);
ui.CreateButton("Change Mode", ChangeMode);
ui.CreateButton("Change Paint", ChangePaint);

horse_mode = true;
ChangeMode();
setInterval(Update, 10);

function CreateNew() {
  total = 0;
  count = 0;

  ui.total_boids.innerText = "Total Boids:" + amount;
  if (horse_mode) {
    current_mode = new HorseMode(amount);
  } else {
    current_mode = new QuadTreeMode(amount);
  }
}

function Update() {
  if (pause) return;

  ui.ctx.clearRect(0, 0, ui.canvas.width, ui.canvas.height);
  ui.ctx.beginPath();
  ui.ctx.rect(left_padding, left_padding, map_widht, map_widht);
  ui.ctx.stroke();

  var startTime = performance.now();
  current_mode.Update(ui.ctx);
  var endTime = performance.now();
  total += endTime - startTime;
  count++;

  ui.frame_info.innerText = "Avg frame time: \n" + (total / count).toFixed(2);
}

function ChangeAmount() {
  amount = ui.slider.value;
  CreateNew();
}

function ChangePaint() {
  ui.is_to_paint = !ui.is_to_paint;
}

function ChangeMode() {
  pause = true;
  horse_mode = !horse_mode;
  CreateNew();
  pause = false;
}
