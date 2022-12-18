window.addEventListener('load', function () {
    var lastButtom = document.getElementsByClassName('lastButtom');
    var SaveButtom = lastButtom[1];
    var publishButtom = lastButtom[0];

    var temp = this.document.getElementsByClassName('last')[0];
    var openCaledarWin = temp.querySelector('div');

    var temp = this.document.getElementsByClassName('month_year')[0];
    var browDate = temp.querySelector('p');
    var rightArrow = temp.getElementsByClassName('afterArrow')[0];
    var leftArrow = temp.getElementsByClassName('beforeArrow')[0];

    var addQuestionButton = this.document.getElementsByClassName('add_buttom')[0];
    var chooseButton = this.document.getElementsByClassName('choose_buttom')[0];

    var caledarWin = this.document.getElementsByClassName('kongzhi')[0];
    var caledarTable = caledarWin.getElementsByTagName('table')[0];
    var dateTd = document.getElementsByTagName('td');
    var caledarDdl = this.document.getElementsByClassName('ddl')[0];
    var ddl = this.document.getElementsByClassName('ddl')[1];
    var saveWinDdl = this.document.getElementsByClassName('date')[0];

    var zhe = document.getElementsByClassName('zhe')[0];
    var pubWin = this.document.getElementsByClassName('deleteQuestion')[0];
    var cha = pubWin.getElementsByClassName('cha')[0];
    var yesToPublish = pubWin.getElementsByClassName('yes')[0];
    var noToPublish = pubWin.getElementsByClassName('no')[0];
    //初始化
    chooseButton.style.display = 'none';
    var flag = new Date();
    caledarDdl.innerText = flag.getFullYear() + '-' + (flag.getMonth() + 1) + '-' + flag.getDate();
    ddl.innerText = caledarDdl.innerText;
    browDate.innerHTML = monthArr[flag.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + flag.getFullYear();
    saveWinDdl.innerText = '(此问卷截止日期为' + ddl.innerText +')';

    // 显示和隐藏对话框
    clickNone(cha, zhe, pubWin);
    clickNone(yesToPublish, zhe, pubWin);
    clickNone(noToPublish, zhe, pubWin);
    // 确认保存事件
    yesToPublish.addEventListener('click', function () {
        ;
    })
    // 发布事件
    publishButtom.addEventListener('click', function () {
        zhe.style.display = 'block';
        pubWin.style.display = 'block';
    })

    var time = new Date(ddl.innerText);
    //左右箭头事件
    leftArrow.addEventListener('click', function () {
        var timeArr = splitString(browDate.innerText);
        var index = monthArr.indexOf(timeArr[0]);
        if (index == 0) {
            index = 11;
            timeArr[1]--;
        } else {
            index--;
        }
        browDate.innerHTML = monthArr[index] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + timeArr[1];
        chrangeTd(splitString(browDate.innerText));
    })
    rightArrow.addEventListener('click', function () {
        var timeArr = splitString(browDate.innerText);
        var index = monthArr.indexOf(timeArr[0]);
        if (index == 11) {
            index = 0;
            timeArr[1]++;
        } else {
            index++;
        }
        browDate.innerHTML = monthArr[index] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + timeArr[1];
        chrangeTd(splitString(browDate.innerText));
    })

    // 修改日历表
    function chrangeTd(arr) {
        var time = new Date();
        var currentMonth = monthArr.indexOf(arr[0]);
        var currentYear = arr[1];
        time.setFullYear(arr[1], currentMonth, 1);
        var currentday = time.getDay();
        // console.log(currentday);
        if (currentday == 0) {
            currentday = 7;
        }
        // console.log(currentday);
        var separate = 1 - currentday;
        for (var i = 1; i <= dateTd.length; i++) {
            time.setFullYear(currentYear, currentMonth, i + separate);
            var month = time.getMonth();
            dateTd[i - 1].innerText = time.getDate();
            if (currentMonth == month) {
                dateTd[i - 1].className = 'canChoose';
            } else {
                dateTd[i - 1].className = 'calWeekendDay';
            }
        }
    }
    chrangeTd(splitString(browDate.innerText));

    caledarTable.addEventListener('click', function (e) {
        var td = e.target;
        if (td.className === 'canChoose') {
            selectATime(splitString(browDate.innerText), td.innerText);
        }
    })
    // 截至日期早于当前日期
    function selectATime(arr, num) {
        var nowTime = new Date();
        var selectTime = new Date();
        selectTime.setFullYear(arr[1], monthArr.indexOf(arr[0]), num);
        if (nowTime > selectTime) {
            alert('截止日期早于当前日期');
            return;
        }
        caledarDdl.innerText = selectTime.getFullYear() + '-' + (selectTime.getMonth() + 1) + '-' + selectTime.getDate();
        ddl.innerText = caledarDdl.innerText;
        saveWinDdl.innerText = '(此问卷截止日期为' + ddl.innerText +')';
        zhe.style.display = 'none';
        caledarWin.style.display = 'none';
    }

    //跳出日历选中窗口
    ddl.addEventListener('click', function () {
        zhe.style.display = 'block';
        caledarWin.style.display = 'block';
    })

    //添加问题
    addQuestionButton.addEventListener('click', function () {
        chooseButton.style.display = 'flex';
    })
})