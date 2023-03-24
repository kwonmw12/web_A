$(document).ready(function(){
    var count = 0;
    setInterval(function(){
        count++;
        count %= 3; // 0 1 2 순환
        $("#swiper .swiper-slide").eq(count).addClass('action').siblings().removeClass('action');
    }, 3000)

    //공지사항 갤러리탭 눌렀을때 액티브 박스 생기는것
    $('.twotab h3').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on')
    })

    //팝업띄우기
    $('[href="#popupnm"]').click(function(e){
        e.preventDefault();//href가 a태그이니까 새로고침 방지로 e.preventDefault로 막아준다.
        $('#popupnm').addClass('d-block')
    })

    $('#popupnm button').click(function(e){
        e.preventDefault();//href가 a태그이니까 새로고침 방지로 e.preventDefault로 막아준다.
        $('#popupnm').removeClass('d-block')
    })

})