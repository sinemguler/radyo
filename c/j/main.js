$('.hamburger-menu').click(function(){
$('body').toggleClass('mobile-menu-active')
})

$('.close').click(function(){
    $('body').removeClass('mobile-menu-active')
})