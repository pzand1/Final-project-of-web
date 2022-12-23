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
    saveWinDdl.innerText = '(此问卷截止日期为' + ddl.innerText + ')';

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
        saveWinDdl.innerText = '(此问卷截止日期为' + ddl.innerText + ')';
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

    //添加具体问题
    var addQuestion1 = chooseButton.getElementsByTagName('div')[0];
    var addQuestion2 = chooseButton.getElementsByTagName('div')[1];
    var addQuestion3 = chooseButton.getElementsByTagName('div')[2];
    var question1 = document.getElementsByClassName('select')[0].innerHTML;
    var question2 = document.getElementsByClassName('select')[1].innerHTML;
    var question3 = document.getElementsByClassName('select')[2].innerHTML;
    this.window.cnd = localStorage.getItem('presentProblem');
    if(cnd == null){
        cnd = 3;
    }
    cnd = parseInt(cnd);
    addQuestion1.addEventListener('click', function () {
        // 用了querySelector就没问题
        cnd += 1;
        var content = document.querySelector('.content');
        content.innerHTML = content.innerHTML + '<li class="select">' + question1 + '</li>';
        var number = document.getElementsByClassName('number')[cnd - 1];
        number.innerHTML = 'Q' + cnd;
        chooseButton.style.display = 'none';
    })

    addQuestion2.addEventListener('click', function () {
        cnd += 1;
        var content = document.querySelector('.content');
        content.innerHTML = content.innerHTML + '<li class="select">' + question2 + '</li>';
        var number = document.getElementsByClassName('number')[cnd - 1];
        number.innerHTML = 'Q' + cnd;
        chooseButton.style.display = 'none';
    })

    addQuestion3.addEventListener('click', function () {
        cnd += 1;
        var content = document.querySelector('.content');
        content.innerHTML = content.innerHTML + '<li class="select">' + question3 + '</li>';
        var number = document.getElementsByClassName('number')[cnd - 1];
        number.innerHTML = 'Q' + cnd;
        chooseButton.style.display = 'none';
    })


    ////加载初始数据
    // if (localStorage.getItem('IsSave') == false || localStorage.getItem('IsSave') == null) {
    //     localStorage.setItem('ProblemNumber', 3);
    //     localStorage.setItem('presentProblem', 3);
    //     return;
    // }
    // var h1 = document.getElementsByTagName('h1')[0];
    // var ddl = document.getElementsByClassName('ddl');
    // var date = document.getElementsByClassName('date')[0];
    // var arr = document.getElementsByClassName('select');

    // var a = localStorage.getItem('questionnaire');
    // var b = JSON.parse(a);
    
    // h1.innerText = b.Title;
    // ddl[0].innerHTML = b.Deadline;
    // ddl[1].innerHTML = b.Deadline;
    // date.innerHTML = '(此问卷截止日期为' + b.Deadline + ')';
    // for (var i = 0; i < b.Question.length; i++) {
    //     if (arr[i] == undefined) {
    //         var li = document.createElement("li");
    //         if (b.Question[i].Type == "文本题") {
    //             li.innerHTML = arr[2].innerHTML;
    //         } else if (b.Question[i].Type == "多选题") {
    //             li.innerHTML = arr[1].innerHTML;
    //         } else {
    //             li.innerHTML = arr[0].innerHTML;
    //         }
    //         li.className = "select";
    //         arr[i - 1].parentNode.append(li);
    //     }
    //     var number = arr[i].getElementsByTagName('div')[0];
    //     var type = arr[i].getElementsByClassName('context')[0];
    //     var brr = arr[i].getElementsByClassName('substance');

    //     number.innerText = b.Question[i].Number;
    //     type.innerText = b.Question[i].Type;
    //     for (var j = 0; j < brr.length; j++) {
    //         brr[j].innerText = b.Question[i].Content[j];
    //     }
    // }

})


// 设置文本框的innerHTML和value同步
function change(element) {
    element.innerHTML = element.value;
}

//设置点击文本动态编辑
function ShowElement(element) {
    var oldhtml = element.innerHTML;
    var newobj = document.createElement('input');
    newobj.type = 'text';
    newobj.value = oldhtml;
    newobj.onblur = function () {
        //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值 
        element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
        //当触发时设置父节点的双击事件为ShowElement
        element.setAttribute("ondblclick", "ShowElement(this);");
    }
    element.innerHTML = '';
    element.appendChild(newobj);
    newobj.setSelectionRange(0, oldhtml.length);
    newobj.focus();
    newobj.parentNode.setAttribute("ondblclick", "");

}

//上移功能
function moveUp(element) {
    var oUl = document.getElementsByClassName('content')[0];
    var obj = element.parentNode.parentNode.parentNode.parentNode;
    if (obj == oUl.children[0]) {
        alert('不能上移了！');
    } else {
        //跳过空白字符
        var obj1 = obj.previousSibling;
        while (obj1.innerHTML == undefined) {
            obj1 = obj1.previousSibling;
        }
        // 把obj插入到obj1前面
        oUl.insertBefore(obj, obj1);
        //更改问题编号
        var quesNumber1 = obj.getElementsByTagName('div')[0];
        var quesNumber2 = obj1.getElementsByTagName('div')[0];

        var temp = quesNumber1.innerHTML;
        quesNumber1.innerHTML = quesNumber2.innerHTML;
        quesNumber2.innerHTML = temp;
    }
}

//下移功能
function moveDown(element) {
    var oUl = document.getElementsByClassName('content')[0];
    var obj = element.parentNode.parentNode.parentNode.parentNode;
    if (obj == oUl.lastElementChild) {
        alert('不能下移了！');
    } else {
        //跳过空白字符
        var obj1 = obj.nextSibling;
        while (obj1.innerHTML == undefined) {
            obj1 = obj1.nextSibling;
        }
        // 把obj插入到obj1前面
        oUl.insertBefore(obj1, obj);
        //更改问题编号
        var quesNumber1 = obj.getElementsByTagName('div')[0];
        var quesNumber2 = obj1.getElementsByTagName('div')[0];

        var temp = quesNumber1.innerHTML;
        quesNumber1.innerHTML = quesNumber2.innerHTML;
        quesNumber2.innerHTML = temp;
    }
}

//复用功能
function copy(element) {
    cnd += 1;
    var obj = element.parentNode.parentNode.parentNode.parentNode;
    var content = document.querySelector('.content');
    content.innerHTML = content.innerHTML + '<li class="select">' + obj.innerHTML + '</li>';
    var number = document.getElementsByClassName('number')[cnd - 1];
    number.innerHTML = 'Q' + cnd;
}

//删除功能
function cutOf(element) {
    cnd -= 1;
    var ul = document.getElementsByClassName('content')[0].childNodes;
    var obj = element.parentNode.parentNode.parentNode.parentNode;
    var len = ul.length;
    for (var i = 0; i < len; i++) {
        if (ul[i] == obj) {
            ul[i].parentNode.removeChild(ul[i]);
            //更改后面的问题编号
            for (var j = i; j < len; j++) {
                if (ul[j] != undefined && ul[j].innerHTML != undefined) {
                    var temp = ul[j].getElementsByTagName('div')[0];
                    var a = parseInt(String(temp.innerHTML).slice(1)) - 1;
                    temp.innerHTML = 'Q' + a;
                }
            }
            break;
        }
    }
}


