(function(){



    $('#containerBox').load('main.html')

    $('.login_box a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#containerBox').remove()
        $('#container').load(url)
    })



}) (jQuery)