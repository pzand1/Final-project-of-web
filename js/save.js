var isSave = false;

//页面加载，如果没有任何修改就加载初始页面，如果点击保存后应保留原本编辑的数据
window.onload = function(){
    if(localStorage.getItem('IsSave') == false || localStorage.getItem('IsSave') == null){
        localStorage.setItem('ProblemNumber',3);
        localStorage.setItem('presentProblem',3);
        return;
    }
    var h1 = document.getElementsByTagName('h1')[0];
    var ddl = document.getElementsByClassName('ddl');
    var date = document.getElementsByClassName('date')[0];
    var arr = document.getElementsByClassName('select');

    var a = localStorage.getItem('questionnaire');
    var b = JSON.parse(a);
    //修改标题，截止日期，问卷内容
    h1.innerText = b.Title;
    ddl[0].innerHTML = b.Deadline;
    ddl[1].innerHTML = b.Deadline;
    date.innerHTML = '(此问卷截止日期为' + b.Deadline + ')';
    for (var i = 0; i < b.Question.length; i++) {
        if(arr[i] == undefined){
            var li = document.createElement("li");
            if(b.Question[i].Type == "文本题"){
                li.innerHTML = arr[2].innerHTML;
            }else if(b.Question[i].Type == "多选题"){
                li.innerHTML = arr[1].innerHTML;
            }else{
                li.innerHTML = arr[0].innerHTML;
            }
            li.className = "select";
            arr[i-1].parentNode.append(li);
        }
        var number = arr[i].getElementsByTagName('div')[0];
        var type = arr[i].getElementsByClassName('context')[0];
        var brr = arr[i].getElementsByClassName('substance');

        number.innerText = b.Question[i].Number;
        type.innerText = b.Question[i].Type;
        for (var j = 0; j < brr.length; j++) {
            brr[j].innerText = b.Question[i].Content[j];
        }
    }
}

function save() {
    // 问卷json
    var h1 = document.getElementsByTagName('h1')[0];
    var ddl = document.getElementsByClassName('ddl')[0];
    var date = {
        Title: h1.innerText,
        Question: [],
        Deadline: ddl.innerText,
        ReleseDate: getDate(),
    };
    // 问题json, 多个问题json构成问卷json,arr是问题数组,brr是一个问题里的选项数组
    var arr = document.getElementsByClassName('select');
    for (var i = 0; i < arr.length; i++) {
        var number = arr[i].getElementsByTagName('div')[0];
        var type = arr[i].getElementsByClassName('context')[0];
        var content = [];
        var brr = arr[i].getElementsByClassName('substance');
        for (var j = 0; j < brr.length; j++) {
            content.push(brr[j].innerHTML);
        }
        var question = {
            Number: number.innerText,
            Type: type.innerText,
            Content: content,
        };
        date.Question.push(question);
    }
    localStorage.setItem('questionnaire', JSON.stringify(date));
    isSave = true;
    localStorage.setItem('IsSave',isSave);
    localStorage.setItem('presentProblem',cnd);
    localStorage.setItem('ProblemNumber',localStorage.getItem('presentProblem'));
}





function getDate() {
    var myDate = new Date;
    var year = myDate.getFullYear();
    var mon = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    var now = year + "-" + mon + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    return now;
}
