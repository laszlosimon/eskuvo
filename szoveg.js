$(window).scroll(function(){
    var st = $(this).scrollTop(),
        winH = $(this).height(),
        /* you can set this add, 
        depends on where you want the animation to start
        for example if the section height is 100 and you set add of 50,
        that means if 50% of the section is revealed 
        on the bottom of viewport animate opacity
        */
        add = 150;
    
    $('.hideme').each(function(){
        var pos = $(this).position().top;
        
        if(st + winH >= pos + add){
            $(this).stop().animate({opacity:1, marginTop:0},'fast');
        }else{
            $(this).stop().animate({opacity:0, marginTop:0},'fast');
        }
    });
});