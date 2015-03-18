/**
* Full Size Backgrounded
* 
* @version 1.0
* @author Vaska 
*/
function bg_img_resize() 
{
    var w = $(window).width();
    var h = $(window).height();
    var iw = $('#the-background img').attr('width');
    var ih = $('#the-background img').attr('height');
    var rw = iw / ih;
    var rh = ih / iw;
    var sc = h * rw;
    if (sc >= w) {
        nh = h;
        nw = sc;
    } else {
        sc = w * rh;
        nh = sc;
        nw = w;
    }

    $('#the-background img').css({height: nh, width: nw});
}

$(document).ready(function(){ bg_img_resize(); });
$(window).resize(function(){ bg_img_resize(); });

$(window).resize(function(){ 
    bg_img_resize(); 
    $('#the-background').css({ 'top' : 0, 'left' : 0 }); 
});
$(window).scroll(function(){ 
    bg_img_resize(); 
    $('#the-background').css({ 'top' : 0, 'left' : 0 }); 
});