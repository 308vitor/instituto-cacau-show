let btn = document.getElementById("btnmenu");
let menu = document.getElementById("menu");
let menuclose = document.getElementById("menuclose");


if (btn) {

    btn.addEventListener("click", function () {

        menu.classList.add("isOpen");

    });

}


if (menuclose) {

    menuclose.addEventListener("click", function () {

        menu.classList.remove("isOpen");

    });

}