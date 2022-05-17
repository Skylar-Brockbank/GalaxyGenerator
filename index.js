import starField from "./modules/starField.js";


const space = new starField(40);


space.initialize();
space.createStars();
space.drawStars();



//scroll scaling
document.addEventListener('wheel', function(e) {
  // e.preventDefault();
  const priorOrigin = space.origin;
  if(e.deltaY<0){
    space.scale=space.scale+1;
    // space.origin.x = space.origin.x-(space.trueOrigin.x-(space.trueOrigin.x*((space.scale-1)/space.scale)));
    //   space.origin.y = space.origin.y-(space.trueOrigin.y-(space.trueOrigin.y*((space.scale-1)/space.scale)));
    space.origin.x = space.origin.x*(space.scale-1)/space.scale;
    //space.scale*distance between origin and center of screen
    space.origin.y = space.origin.y*(space.scale-1)/space.scale;
  }else{
    if(space.scale>1){
      space.scale--;
      // space.origin.x = space.origin.x+(space.trueOrigin.x*(space.scale-1));
      // space.origin.y = space.origin.y+(space.trueOrigin.y*(space.scale-1));
      space.origin.x = space.origin.x*((space.scale+1)/(space.scale));
      space.origin.y = space.origin.y*((space.scale+1)/(space.scale));
    }
  }
  space.clearAll();
  space.drawStars();
});

document.addEventListener('keydown', e=>{
  const movementConstant = 1;
  if(e.code === 'ArrowRight'){
    space.origin.x -= movementConstant;
  }else if(e.code === 'ArrowLeft'){
    space.origin.x+= movementConstant;
  }else if(e.code === 'ArrowUp'){
    space.origin.y+=movementConstant;
  }else if(e.code === 'ArrowDown'){
    space.origin.y-=movementConstant;
  }
  space.clearAll();
  space.drawStars();
})