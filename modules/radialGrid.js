export default class radialGridUtilities{
  convertCoords(x,y){
    const yMod = (x%360<=90||x%360>=270)?1:-1;
    const A = Math.sin(this.degreesToRadians(x))*y;
    const B = (((y**2) - (A**2))**0.5)*yMod;
    return {dX:A,dY:B};
  }
  radiansToDegrees(radians){
    return radians*(360/(Math.PI*2));
  }
  degreesToRadians(degrees){
    return degrees/360*(Math.PI*2);
  }
}