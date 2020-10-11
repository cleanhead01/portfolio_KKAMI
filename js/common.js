(function($){

    // $(window).load(function(){
    //     $('.loadBox').delay(2000).fadeOut(500)
    // })

    var deviceSize = 560;

    function scrollOX(status) {
        $('html').css({
            overflowY:status
        })
        var htmlWidth = $('html').width()
        return htmlWidth
    }

    var swh = scrollOX('hidden');
    var sws = scrollOX('scroll');
    var swd = swh - sws;

    if (swd > 0) {
        deviceSize = deviceSize - swd
    }




    init()

    function init() {
        var ww = $(window).width()
        if ( ww > deviceSize && !$('html').hasClass('pc') ) {
            $('html').addClass('pc').removeClass('mobile')
            $('.nav_box .nav').show()
            $('.nav_box .open_nav, .nav_box .close_nav').hide()
        } else if ( ww <= deviceSize && !$('html').hasClass('mobile') ) {
            $('html').addClass('mobile').removeClass('pc')
            $('.nav_box .open_nav').show()
            $('.nav_box .nav').hide()       
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

    // 각각 로그인,회원가입,사이트맵 페이지 이동 연결
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




    // 1499px 이하에서 window값이 100이상이면 fixed되어있는 헤더에서 로그인구역이 사라지기
    $(window).scroll(function () {
        var sctNav = $(this).scrollTop();
        var scwNav = $(this).width();
    
        if (scwNav <= 1499) {
          if (sctNav > 0) {
            $(".lang_back").stop().hide();
          } else {
            $(".lang_back").stop().show();
          }
        }
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
        $(this).next('.nav').stop().slideDown(300)
        $(this).hide()
        $(this).nextAll('.nav_box .close_nav').show()
    })

    // 반응형 X버튼 누르면 메뉴 사라지기
    $('.nav_box .close_nav').on('click', function(){
        $(this).prev('.nav').stop().slideUp(300)
        $(this).hide()
        $(this).prevAll('.nav_box .open_nav').show()
    })


    $('.nav_box .nav').on('click', function(){
        var clickNav = $(this).width();

        if (clickNav <= 560) {
            $(this).hide()
            $(this).next('.nav_box .close_nav').hide()
            $(this).prev('.nav_box .open_nav').show()
        }
    })










}) (jQuery)