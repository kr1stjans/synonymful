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
});
