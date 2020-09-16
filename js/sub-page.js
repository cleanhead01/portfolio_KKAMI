(function($){

// 각각 서브페이지 안에서 페이지 이동 연결
// $('#container .center .button > a').on('click', function(e){
//     e.preventDefault()
//     var url = $(this).attr('href')
//     $('#container').remove()
//     $('#containerBox').load(url)
// })


$('#notice_back .center .button a').on('click', function(e){
    e.preventDefault()
    var index = $(this).parent().index()
    $(this).addClass('on')
    .siblings().removeClass('on')
    $('#no_qa .div_qa, #no_qa .div_no').eq(index).fadeIn(100)
    .siblings().fadeOut(100)
})



}) (jQuery)