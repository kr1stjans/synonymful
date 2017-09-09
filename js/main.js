$(document).ready(function () {
    var windows = $('#windows');
    var mac = $('#mac');
    var ubuntu = $('#ubuntu');
    if (navigator.appVersion.indexOf("Win") !== -1) {
        windows.addClass('my-btn');
        mac.addClass('my-btn2');
        ubuntu.addClass('my-btn2');
    }
    if (navigator.appVersion.indexOf("Mac") !== -1) {
        windows.addClass('my-btn2');
        mac.addClass('my-btn');
        ubuntu.addClass('my-btn2');
    }
    if (navigator.appVersion.indexOf("Linux") !== -1 || navigator.appVersion.indexOf("X11") !== -1) {
        windows.addClass('my-btn2');
        mac.addClass('my-btn2');
        ubuntu.addClass('my-btn');
    }

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-106176253-1', 'auto');
    ga('send', 'pageview', '/');
});
