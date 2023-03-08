export default class Pen {

  constructor(color, size) {
    this._color = color;
    this._size = size;
  }

  set color(color) {
    this._color = color;
  }

  set size(size) {
    this._size = size;
  }

  // converProperties(context) {
  //   context.strokeStyle = this._color;
  //   context.lineWidth = this._size;
  // }
}
