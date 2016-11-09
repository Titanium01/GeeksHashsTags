# GeeksHashsTags
GeeksHashsTags is a plugin that helps developers to convert text field input to tags base input, converts everything you type to a tag

Samples: 

![tags](https://cloud.githubusercontent.com/assets/23264635/20149638/2864fe1a-a680-11e6-9576-ea6a8dd8f9e4.png)

# NOTES:
Samples above only shows the deferment colors and sizes, it's not showing all the features of the plugin.

 ***don't remove elements with i9 comment in order to get the plugin works perfectly.**
 
**GeeksHashsTags** comes with the known bootstrap main colors however you don't need to include bootstrap lib in order
to get the plugin to work.

*this plug in require font-awesome lib.

I used mostly the {data} attribute to give more options to make it easier for beginners developers to use.

this is the first version of this plugin and it might have some issues please let me know if you have any question on
my face book page.

    www.facebook.com/Geeks.Hashes   
    or
    @GeeksHashes 

here is a list of information of the options you can use in this plugin
# INFORMATION LIST


Colors Usage:

    tag- choose color from the list
    
colors list        = {

                        default
                        default-outline
                        success
                        success-outline
                        primary
                        primary-outline
                        info
                        info-outline
                        warning
                        warning-outline
                        danger
                        danger-outline
}

tags color examples:

    data-tags-color="tag-success"
    data-tags-color="tag-success-outline"


tags maximum number of letters examples:
    
    data-tags-max="0"
    data-tags-max="15"
    data-tags-max="100"
    data-tags-max="1000"
    value between (0-9)
    
Sizes Usage:
    
    data-tags-size="default"
    data-tags-size="xsmall"
    
sizes list        = {

                        default
                        xsmall
                        small
                        medium
                        large
                        xlarge
                     

}

Side Explain: 
    
    This option will put the tags on specific side of the input either to the left of the 
    input or to the right of the input to support Rtl languages side.
    
Side Usage: 
    
    data-tags-side="right"
    
Sides List: 

    { right, left }

**_*not changeable options:_**

data-tags-handle="tagger"

    tagger allows javascript to know which html element is giving the tags, changing tagger
    will stop the script.

data-tags-base="tags-only"
        
    it's an option planned for future extra feature to allow you to write tags or to choose
    tags from specific source such as select menu or DB, it's an optional feature.
    

remove tags Usage:
 
    data-tags-remove="true"
                             
remove tags options:

    an option to enable or disable the remove tag button,
    
    Options : { true , false }.

change tags value Usage:
 
    data-tags-change="true"
                             
change tags value options:

    an option to enable or disable the tag value change, by double click on the tag.    
    Options : { true , false }.

if you find or fix any bugs please let me know 
        
    www.facebook.com/Geeks.Hashes   
    or
    @GeeksHashes 
    
    Email: geekshashes@gmail.com
    
**_*Credit:_**

    1- jquery -> https://jquery.com
    2- bootstrap -> http://getbootstrap.com
    3- font-awesome -> http://fontawesome.io/
