//************************************************************************************
//DC ENABLER - POLITE LOAD
//************************************************************************************
// If true, start function. If false, listen for INIT.
window.onload = function() {
    //setupDom();
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}


function enablerInitHandler() {
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
      }
}

//The following code out of the enablerInitHandler function:

function pageLoadedHandler() {
    addListeners();
     if (Enabler.isVisible()) {
        adVisibilityHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
      }
}

//The following code out of the enablerInitHandler function:


function adVisibilityHandler() {
    document.getElementById("banner").style.visibility = "visible";
  
    animation1();
    //transition();
}

//**********************
//Set up DOM
//**********************


//*************
//listener
//************
function addListeners(){
       document.getElementById("globalCTA").addEventListener('click', bgExitHandler, false);
    
}



function bgExitHandler(e){
    Enabler.exitOverride('Background Exit', 'http://www.bestbuy.com/site/turtle-beach-ear-force-px24-over-the-ear-gaming-headset-black/9541008.p?id=1219704411471&skuId=9541008');
}

function animation1(){
    Enabler.startTimer('Animation Timer');
    
    TweenLite.to(soldier, .3, {left:65, ease: Sine.easeIn});
    TweenLite.to(copy1, .3, {left:-10, ease:Sine.easeIn});
    TweenLite.to(soldier, 2, {left:5, ease: Sine.easeIn, delay:.3});
    TweenLite.to(copy1, 2, {left:30, ease:Sine.easeIn, delay:.3});
    TweenLite.to(soldier, .3, {left:-300, ease: Sine.easeOut, delay:2.3});
    TweenLite.to(copy1, .3, {left:300, ease:Sine.easeIn, delay:2.3, onComplete:animation2});
    //TweenLite.delayedCall(3.5, animation2);
}

function animation2(){
    TweenLite.to(zombie, .3, {left:65, ease: Sine.easeIn});
    TweenLite.to(copy2, .3, {left:-15, ease:Sine.easeIn});
    TweenLite.to(zombie, 2, {left:5, ease: Sine.easeIn, delay:.3});
    TweenLite.to(copy2, 2, {left:20, ease:Sine.easeIn, delay:.3});
    TweenLite.to(zombie, .3, {left:-300, ease: Sine.easeOut, delay:2.3});
    TweenLite.to(copy2, .3, {left:300, ease:Sine.easeIn, delay:2.3, onComplete:animation3});
}

function animation3(){
    TweenLite.to(clown, .3, {left:30, ease: Sine.easeIn});
    TweenLite.to(copy3, .3, {left:0, ease:Sine.easeIn});
    TweenLite.to(clown, 2, {left:-30, ease: Sine.easeIn, delay:.3});
    TweenLite.to(copy3, 2, {left:30, ease:Sine.easeIn, delay:.3});
    TweenLite.to(clown, .3, {left:-300, ease: Sine.easeOut, delay:2.3});
    TweenLite.to(copy3, .3, {left:300, ease:Sine.easeIn, delay:2.3, onComplete:transition});
    
    
}


function transition(){
    TweenLite.to(strobeEffect, .1, {opacity:1, ease:Sine.easeIn});
     TweenLite.to(strobeEffect, .1, {opacity:0, ease:Sine.easeout, delay:.1, onComplete:animation4});
    /*TweenLite.to(strobeEffect, .1, {opacity:1, ease:Sine.easeIn, delay:.2});
    TweenLite.to(strobeEffect, .1, {opacity:0, ease:Sine.easeOut, delay:.3, onComplete:animation4});*/
    
   TweenLite.to(bg1,.1,{opacity:0, ease:Sine.easeOut});
   
    TweenLite.to(finalFrames, .2, {opacity:1, ease: Sine.easeIn, delay:.1});
    
    
}

function animation4(){
    
    TweenLite.to([headphone, control,compatible], .5, {opacity:1, ease: Sine.easeIn});
    TweenLite.to(circles, .5, {opacity:1, ease: Sine.easeIn, delay:.8});
    TweenLite.to(superHuman, .5,{opacity:1, ease:Sine.easeIn, delay:1});
    TweenLite.to(circle1, .8, {rotation:360, ease: Sine.easeIn, delay:1.3});
    TweenLite.to(circle2, .8, {rotation:-360, ease: Sine.easeIn, delay:1.5, onComplete:animation5});
    TweenLite.to(px, .5, {opacity:1, ease:Sine.easeIn, delay:1.2}); 
    //TweenLite.to(compatible, .5, {opacity:1, ease:Sine.easeIn, delay:1.3});
    TweenLite.to(divider, 1.5, {opacity:1, ease: Sine.easeIn, delay:.8});
    TweenLite.to(divider, 2, {width:295, ease: Sine.easeIn, delay:1.2});
    
}

function animation5(){
    TweenLite.to([control,smallTriangle], .5,{opacity:0, ease: Sine.easeOut, delay:.2});
    TweenLite.to(compatible, .5, {opacity:0, ease: Sine.easeOut, delay:.2});
    TweenLite.to(headphone, .5, {scale:1, left:-82, top:-11, ease:Sine.easeIn, delay:.5});
     TweenLite.to(superHuman, .5, {scale:.6, top:135, left: 75, ease:Sine.easeIn, delay:.5});
     TweenLite.to(circles, .5,{scale:.6, top:125, left: 60, ease: Sine.easeIn, delay:.5});
     TweenLite.to(px, .5, {scale:.5, left:177, top: 129, ease: Sine.easeIn, delay:.5});
    TweenLite.to(triangle, .5, {opacity:1, ease: Sine.easeIn, delay:1});
    TweenLite.to(hearcopy, .5, {opacity:1, ease: Sine.easeIn, delay:1.2});
    
    TweenLite.to(cta, .8, {opacity:1, ease: Sine.easeIn, delay:1.4});
    TweenLite.to(logo, .8, {opacity:1, ease: Sine.easeIn, delay:1.5});
    TweenLite.to(bottomShine, .5,{opacity:1, left: 0, ease:Sine.easeIn, delay:1.4});
    TweenLite.to(topShine, .5,{opacity:1, right: 0, ease:Sine.easeIn, delay:1.4, onComplete:endTimer});
    
     
}

function endTimer(){
    Enabler.stopTimer('Animation Timer');
}