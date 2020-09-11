(function($){

// 각각 서브페이지 안에서 페이지 이동 연결
$('#container .center .button > a').on('click', function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#container').remove()
    $('#containerBox').load(url)
})



}) (jQuery)