class UIControl {
  constructor() {
    this.is_to_paint = true;
    this.canvas = document.getElementById("canvas");
    this.slider = document.getElementById("numberSlider");
    this.sliderText = document.getElementById("numberSliderText");

    this.slider.oninput = function () {
      const slider = document.getElementById("numberSlider");
      const sliderText = document.getElementById("numberSliderText");
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
