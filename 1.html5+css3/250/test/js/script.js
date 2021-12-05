var page = document.getElementsByClassName("page");
var page2 = document.getElementsByClassName("page2");
for (var i = 0; i < page.length; i++) {
    page[i].style.width = window.screen.width + "px";
}
for (var i = 0; i < page2.length; i++) {
    page2[i].style.height = window.screen.height + "px";
}

document.getElementsByClassName("box")[0].style.width = window.screen.width + "px";
document.getElementsByTagName("body")[0].style.width = page.length * window.screen.width + "px";



var mouse = document.querySelector('.mouse');
var box = document.querySelector('.box');

box.onmouseenter = function () {
    mouse.style.opacity = 1;
}

box.onmousemove = function (event) {
    var x = event.clientX;
    var y = event.clientY;

    mouse.style.left = x - 150 + 'px';
    mouse.style.top = y - 150 + 'px';
}

box.onmouseleave = function () {
    mouse.style.opacity = 0;
}

