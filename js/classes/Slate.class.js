// TODO: Undo option
export default class Slate {
  constructor(pen) {
    this.canvas = document.getElementById("slate");
    this.ctx = this.canvas.getContext("2d");
    this.location = { x: 0, y: 0 };
    this.isDrawing = false;
    this.pen = pen;

    this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
    this.canvas.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
  }

  onMouseDown(e) {
    // On peut dessiner sur l'ardoise.
    this.isDrawing = true;
    // Enregistrement de la position actuelle de la souris.
    this.getMouseLocation(e);
  }

  onMouseUp(e) {
    // On ne peut plus dessiner sur l'ardoise.
    this.isDrawing = false;
  }

  onMouseLeave(e) {
    // On ne peut plus dessiner sur l'ardoise.
    this.isDrawing = false;
  }

  onMouseMove(e) {
    if (this.isDrawing) {
      // Préparation de l'ardoise à l'exécution d'un dessin.
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.pen._color;
      this.ctx.lineWidth = this.pen._size;
      // Dessine un trait entre les précédentes coordonnées de la souris et les nouvelles.(moveTo, lineTo)
      this.ctx.moveTo(this.location.x, this.location.y);
      this.getMouseLocation(e);
      this.ctx.lineTo(this.location.x, this.location.y);
      // Applique les changements dans le canvas.
      this.ctx.stroke();
    }
  }

  getMouseLocation(event) {
    let rect = this.canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    this.location = { x, y };
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
