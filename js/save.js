var isSave = false;
//当前的问卷数组
questionArray = [];
questionNUmber = 0;


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

function save() {
    // 问卷json
    var h1 = document.getElementsByTagName('h1')[0];
    var ddl = document.getElementsByClassName('ddl')[0];
    var date = {
        Title: h1.innerText,
        Question: [],
        Deadline: ddl.innerText,
        ReleseDate: getDate(),
        IsPublish: '未发布',
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
    localStorage.setItem('IsSave', isSave);
    localStorage.setItem('presentProblem', cnd);
    localStorage.setItem('ProblemNumber', localStorage.getItem('presentProblem'));


    questionNUmber = localStorage.getItem('questionNumber') == null ? 1 : localStorage.getItem('questionNumber');
    questionArray = localStorage.getItem('questionArray') == null ? [] : JSON.parse(localStorage.getItem('questionArray'));

    //更改数值
    questionNUmber = parseInt(questionNUmber) + 1;
    var questionnair = JSON.parse(localStorage.getItem('questionnaire'));
    questionArray.push(questionnair);
    //填入locoal存储
    localStorage.setItem('questionArray', JSON.stringify(questionArray));
    localStorage.setItem('questionNumber', questionNUmber);

    var body = document.getElementsByClassName('body')[0];
    clickSkip(body, './survey_list.html');
}

function publish() {
    // if(isSave == false){
    //     save();
    // }

    // questionArray = localStorage.getItem('questionArray') == null ? [] : JSON.parse(localStorage.getItem('questionArray'));
    // var questionnair = JSON.parse(localStorage.getItem('questionnaire'));
    // questionnair.IsPublish = '已发布';
    // questionArray.push(questionnair);
    // localStorage.setItem('questionArray', JSON.stringify(questionArray));


    // localStorage.removeItem('ProblemNumber');
    // localStorage.removeItem('presentProblem');
    // localStorage.removeItem('questionnaire');
    // localStorage.removeItem('IsSave');

    // var body = document.getElementsByClassName('body')[0];
    // clickSkip(body, './survey_list.html');

    // 问卷json
    var h1 = document.getElementsByTagName('h1')[0];
    var ddl = document.getElementsByClassName('ddl')[0];
    var date = {
        Title: h1.innerText,
        Question: [],
        Deadline: ddl.innerText,
        ReleseDate: getDate(),
        IsPublish: '已发布',
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
    localStorage.setItem('IsSave', isSave);
    localStorage.setItem('presentProblem', cnd);
    localStorage.setItem('ProblemNumber', localStorage.getItem('presentProblem'));


    questionNUmber = localStorage.getItem('questionNumber') == null ? 1 : localStorage.getItem('questionNumber');
    questionArray = localStorage.getItem('questionArray') == null ? [] : JSON.parse(localStorage.getItem('questionArray'));

    //更改数值
    questionNUmber = parseInt(questionNUmber) + 1;
    var questionnair = JSON.parse(localStorage.getItem('questionnaire'));
    questionArray.push(questionnair);
    //填入locoal存储
    localStorage.setItem('questionArray', JSON.stringify(questionArray));
    localStorage.setItem('questionNumber', questionNUmber);
    localStorage.removeItem('ProblemNumber');
    localStorage.removeItem('presentProblem');
    localStorage.removeItem('questionnaire');
    localStorage.removeItem('IsSave');
    var body = document.getElementsByClassName('body')[0];
    clickSkip(body, './survey_list.html');

}