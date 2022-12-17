// click to another url
function clickSkip(element, URL) {
    console.log('ad');
    element.addEventListener('click', function () {
        location.href = URL;
    });
}

function clickNone() {
    var ele = arguments[0];
    var zhe = arguments[1];
    var win = arguments[2];
    var all = null;
    if (arguments.length == 4) {
        all = arguments[3];
    }
    ele.addEventListener('click', function () {
        zhe.style.display = 'none';
        win.style.display = 'none';
        if (all != null) {
            for (var i = 0; i < all.length; i++) {
                all[i].setAttribute('select', 0);
            }
        }
    })
}