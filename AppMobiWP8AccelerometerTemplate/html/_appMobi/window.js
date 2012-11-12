window.console = {};
window.console.log = function () {
    var args = [].splice.call(arguments, 0);
    window.external.Notify("AppMobiDebug~Log~~" + args.join(', '));
};
window.console.error = function () {
    var args = [].splice.call(arguments, 0);
    window.external.Notify("AppMobiDebug~Error~~" + args.join(', '));
};
window.console.warn = function () {
    var args = [].splice.call(arguments, 0);
    window.external.Notify("AppMobiDebug~Warn~~" + args.join(', '));
};

window.onerror = function (msg, url, lineNum) {
    console.error("--------------------");
    console.error("Message: " + msg);
    console.error("Url: " + url);
    console.error("Line Number: " + lineNum);
    console.error("--------------------");
}

// IE does NOT provide an alert method, you can patch it with this line after deviceready.
window.alert = window.alert || navigator.notification.alert;

console.log('_appMobi/window.js is included to extend the window object.');
console.error('Test error in _appMobi/window.js.', this);
console.warn('Test warn in _appMobi/window.js.', this);
