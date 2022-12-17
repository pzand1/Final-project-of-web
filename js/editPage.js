window.addEventListener('load', function () {
    var lastButtom = document.getElementsByClassName('lastButtom');
    var SaveButtom = lastButtom[1];
    var publishButtom = lastButtom[0];

    var zhe = document.getElementsByClassName('zhe')[0];
    var pubWin = this.document.getElementsByClassName('deleteQuestion')[0];
    var cha = pubWin.getElementsByClassName('cha')[0];
    var yesToPublish = pubWin.getElementsByClassName('yes')[0];
    var noToPublish = pubWin.getElementsByClassName('no')[0];
    
    clickNone(cha, zhe, pubWin);
    clickNone(yesToPublish, zhe, pubWin);
    clickNone(noToPublish, zhe, pubWin);
    yesToPublish.addEventListener('click', function(){
        ;
    })

    publishButtom.addEventListener('click', function () {
        zhe.style.display = 'block';
        pubWin.style.display = 'block';
    })
})