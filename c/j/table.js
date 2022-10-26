$(document).ready(function () {
    $('.streaming-week li > a').click(function (event) {
        event.preventDefault();//stop browser to take action for clicked anchor

        //get displaying tab content jQuery selector
        var active_tab_selector = $('.streaming-week li.active > a').attr('href');

        
        //find actived navigation and remove 'active' css
        var actived_nav = $('.streaming-week li.active');
        actived_nav.removeClass('active');
        
        //add 'active' css into clicked navigation
        $(this).parents('li').addClass('active');
        
        //hide displaying tab content
        //$(active_tab_selector).removeClass('active');
        //$(active_tab_selector).addClass('hide');
        
        //show target tab content
        var target_tab_selector = $(this).attr('href');
        $('.tab-content').removeClass('active').addClass('hide');
        $('#' + target_tab_selector).removeClass('hide').addClass('active');

        console.log(target_tab_selector)
      
    });
});
