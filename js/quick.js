/* 남양몰, 남양아이 버튼 */
$(function(){
    var mall_btn_sta = 0;
    var i_btn_sta = 0;
        $('.namyangmall').click(function(){
            if (mall_btn_sta == 0) {
                $(this).addClass('active');
                mall_btn_sta = 1;
            } else { 
                $(this).removeClass('active');
                mall_btn_sta = 0; 

            }
        })
        $('.namyangi').click(function(){
            if (i_btn_sta == 0) {
                $(this).addClass('active');
                i_btn_sta = 1;
            } else { 
                $(this).removeClass('active');
                i_btn_sta = 0; 

            }
        })
  })//end

/* 상담하기 버튼 */
$(function(){
    var btn_sta = 0;
        $('.con_btn').click(function(){
                $('.consulting_box').addClass('active');
           })
           $('.consulting_box img').click(function(){
            $('.consulting_box').removeClass('active'); 
           })
})//end
// $(function(){
//     var btn_sta = 0;
//         $('.con_btn').click(function(){
//             if (btn_sta == 0) {
//                 $('.consulting_box').addClass('active');
//                 btn_sta = 1;
//             } else { 
//                 $('.consulting_box').removeClass('active');
//                 btn_sta = 0; 
//             }
//         })
// })//end

  /*탑버튼*/

$(function(){
    $(".top_btn").click(function(){
        $('html, body').animate({
        scrollTop : 0
        }, 800);
        return false;
        });
})