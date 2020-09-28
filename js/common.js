(function(){

    // $(window).load(function(){
    //     $('.loadBox').delay(2000).fadeOut(500)
    // })

    init()

    var flag = true;
    function init() {
        var ww = $(window).width()
        if ( ww > 543 && flag ) {
        $('.nav_box .nav').show()
        $('.nav_box .open_nav').hide()
        flag = false
        } else if ( ww <= 543 && !flag ) {
            $('.nav_box .open_nav').show()
            $('.nav_box .nav').hide()       
            flag = true
        }
    }
    
    $(window).on('resize', function(){
        init()
    })



    // 로딩화면 숫자 카운트세기
    var colorCode = ['hotpink', 'orange', 'blue']
    var minCnt = setInterval(minusCount, 1000);
    var k = 3;
    function minusCount() {
        k--;
        if (k === 0) {
            clearInterval(minCnt)
            $('.loadBox').fadeOut(500)
            // return false
        }
        $('.loadBox span p').text(k+'초').css({
            color : colorCode[k]
        })


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
                width: '100%',
                opacity: '1'
            }, 500)
        },
        function(){
            $(this).find('.depth2')
            .stop().animate({
                width: '0px',
                opacity: ''
            }, 1000)
        }
    )


    // 반응형 햄버거 메뉴 누르면 depth1 목록 나오기
    $('.nav_box .open_nav').on('click', function(){
        $('.nav_box .nav').show().stop().animate({
            left: '0'
        }, 500)
    })
    // 배경을 누르면 사라지기
    $('.nav').on('click', function(){
        $(this).stop().animate({
            left: '100%'
        }, 300)
    })



























}) (jQuery)