$(document).ready(function(){

    $('.container').each(function(){  
        var highestBox = 0;

        $(this).find('.blue-block-copy').each(function(){
            if($(this).height() > highestBox){  
                highestBox = $(this).height();  
            }
        })

        $(this).find('.blue-block-copy').height(highestBox);
    });    


});