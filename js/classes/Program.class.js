import ColorPalette from "./ColorPalette.class.js";
import Pen from "./Pen.class.js";
import Slate from "./Slate.class.js";

export default class Program {
  constructor() {
    this.pen = new Pen("black", 1);
    this.slate = new Slate(this.pen);
    this.colorPalette = new ColorPalette();
  }

  start() {
    const $clearSlateButton = document.getElementById("tool-clear-canvas");
    const $colorPicker = document.getElementById("tool-color-picker");
    const $penColors = document.querySelectorAll(".pen-color");
    const $penSize = document.querySelectorAll(".pen-size");

    $clearSlateButton.addEventListener(
      "click",
      this.slate.clear.bind(this.slate)
    );
    $penColors.forEach((color) => {
      color.addEventListener("click", this.onClickPenColor.bind(this));
    });
    $penSize.forEach((size) => {
      size.addEventListener("click", this.onClickPenSize.bind(this));
    });
    $colorPicker.addEventListener("click", this.onClickPalette.bind(this));
    document.addEventListener(
      "color-palette:picked",
      this.onColorPicked.bind(this)
    );
  }

  onClickPalette() {
    const paletteCanvas = document.getElementById("color-palette");
    paletteCanvas.classList.toggle("hide");
  }

  onColorPicked() {
    const pickedColor = this.colorPalette.getPickedColor();
    const { red, green, blue } = pickedColor;
    this.pen.color = `rgb(${red}, ${green}, ${blue})`;
  }

  onClickPenColor(event) {
    this.pen.color = event.currentTarget.dataset.color;
  }

  onClickPenSize(event) {
    this.pen.size = event.currentTarget.dataset.size;
  }
}
