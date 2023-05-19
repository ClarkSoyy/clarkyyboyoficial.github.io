var clark = document.getElementsByTagName('body')[0];
var ling = document.getElementById('label');
clark.addEventListener('click', function () {
    ling.classList.toggle('active');
    clark.classList.toggle('dark');
})

var ancher = document.getElementsByTagName('body')[0];
var anchers = document.getElementById('ancher');
ancher.addEventListener('click',function () {
    anchers.classList.toggle('actives');
    ancher.classList.toggle('change');
})

document.getElementById('ancher').onclick = function () {
    window.alert("GO Contact Me On fb. My Fb: Clark Panucat And we start Learning on Javascript")
}