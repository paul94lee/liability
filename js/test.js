window.addEventListener("DOMContentLoaded", function () {
    var lecord = document.querySelector('.lecord');
    var btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        lecord.style = "left:15%;transition:1s;"
        lecord.classList.add('active');
    });
});