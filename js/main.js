/**
 * Global variables
 *
 * @author Jonathan Path
 */

// Remove NavBar from iOS
/*if( !window.location.hash && window.addEventListener ){
    window.addEventListener( "load",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener( "orientationchange",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
}*/

var blog_post_height = parseInt($('.blog-body').height()+250);
$(document).ready(function(){
    $('.blog-container').height(blog_post_height); 
});

var faq_post_height = parseInt($('.faq-body').height()+300);
$(document).ready(function(){
    $('.faq-container').height(faq_post_height); 
});


$(document).on('click','.panel-title>a',function(){
    
    if($(this).hasClass('collapsed')){
        if($(window).width() < 767){
            var faq_page_height = parseInt($('.faq-body').height()-300);

            setTimeout(function(){
                $('.faq-container').animate({paddingBottom: faq_page_height}); 
            },100);
        }
        else{
            var faq_page_height = parseInt($('.faq-body').height()+200);

            setTimeout(function(){
                $('.faq-container').animate({paddingBottom: faq_page_height}); 
            },100);
        }
    }
    else{
        var item_height = $(this).parents('.panel').children('.panel-collapse').height();
        var faq_page_height = parseInt($('.faq-body').height()+500);
        
        setTimeout(function(){
            $('.faq-container').animate({paddingBottom: faq_page_height}); 
        },100);
    }

});

//on scoll fade content
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},700); 
        }        
    }); 
});
