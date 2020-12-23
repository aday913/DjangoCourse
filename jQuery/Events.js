$('h1').click(function(){
    $(this).text('Now I am this!');
})

$('input').eq(0).keypress(function(event){
    if (event.key == 'r') {
        $('h3').toggleClass('turnRed');
    } else if (event.key == 'b') {
    $('h3').toggleClass('turnBlue');
    }
})

$('input').eq(1).click(function(){
    $('.container').slideUp(1000)
})