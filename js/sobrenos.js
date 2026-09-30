/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuBotao = document.getElementById("menuBotao");
const menuPrincipal = document.getElementById("menuPrincipal");
const cabecalho = document.querySelector(".cabecalho");

menuBotao.addEventListener("click", function () {

    const menuAberto = !cabecalho.classList.contains("menu-aberto");

    cabecalho.classList.toggle("menu-aberto", menuAberto);
    menuPrincipal.classList.toggle("menu-aberto", menuAberto);

    menuBotao.setAttribute(
        "aria-expanded",
        menuAberto
    );

    menuBotao.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

});


/* =========================================================
   FUNÇÃO PARA FECHAR O MENU
   ========================================================= */

function fecharMenu() {

    cabecalho.classList.remove("menu-aberto");
    menuPrincipal.classList.remove("menu-aberto");

    menuBotao.setAttribute("aria-expanded", "false");

    menuBotao.setAttribute(
        "aria-label",
        "Abrir menu"
    );

}


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
   ========================================================= */

const linksMenu = menuPrincipal.querySelectorAll("a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        fecharMenu();

    });

});


/* =========================================================
   FECHAR MENU AO CLICAR FORA
   ========================================================= */

document.addEventListener("click", function (evento) {

    const clicouNoMenu = menuPrincipal.contains(evento.target);
    const clicouNoBotao = menuBotao.contains(evento.target);

    if (
        cabecalho.classList.contains("menu-aberto") &&
        !clicouNoMenu &&
        !clicouNoBotao
    ) {

        fecharMenu();

    }

});


/* =========================================================
   FECHAR MENU AO PRESSIONAR ESC
   ========================================================= */

document.addEventListener("keydown", function (evento) {

    if (
        evento.key === "Escape" &&
        cabecalho.classList.contains("menu-aberto")
    ) {

        fecharMenu();

        menuBotao.focus();

    }

});


/* =========================================================
   AJUSTAR MENU AO REDIMENSIONAR A TELA
   ========================================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        fecharMenu();

    }

});