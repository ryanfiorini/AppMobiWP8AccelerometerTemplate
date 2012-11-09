window.console = {};
window.console.log = function (log) {
    window.external.Notify("logger: " + log);
};
window.console.error = function (error) {
    window.external.Notify("error: " + error);
};
window.console.warn = function (warn) {
    window.external.Notify("warn: " + warn);
};

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    console.log("--------------------");
    console.log("onerror: errorMsg: " + errorMsg);
    console.log("onerror: url: " + url);
    console.log("onerror: lineNumber: " + lineNumber);
    console.log("--------------------");
}

// IE does NOT provide an alert method, you can patch it with this line after deviceready.
window.alert = window.alert || navigator.notification.alert;

console.log('_appMobi/window.js is included to extend the window object.');
console.error('Test error in _appMobi/window.js.');
console.warn('Test warn in _appMobi/window.js.');
