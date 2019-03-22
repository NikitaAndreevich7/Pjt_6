
$(document).ready(function(){
        $('.aa').hover(
                function(){ $('#tf_aa').stop().animate({ opacity:1 },200)},
                function(){ $('#tf_aa').stop().animate({ opacity:0 },200)}
)// end function hover

        $('.bb').hover(
                function(){ $('#tf_bb').stop().animate({ opacity:1 },200)},
                function(){ $('#tf_bb').stop().animate({ opacity:0 },200)}
)// end function hover

        $('.cc').hover(
                function(){ $('#tf_cc').stop().animate({ opacity:1 },200)},
                function(){ $('#tf_cc').stop().animate({ opacity:0 },200)}
)// end function hover

        $('.menu-hover').hide();
        $('.menu-btn').on('click',function(evt){
               evt.pteventDefault;
              
        $(this).toggleClass('menu-btn_active');
        if($('.menu-hover').is(':hidden')){
                $('.menu-hover').slideToggle(500);
                $(this).addClass('close');
        }else{
                $('.menu-hover').slideUp(600);
                $(this).removeClass('close');
        }
});//end gamburger menu
});//end ready


function slowScroll (id){
        var offset = 40;
$('html, body').animate({
        scrollTop: $(id).offset().top - offset
},1000);
return false
}; //and scroll 


$(window).scroll(function(){
        if($(window).scrollTop() > '300'){
                $('.menu').css({"background":"rgba(0,0,0,.9)"})
        }else if($(window).scrollTop() < '300'){
                $('.menu').css({"background":"none"})
                
        }
});// and background to scroll

$(window).scroll(function(){
        if($(window).scrollTop() > '600'){
                $('.btn-top').css({"opacity":"1"})
        }else if($(window).scrollTop() <'600'){
                $('.btn-top').css({"opacity":"0"}) 
        }
});// and btn-top 
