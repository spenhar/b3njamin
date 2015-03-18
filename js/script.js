$(function(){
  var WIN = $(window);
  var DOC = $(document);
  var initialized = false;


var counter = 23

while(counter){
  console.log("Hello World");
  counter = counter -1;
}



console.log("SLIDESHOW");

$(function () {
$('.logo').click(function(e) {
  $('.nav-list').toggleClass('active');
  $('.logo').toggleClass('active');
  e.stopPropagation();
});

$(document).click(function() {
  if ($('.nav-list').is(':visible')) {
    $('.logo, .nav-list').removeClass('active');
  }
  });
 });





//PHP

// var curimg=0
// function rotateimages(){
// document.getElementById("slideshow").setAttribute("src", "pics/"+galleryarray[curimg])
// curimg=(curimg<galleryarray.length-1)? curimg+1 : 0
// }

// window.onload=function(){
// // setInterval("rotateimages()", 2500)
// };

// console.log();





  // Photo slideshow
  
  // var photoCount = 22
  // var activePhoto

  // for (var i = 0; i<photoCount; i++) {
  //   $("#photos").append("<div class='photo'></div>")
  //   if (i==0){$('.photo').addClass('active')}
  // };
  
  // for (var i = Things.length - 1; i >= 0; i--) {
  //   $(".photos").eq activePhoto
  // };

  // onClick if (i==0) {addClass("active") else removeClass("active") addClass("passed")};



  // Smooth Touch Scrolljacking
  var  containerTop =     0, // keeps track of amount scrolled without actually scrolling
  moved =                 0, // amount your finger moved during touchmove
  touchStartY =           0,
  isTouchDevice =         false, // set to true on touchstart
  touchInterval;

  // Initialize
  pageResize();
  scrollHandler();
  // Page events
  WIN.on('resize',pageResize);
  WIN.on('scroll',scrollHandler);
  // Touch events
  WIN.on('touchstart',function(e){
    isTouchDevice = true;
    touchInterval = setInterval(redraw, 10);
    moved = 0;
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    touchStartY = touch.pageY;
  })
  WIN.on('touchmove',function(e){
    e.preventDefault();
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    moved = touch.pageY-touchStartY;
    containerTop -= moved;
    touchStartY = touch.pageY;
  })
  WIN.on('touchend',function(e){
    moved*=.95;
    containerTop -= moved;
    if(Math.abs(moved) < .2){
      clearInterval(touchInterval);
    }
  })
  function pageResize (e) {
    WIN_H = WIN.height();
    WIN_W = WIN.width();
    
    initialized = true;
  }
  function scrollHandler(){
    if(isTouchDevice){
      scrollTop = Math.max(0,containerTop);
    }else{
      scrollTop = WIN.scrollTop();
    }
  }

  // Touch Scroll
  function redraw() {
    if(isTouchDevice){
      window.requestAnimationFrame(function() {
        scrollHandler();
      });
    }
  }

})