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
























    // $('.slide_inner').slick({
    //     autoplay: true,
    //     dots: true,
    //     autoplaySpeed: 4500,
    //     speed: 600,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     pauseOnHover: true,
    //     pauseOnDotsHover: false,
    //     pauseOnFocus: false,
    //     cssEase: 'ease',
    //     draggable: true,
    //     fade: false,
    //     arrows: true,
    //     // prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    //     // nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        

    // })
    



}) (jQuery)