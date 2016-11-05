$(document).ready(function(){

    /**
     * TO FOCUS WHEN CLICK ON BASE HOLDER
     **/
    $(".base-holder").click(function(){
        $(this).find('input[data-tags-handle="tagger"]').focus();
    });

    /**
     * TO MAKE A TAG WHEN PRESS ENTER
     **/
    $('input[data-tags-handle="tagger"]').keyup(function (event) {
        var keyPressed = event.which;
        var tragetedTagger = $(this).parent();
        var taggerValue = $(this).val();
        var taggerSize = $(this).attr('data-tags-size');
        var taggerClass = $(this).attr('data-tags-color');
        var taggerMax = $(this).attr('data-tags-max');
        var taggerSide = $(this).attr('data-tags-side');
        var taggerWidth = $(this).width();
        if(!taggerSize){
            taggerSize = 'default';
        }
        taggerValue = taggerValue.split(' ').join('');
        if(taggerMax != 0){
            taggerValue = taggerValue.substr(0, taggerMax);
        }
        var newTag = '<div class="'+taggerSize+'-tag '+taggerClass+'" data-tag-value="taggerValue">'+taggerValue+'</div>';
        if((keyPressed == '13') || (keyPressed == '32')){
            if(taggerValue.split(' ').join('') != ''){
            $(this).val('');
                if(taggerSide == 'right'){
                    tragetedTagger.prepend(newTag);
                }else{
                    tragetedTagger.append(newTag);
                }
            }
        }
    });
});