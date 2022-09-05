$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true, //추가하고 싶은 게 있으면 , 하고 계속 추가하면 됨 (슬라이드 개수, 화살표, 점 등등 옵션 추가하고 싶을 때)
        arrows : false,
        dots : true,
        
      }); //슬라이드 넘기기
})