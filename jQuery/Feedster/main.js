$(document).ready(() => {
    // * show menu element on hover and hide when the pointer is not there
    $('.menu').on('mouseenter',() => {
        $('.nav-menu').slideDown();
    }).on('mouseleave', () => {
        $('.nav-menu').slideUp();
    });
    // ? add btn-hover everytime the pointer hover over the button
    // * addClass no need using .
    $('.btn').on('mouseenter', event => { 
        $(event.currentTarget).addClass('btn-hover');
    }).on('mouseleave',event => {
        $(event.currentTarget).removeClass('btn-hover');
    });
    // ? display remaining number of characters
    $('.postText').keyup(function (event) { 
        let post = $(event.currentTarget).val();
        let remaining = 140 - post.length;
        if (remaining <= 0) {
            $('.wordcount').addClass('red');
        } else {
            $('.wordcount').removeClass('red');
        }
        $('.characters').html(remaining);   
    });
    // * when the site finished loading, you will be directly brought into the textarea
    $('.postText').focus();
});