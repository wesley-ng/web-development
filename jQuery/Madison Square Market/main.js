$(document).ready(() => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');
    const $dropdownMenu = $('.dropdown-menu');

    $cart.on('click', () => {
        $("#cartMenu").show();
    });

    $account.on('click', () => {
        $("#accountMenu").show();
    });

    $help.on('click', () => {
        $("#helpMenu").show();
    });

    $dropdownMenu.on('mouseleave', () => {
        $dropdownMenu.hide();
    });

});