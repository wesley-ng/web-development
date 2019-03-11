let main = () => {
    // when the 'more' clicked
    $('.more-btn').click(function (event) { 
        $(event.currentTarget).next().toggle();
    });
    // when the 'share' clicked
    $('.share').click(function (event) { 
        $(event.currentTarget).next().toggle();    
    });
    // when hte 'notifcation' clicked
    $('.notification').click(function (event) { 
        $(event.currentTarget).css({
            color: 'yellow'
        }).toggleClass('active');       
    });
};

$(document).ready(main);