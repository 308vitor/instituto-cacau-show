const menuBotao = document.querySelector("#menuBotao");
const menuPrincipal = document.querySelector("#menuPrincipal");

menuBotao.addEventListener("click", () => {
    const menuAberto = menuPrincipal.classList.toggle("aberto");

    menuBotao.setAttribute("aria-expanded", menuAberto);
    menuBotao.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuBotao.textContent = menuAberto ? "×" : "☰";
});

// Fecha o menu quando o usuário escolhe um link.
const linksMenu = document.querySelectorAll(".navegacao a");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menuPrincipal.classList.remove("aberto");
        menuBotao.setAttribute("aria-expanded", "false");
        menuBotao.setAttribute("aria-label", "Abrir menu");
        menuBotao.textContent = "☰";
    });
});