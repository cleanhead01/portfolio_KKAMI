(function(){

    // $(window).load(function(){
    //     $('.loadBox').delay(2000).fadeOut(500)
    // })

    // 로딩화면 숫자 카운트세기
    var minCnt = setInterval(minusCount, 1000);
    var k = 3;
    function minusCount() {
        k--;
        if (k === 0) {
            clearInterval(minCnt)
            $('.loadBox').fadeOut(500)
        }
        $('.loadBox span p').text(k+'초')


    }


    $('#containerBox').load('main.html')

    $('.login_box a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#containerBox').load(url)
    })


    // 각각 헤더 구역에서 서브페이지 이동 연결
    $('.nav_box .nav a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#containerBox').load(url)
    })

    
    
    
    
    
    
    
    
    
    
    // depth1에 호버하면 depth2 메뉴
    $('.depth1 li').hover(
        function(){
            $(this).find('.depth2')
            .stop().animate({
                width: '542.5px'
            }, 500)
        },
        function(){
            $(this).find('.depth2')
            .stop().animate({
                width: '0px',
            }, 500)
        }
    )



























}) (jQuery)