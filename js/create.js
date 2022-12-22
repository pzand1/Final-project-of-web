window.addEventListener('load', function () {
    var create_bottom = document.getElementsByClassName('create');
    clickSkip(create_bottom[0], './Edit_Page.html');

    //当前的问卷数量
    this.window.questionnaireNumber = 0;
    this.window.questionArray=[];
})