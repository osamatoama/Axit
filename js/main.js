$(function () {
    $(".tabs .tabs-wrapper li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});