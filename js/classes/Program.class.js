import ColorPalette from "./ColorPalette.class.js";
import Pen from "./Pen.class.js";
import Slate from "./Slate.class.js";

export default class Program {
  constructor() {
    this._pen = new Pen("black", 1);
    this._slate = new Slate(this._pen);
  }

  start() {
    const $clearSlateButton = document.querySelector("#tool-clear-canvas");
    const $colorPicker = document.querySelector("#tool-color-picker");
    const $penColors = document.querySelectorAll(".pen-color");
    const $penSize = document.querySelectorAll(".pen-size");

    $clearSlateButton.addEventListener("click", this._slate.clear);
    $penColors.forEach((color) => {
      color.addEventListener("click", this.onClickPenColor.bind(this));
    });
    $penSize.forEach((size) => {
      size.addEventListener("click", this.onClickPenSize.bind(this));
    });
    $colorPicker.addEventListener("click", () => {
      const paletteCanvas = document.querySelector("#color-palette");
      paletteCanvas.classList.toggle("hide");
      new ColorPalette();
      // ...
    });
    this._slate.listenMouse();
  }

  onClickPenColor(event) {
    this._pen.color = event.currentTarget.dataset.color;
  }

  onClickPenSize(event) {
    this._pen.size = event.currentTarget.dataset.size;
  }
}
