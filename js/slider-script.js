// Inicializa o Coin Slider. Precisa ser chamado DEPOIS que o #slider
// entra no DOM (ou seja, depois do fetch injetar o home.html no <main>).
function initSlider() {

    // Evita reinicializar se o slider já foi montado nesta carga do #slider
    if ($('#slider').data('coinslider-init')) return;

    $('#slider').coinslider({
        width: 1360,
        height: 617,
        navigation: true,
        hoverPause: true,
        delay: 8000
    });

    $('#slider').data('coinslider-init', true);
}

window.initSlider = initSlider;
