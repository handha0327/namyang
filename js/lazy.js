$(function(){

      //메인
      $("#slide.lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true, //추가하고 싶은 게 있으면 , 하고 계속 추가하면 됨 (슬라이드 개수, 화살표, 점 등등 옵션 추가하고 싶을 때)
        arrows : false,
        dots : true,
        autoplay : true,
        autoplaySpeed : 10000,
        fade:true ,
      }); //슬라이드 넘기기
    

      //환경
    $("#section2 .rigth_txt1 ").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true, //추가하고 싶은 게 있으면 , 하고 계속 추가하면 됨 (슬라이드 개수, 화살표, 점 등등 옵션 추가하고 싶을 때)
      arrows : true,
      asNavFor: '#section2 .rigth_txt2'
    }); //슬라이드 넘기기
    $("#section2 .rigth_txt2 ").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true, //추가하고 싶은 게 있으면 , 하고 계속 추가하면 됨 (슬라이드 개수, 화살표, 점 등등 옵션 추가하고 싶을 때)
      arrows : false,
      fade: true,
      asNavFor: '#section2 .rigth_txt1'
      
    }); //슬라이드 넘기기
      //제품
    $("#section4 .lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true, //추가하고 싶은 게 있으면 , 하고 계속 추가하면 됨 (슬라이드 개수, 화살표, 점 등등 옵션 추가하고 싶을 때)
      arrows : true,
      dots : false,
      autoplay : true,
        autoplaySpeed : 10000,
        fade:true ,
      
    }); //슬라이드 넘기기

})