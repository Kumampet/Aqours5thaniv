$(function () {
    // $(document).ready(function () {
        
    // });
    $(window).scroll(function () {
        $("#output").html($(window).scrollTop());
    });
    $('p.start-btn').on('click', function () {
        $('body,html').animate({ scrolleTop: $(document).height() }, 5000, 'swing');
        return false;
    });
});