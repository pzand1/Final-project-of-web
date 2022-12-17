window.addEventListener('load', function () {
    //添加问卷按钮
    var addQuestion = document.getElementsByClassName('addQuestionnaire');
    clickSkip(addQuestion[0], './Edit_Page.html');

    //全选框功能
    var button = document.getElementsByTagName('input');
    var allSelectButton = button[button.length - 1];
    for (var i = 0; i < button.length - 1; i++) {
        button[i].addEventListener('click', function () {
            var temp = true;
            for (var i = 0; i < button.length - 1; i++) {
                if (!button[i].checked) {
                    temp = false;
                    break;
                }
            }
            allSelectButton.checked = temp;
        })
    }

    // 全选按钮事件
    allSelectButton.addEventListener('click', function () {
        for (var i = 0; i < button.length - 1; i++) {
            button[i].checked = allSelectButton.checked;
        }
    })

    //具体问卷按钮功能
    var tbody = this.document.getElementsByTagName('tbody');
    var allQuestion = tbody[0].getElementsByTagName('tr');
    for (var i = 0; i < allQuestion.length; i++) {
        var thisQuestion = allQuestion[i];
        var questionBottom = thisQuestion.getElementsByClassName('bottom');
        clickSkip(questionBottom[0], './Edit_page.html?' + i);
        clickSkip(questionBottom[2], './view_survey.html?' + i);
        questionBottom[1].addEventListener('click', function () {
            zhe[0].style.display = 'block';
            deleteWindow[0].style.display = 'block';
            this.parentNode.parentNode.setAttribute('select', 1);
        })
    }

    var fun = this.document.getElementsByClassName('fun');
    var SelectBottoms = fun[0].getElementsByClassName('delete');
    SelectBottoms[0].addEventListener('click', function () {
        zhe[0].style.display = 'block';
        deleteWindow[0].style.display = 'block';
        SelectBottoms[0].setAttribute('select', 1);
    });


    var zhe = document.getElementsByClassName('zhe');
    var deleteWindow = document.getElementsByClassName('deleteQuestion');
    var cha = deleteWindow[0].getElementsByClassName('cha');
    var deleteBottom = deleteWindow[0].getElementsByClassName('box_style');
    clickNone(cha[0], zhe[0], deleteWindow[0], allQuestion);
    clickNone(deleteBottom[0], zhe[0], deleteWindow[0]);
    clickNone(deleteBottom[1], zhe[0], deleteWindow[0], allQuestion);
    deleteBottom[0].addEventListener('click', function () {
        if (SelectBottoms[0].getAttribute('select')) {
            for (var i = 0; i < button.length - 1; i++) {
                if (button[i].checked) {
                    tbody[0].removeChild(button[i].parentNode.parentNode);
                    i = -1;
                }
            }
            allSelectButton.checked = 0;
        } else {
            for (var i = 0; i < allQuestion.length; i++) {
                var thisQuestion = allQuestion[i];
                if (thisQuestion.getAttribute('select')) {
                    tbody[0].removeChild(thisQuestion);
                    break;
                }
            }
        }
    })
})