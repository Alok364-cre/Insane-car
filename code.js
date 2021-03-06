var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8d140521-9e5f-4338-a94d-cac9e7eb4c44","086ce18a-717a-4a54-85f1-70ec112ce7a2","68bcd141-fa56-4625-9eed-8eec9d9d62e4","560fb38b-ac3b-4432-af6b-8b91cacad4d5","deb91f07-78fa-491e-9fca-5c14e9a18ca3"],"propsByKey":{"8d140521-9e5f-4338-a94d-cac9e7eb4c44":{"name":"car_black_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":20,"y":37},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:47:28 UTC","pngLastModified":"2021-01-05 19:46:44 UTC","version":"AHobnqqn4NHrAEqu1MfOgEAJVoG8YdAn","sourceUrl":null,"sourceSize":{"x":20,"y":37},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/8d140521-9e5f-4338-a94d-cac9e7eb4c44.png"},"086ce18a-717a-4a54-85f1-70ec112ce7a2":{"name":"car_green_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":20,"y":37},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:47:05 UTC","pngLastModified":"2021-01-05 19:47:05 UTC","version":"Zrx8Rpyqeeg8xh4vU.OZlRUbi9ojGY9E","sourceUrl":null,"sourceSize":{"x":20,"y":37},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/086ce18a-717a-4a54-85f1-70ec112ce7a2.png"},"68bcd141-fa56-4625-9eed-8eec9d9d62e4":{"name":"car_red_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":20,"y":37},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:46:46 UTC","pngLastModified":"2021-01-05 19:46:25 UTC","version":"cTbip6c32Gqt93cwhgIoXHDdFutCh9OO","sourceUrl":null,"sourceSize":{"x":20,"y":37},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/68bcd141-fa56-4625-9eed-8eec9d9d62e4.png"},"560fb38b-ac3b-4432-af6b-8b91cacad4d5":{"name":"kidportrait_02_1","categories":["faces"],"frameCount":1,"frameSize":{"x":24,"y":33},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:03:03 UTC","pngLastModified":"2021-01-05 19:03:07 UTC","version":"a2khR79aBgssrrNcxLtC.0WHk3VWAJ6N","sourceUrl":null,"sourceSize":{"x":24,"y":33},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/560fb38b-ac3b-4432-af6b-8b91cacad4d5.png"},"deb91f07-78fa-491e-9fca-5c14e9a18ca3":{"name":"car_blue_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":20,"y":36},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:46:28 UTC","pngLastModified":"2021-01-05 19:47:32 UTC","version":"IvjBUg0cnnWbg7RDiYZdeuXZ_OD0LWGb","sourceUrl":null,"sourceSize":{"x":20,"y":36},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/deb91f07-78fa-491e-9fca-5c14e9a18ca3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,100,420,3);
  boundary2 = createSprite(190,270,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("kidportrait_02_1");
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car_black_1") ;
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("car_green_1");
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car_red_1");
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car_blue_1");
  
 
//add the velocity to make the car move.
car1.velocityY=8;
car2.velocityY=8;
car3.velocityY=-8;
car4.velocityY=-8;

function draw() {
   background("white");
  fill("red");
  text("Lives:" + life,250,90);
  strokeWeight(0);
  fill("lightblue");
  rect(0,100,52,170);
  fill("yellow");
  rect(350,100,52,170);
  
// create bounceoff function to make the car bounceoff the boundaries
createEdgeSprites();
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
if (keyDown("right")) {
  sam.x=sam.x+2;
}

if (keyDown("left")) {
  sam.x=sam.x-2;
}



//Add the condition to reduce the life of sam if it touches the car.
if(
  sam.isTouching(car1)||
 sam.isTouching(car2)||
 sam.isTouching(car3)||
 sam.isTouching(car4))
{
  sam.x = 20;
sam.y = 190;
life = life + 1; }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
