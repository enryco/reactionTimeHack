function react(t) {
    const go = document.getElementsByClassName('view-go')[0]
    if (go) {
        simulateClick()
    }
}

function simulateClick() {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mousedown", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var a = document.getElementsByClassName('view-go')[0]
    a.dispatchEvent(evt);
}

setInterval(() => react(), 1)