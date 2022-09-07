/* 남양몰, 남양아이 버튼 */
$(function(){
    var btn_sta = 0;
        $('.namyangmall').click(function(){
            if (btn_sta == 0) {
                $(this).addClass('active');
                btn_sta = 1;
            } else { 
                $(this).removeClass('active');
                btn_sta = 0; 

            }
        })
        $('.namyangi').click(function(){
            if (btn_sta == 0) {
                $(this).addClass('active');
                btn_sta = 1;
            } else { 
                $(this).removeClass('active');
                btn_sta = 0; 

            }
        })
  })//end

/* 상담하기 버튼 */
$(function(){
    var btn_sta = 0;
        $('.con_btn').click(function(){
            if (btn_sta == 0) {
                $('.consulting_box').addClass('active');
                btn_sta = 1;
            } else { 
                $('.consulting_box').removeClass('active');
                btn_sta = 0; 
            }
        })
  })//end