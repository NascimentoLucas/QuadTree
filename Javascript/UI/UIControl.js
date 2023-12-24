class UIControl {
  constructor() {
    this.is_to_paint = true;
    this.canvas = document.getElementById("canvas");
    this.slider_total = document.getElementById("numberSlider");
    this.slider_total_text = document.getElementById("numberSliderText");

    this.slider_total.oninput = function () {
      const slider = document.getElementById("numberSlider");
      const sliderText = document.getElementById("numberSliderText");
      sliderText.innerText = "New Total Boids: " + slider.value;
    };

    this.slider_speed = document.getElementById("speedSlider");
    this.slider_speed_text = document.getElementById("speedSliderText");

    this.slider_speed.oninput = function () {
      const slider = document.getElementById("speedSlider");
      const sliderText = document.getElementById("speedSliderText");
      sliderText.innerText = "New Total Boids: " + slider.value;
    };

    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "12px serif";

    this.info_panel = document.getElementById("left-side");
    this.CreateText();
  }

  CreateButton(text, action) {
    var newButton = document.createElement("button");
    newButton.innerText = text;
    newButton.onclick = action;

    this.info_panel.appendChild(newButton);
  }

  CreateText() {
    this.frame_info = document.createElement("p");
    this.info_panel.appendChild(this.frame_info);
  }
}
