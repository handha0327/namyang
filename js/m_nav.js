$(function(){
    $('.close1').click(function(){
      $('#popup_nav').animate({right:'-100%'});
    });
    $('.open1').click(function(){
      $('#popup_nav').animate({right:'0'});
    })
    $('#btn1>li').each(function(){
      var depth1_a = $(this).children('a');
      var depth2_sub = $(this).children('.m_sub');
      var sub_status = 0; /*0--닫힘 1--열림*/

      depth1_a.click(function(){
        // $('.sub').slideUp();
        // depth2_sub.slideToggle();
        // $(this).css({color:'red'})
        if(sub_status == 0){

          $('.m_sub').hide();
          $('#btn1>li>a').removeClass('active');
          sub_status = 0;
          //닫힘상태 알려줌

          depth2_sub.show();
          $(this).addClass('active');
          sub_status = 1;
          //열림상태 알려줌

        }else {
          depth2_sub.hide();
          $(this).removeClass('active');
          sub_status = 0;
          //닫힘상태 알려줌
        }
      })
    })
  })