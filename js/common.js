(function(){



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

    // 슬라이드
    $('.slide_inner').slick({
        autoplay : true,
        autoplaySpeed : 2000,
        dots : true,
        speed : 500,
        slidesToScroll : 1,
        pauseOnHover : false,
        pauseOnDotsHover : true,
        pauseOnFocus : true,
        draggable : true,
        arrows : false,
        // prevArrow : '<button class="prev arrow"><img src="images/icoSnsLeft.png" alt="이전으로"></button>',
        // nextArrow : '<button class="next arrow"><img src="images/icoSnsRight.png" alt="다음으로"></button>'
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