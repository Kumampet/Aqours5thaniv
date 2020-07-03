$(function () {
    var appear = false;
    var pagetop = $('#page-top-jummper');
    var play = $('p.start-btn');

    play.click(function () {
        $('body').animate({ scrollTop: 58000 }, 30000, 'swing'); //0.5秒かけてトップへ戻る
        return false;
    });

    pagetop.click(function () {
        $('body,html').animate({ scrollTop: 0 }, 60000, 'swing'); //0.5秒かけてトップへ戻る
        return false;
    });
});
