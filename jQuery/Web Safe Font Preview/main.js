$(document).ready(function () {
    // Preview Text Area
    $('#text').keyup(function (event) { 
        $('.preview').html($(event.currentTarget)).val();
    });
    // * Change font family
    $('#font').change(function (event) {
        $('.preview').css({
            fontFamily: $(event.currentTarget).val()
        });
    });
    // * Change font weight
    $('#weight').change(function (event) { 
       $('.preview').css({
           fontWeight: $(event.currentTarget).val()
       });      
    });
    // * Font Size input area
    $('#size').keyup(function (event) { 
        let fontSize = $(event.currentTarget).val() + 'px';
        $('.preview').css({
            fontSize: fontSize
        });
    });
});