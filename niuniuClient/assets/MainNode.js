

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        let ws = new WebSocket("ws://101.200.209.8:3000");
        ws.onopen = function (result) {
            console.log("on open", result);
            ws.send("hello world");
        }
        ws.onmessage = function (result) {
            console.log("on message", result.data);
        }
        ws.onerror = function (result) {
            console.log("on error", result);
        }
    },

    start() {

    },

    update(dt) { },
});
