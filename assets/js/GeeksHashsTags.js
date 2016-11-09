<!--
Created on 11/05/2016
Version 1.1.0
Developed By Titanium01
Visit me on facebook
fb.com/Geeks.Hashes/ or @geeks.hashes
github: @Titanium01
-->
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
        var taggerRemove = $(this).attr('data-tags-remove');
        var taggerWidth = $(this).width();
        if(!taggerSize){
            taggerSize = 'default';
        }
        if(taggerRemove == 'true'){
            var tagRemover = '<i class="fa fa-times"></i>';
        }
        /**
         * CHECK MAX NUMBER POSITIVE NUMBERS ONLY
         **/
        function isNormalInteger(str) {
            var n = ~~Number(str);
            return String(n) === str && n >= 0;
        }

        taggerValue = taggerValue.split(' ').join('');
        if(taggerMax != 0){
            if(($.isNumeric(taggerMax)) && (isNormalInteger(taggerMax))){
            taggerValue = taggerValue.substr(0, taggerMax);
            }
        }
        var newTag = '<div class="this-tagger tag-'+taggerSize+' '+taggerClass+'" data-tag-value="'+taggerValue+'">'+taggerValue+' '+tagRemover+'</div>';
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


    /**
     * REMOVE TAGS
     **/
    $(document).on('click','.base-holder i.fa-times',function(){
        $(this).parent().remove();
    });

    /**
     * CHANGE TAGS VALUE IF CHANGE OPTION IS TRUE
     **/
        $(document).on('dblclick','.this-tagger',function(){
            var taggerChange = $(this).parents().eq(2).find('input[data-tags-handle="tagger"]').attr('data-tags-change');
            if(taggerChange == 'true'){
                var tagValue = $(this).attr('data-tag-value');
            var taggerInput = $(this).parent().find('input[data-tags-handle="tagger"]').val(tagValue);
            $(this).remove();
            }
        });

});