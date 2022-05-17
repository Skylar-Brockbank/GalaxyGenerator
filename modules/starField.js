import radialGridUtilities from "./radialGrid.js";

export default class starField {
  constructor(qty) {
    this.scale = 1;
    this.radGrid = new radialGridUtilities();
    this.element = document.getElementById('screen');
    this.brush = this.element.getContext('2d');
    this.origin = {};
    this.stars = [];
    this.starQuantity = qty;
    this.colors = ['255,155,155', '255,175,175', '255,195,195', '255,215,215', '255,235,235', '255,255,255', '235,235,255', '215,215,255', '195,195,255', '175,175,255', '155,155,255'];
  }
  initializeCanvas = () => {
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('body').style.margin = '0';
    this.element.style.margin = '0';
    this.element.style.height = window.innerHeight;
    this.element.style.width = window.innerWidth;
    this.element.height = window.innerHeight;
    this.element.width = window.innerWidth;
    this.origin = { x: Math.round(this.element.width / 2), y: Math.round(this.element.height / 2) };
    this.trueOrigin = { x: Math.round(this.element.width / 2), y: Math.round(this.element.height / 2) };
  }
  initialize = () => {
    this.element.style.backgroundColor = 'rgb(20,0,35)';
    this.initializeCanvas();
  }
  createStars = () => {
    const variationConstant = 3;
    const scalingConstant = this.element.height / 100;
    const test = parseInt(this.starQuantity);
    const widthConstant = 7;
    const armConstant = 3;
    for (let k = 0; k < armConstant; k++) {
      for (let j = 0; j < widthConstant; j++) {
        for (let i = 0; i < test * (j / widthConstant); i++) {
          const size = Math.floor(Math.random() * scalingConstant * ((test - i) / test)) + 1;
          const x = i * scalingConstant + Math.floor(Math.random() * variationConstant + (j * 15) + ((360 / armConstant) * k));
          const y = i * scalingConstant + Math.floor(Math.random() * variationConstant * 2);
          const temp = Math.floor(Math.random() * 10);
          this.stars.push({ x: x, y: y, r: size, t: temp });
        }
      }
    }
  }
  clearAll = () => {
    this.brush.clearRect(0, 0, this.element.width, this.element.height);
  }
  drawStars = () => {
    const qty = this.stars.length;
    for (let i = 0; i < qty; i++) {
      this.drawSelf(this.stars[i]);
    }
  }

  drawSelf = (args) => {
    const rCo = this.radGrid.convertCoords(args.x, args.y);
    const oOff = { x: this.origin.x + rCo.dX, y: this.origin.y + rCo.dY };
    this.brush.fillStyle = 'rgb(' + this.colors[args.t] + ')';
    this.brush.beginPath();
    this.brush.arc(oOff.x*this.scale, oOff.y*this.scale, args.r, 0, Math.PI * 2, false);
    this.brush.fill();
  }
}
