
window.addEventListener('DOMContentLoaded', function () {
    var title = document.querySelector('.lyric-title');
    var content = document.querySelector('.lyric-content');
    var enmove = document.querySelector('.lyric-move.en');
    var krmove = document.querySelector('.lyric-move.kr');
    var end = document.querySelector('.lyric-end');

    var html = document.documentElement;
    var docHeight = html.scrollHeight;
    var maxY = docHeight - window.innerHeight;
    history.scrollRestoration = "manual"
    var cover = document.querySelector('.cover');

    var album = document.querySelector('.music-image');
    var info = document.querySelector('.music-info');
    var logo = document.querySelector('.logo');
    var vdoLink = document.querySelector('.vdoLink');

    var lecord = document.querySelector('.lecord');
    var albumCover = document.querySelector('.album-cover');

    var langBtn = document.querySelectorAll('.lang span');


    var cursor = document.querySelector('.mouse');
    var link = document.querySelectorAll('a');



    lyricPageShow();
    setTimeout(() => {
        album.style = "opacity:1;"
    }, 200);
    album.addEventListener('transitionend', function () {
        logo.style = "top:35px;"
    });
    logo.addEventListener('transitionend', function () {
        info.style = " top:35px;"
    });
    info.addEventListener('transitionend', function () {
        cover.style = "left:100%;"
    });


    langBtn[1].classList.add('on');

    langBtn.forEach(langBtn => {
        langBtn.addEventListener('click', function (e) {

            if (langBtn.nextElementSibling != null)
                langBtn.nextElementSibling.classList.remove('on')
            if (langBtn.previousElementSibling != null)
                langBtn.previousElementSibling.classList.remove('on')
            enmove.classList.remove('on');
            krmove.classList.remove('on');
            if (this.classList.contains('kr')) {
                this.classList.add('on')
                krmove.classList.add('on');
            }
            if (this.classList.contains('en')) {
                this.classList.add('on')
                enmove.classList.add('on');
            }
        });
    });

    function lyricPageShow() {
        var page = document.querySelector('.lyric-page');
        page.classList.add('active')

        title.classList.add('show');
        window.addEventListener("scroll", scrollAct)
    }
    function scrollAct() {
        var moveUnit = 0;
        if (window.scrollY >= 0 && window.scrollY < maxY * 0.1) {
            end.classList.remove('show');
            content.classList.remove('show');
            if (title.classList.contains('show')) {
            }
            else {
                title.classList.add('show');
            }
            lecord.style = "right:0%;transition:2s;"
            lecord.classList.remove('active');
            albumCover.classList.remove('active');

        };

        if (window.scrollY >= maxY * 0.1 && window.scrollY <= maxY * 0.9) {

            end.classList.remove('show');
            title.classList.remove('show');
            if (content.classList.contains('show')) {
            }
            else {
                content.classList.add('show');
            }
            moveUnit = -80 - 35 + (window.scrollY / (maxY * 0.9 / 280))
            console.log(moveUnit);
            krmove.style = " transform: translateY(" + -moveUnit + "%);"
            enmove.style = " transform: translateY(" + -moveUnit + "%);"


            lecord.style = "right:70%;transition:1s;"
            lecord.classList.add('active');
            albumCover.classList.add('active');


        }
        if (window.scrollY > maxY * 0.9 && window.scrollY < maxY) {
            title.classList.remove('show');
            content.classList.remove('show');
            if (end.classList.contains('show')) {
            }
            else {
                end.classList.add('show');
            }
            lecord.style = "right:0%;transition:2s;"
            lecord.classList.remove('active');
            albumCover.classList.remove('active');
        }
        if (window.scrollY >= maxY) {
            return;
        }


    };

    document.addEventListener('mousemove', mouseMove)

    function mouseMove(e) {

        var _x = e.clientX;
        var _y = e.clientY;
        cursor.style = '-webkit-transform:translate(' + _x + 'px,' + _y + 'px) translate(-50%, -50%);',
            'transform:translate(' + _x + 'px,' + _y + 'px) translate(-50%, -50%);';
    };

    logo.addEventListener('mouseenter', mouseenter);
    logo.addEventListener('mouseout', mouseout);
    langBtn.forEach(btn => {
        btn.addEventListener('mouseenter', mouseenter);
        btn.addEventListener('mouseout', mouseout);
    });
    link.forEach(link => {
        link.addEventListener('mouseenter', mouseenter);
        link.addEventListener('mouseout', mouseout);
    });
    function mouseenter() {

        cursor.classList.add('active');
    };
    function mouseout() {
        cursor.classList.remove('active');
    };
});
