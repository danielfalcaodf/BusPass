$(document).ready(function () {

    $('.menu-button ion-icon').on("click", function(){
        $('.menu-lista').toggleClass('menu-lista-ativado');// abre menu
      $('.sidebar-overlay').toggleClass('overlay-active');
    })

    $('.menu-close ion-icon').on("click", function(){
        $('.menu-lista').toggleClass('menu-lista-ativado'); //fecha menu
      $('.sidebar-overlay').toggleClass('overlay-active');
    });
})