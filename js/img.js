/**************************pc****************/
$(function(){

    $(window).resize(function(){
    
    var width = window.innerWidth;
    
    if(width < 768){
    
    $('#banner img').attr('src', 'images/banner_mobile.jpg')
    
    }
    
    else {$('#banner img').attr('images/banner.jpg');}
    
    }).resize();
    
    });



/**************************모바일****************/
$(function(){

    $(window).resize(function(){
    
    var width = window.innerWidth;
    
    if(width < 1000){
    
    $('#section3 .circle_txt').attr('src', 'images/sub_mob.png')
    
    }
    
    else {$('#section3 .circle_txt').attr('images/sub_pc.png');}
    
    }).resize();
    
    });