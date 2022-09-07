$(function(){
    $(window).scroll(function(){
        if ($(document).scrollTop() >= 10) {
            $('#header').addClass('scroll');
        } else {
           $('#header').removeClass('scroll');
        }
  })

  //네비 내려올 때 헤더 색 바뀌게 해줌
  $('.gnb').hover(function(){
    $('#header').addClass('on');
    $('#header .gnb > li > a').addClass('on');
    $('#header .language .btn_lang').addClass('on');
    $('#header .header_icon img').attr('src','images/mypage_black.png');
    },function(){
        $('#header').removeClass('on');
        $('#header .gnb > li > a').removeClass('on');
        $('#header .language .btn_lang').removeClass('on');
        $('#header .header_icon img').attr('src','images/mypage_white.png');
    })
})






    /*
    $(this).click(function(){
      var href = $(this).attr('href');
      $('.popup').hide(); //다 닫혀지고, 내가 클릭한 것만 나타남.
      $(href) .show(); //$ 표시 없이 해보고 안 되면 $넣어주면 됨. 이름을 그대로 가지고 오면 $해줘야하고, 변수는 $를 적으면 안됨.
      $('.h_p1 a').removeClass('on'); //on클래스를 사라지게
      $(this).addClass('on'); //on클래스를 나타나게
    })*/
