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

function splitString(str){
    var index = str.indexOf(" ");
    var arr = [];
    arr[0] = str.substring(0, index);
    arr[1] = str.substring(7, str.length);
    return arr;
}

var monthArr = ['一月', '二月', '三月', '四月', '五月', '六月', 
'七月', '八月', '九月', '十月', '十一月', '十二月'];
// var


function back(){
    var element  = document.getElementsByClassName('body2')[0];
    clickSkip(element,'./survey_list.html')
}