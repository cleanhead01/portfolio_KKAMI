(function(){



    $('#containerBox').load('main.html')

    $('.login_box a, nav a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#containerBox').load(url)
    })
    



}) (jQuery)