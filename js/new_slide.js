$(function(){
    var slide

    slide = setInterval(function(){
        $('.notice_list>li:first-child').animate    ({'margin-top':'-36px'},1000,function(){ //네모칸의 높이 찾아서 margin을 줘도 됨. (-40px)
        $('.notice_list').append($('.notice_list>li:first-child'));
        $('.notice_list>li:last-child').css({'margin-top':0});
    });
    },5000)
})//end