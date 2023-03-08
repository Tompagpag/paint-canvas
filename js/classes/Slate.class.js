export default class Slate {

  constructor(pen) {
    this._canvas = document.getElementById("slate");
    this._ctx = this._canvas.getContext("2d");
    this._pen = pen;
  }

  listenMouse() {
    this._canvas.addEventListener('mousedown', this.onMouseDown.bind(this))
    this._canvas.addEventListener('mouseup', this.onMouseUp.bind(this))
    this._canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this))
    this._canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
  }


  onMouseDown(e) {

  }

  onMouseUp(e) {

  }

  onMouseLeave(e) {

  }

  onMouseMove(e) {
    console.log(e);
    console.log(this._pen);
    this._ctx.beginPath();
    this._ctx.strokeStyle = this._pen.color;
    this._ctx.lineWidth = this._pen._size;
    this._ctx.moveTo(e.clientX, e.clientY);
    this._ctx.lineTo(e.clientX, e.clientY);
    this._ctx.stroke();
  }

  clear() {
    console.log("Bien dans la méthode clear de SLATE")
  }
}
