//PARA LOS DEMAS
//
//$('#container h1').after('<p class="resaltado">Este texto ha sido añadido dinámicamente</p>');



//PARA REMOVE Y UNWRAP
//
//$('#item_list li:nth-child(3)').remove();



/*--------------CARGAS--------------*/
$('html').toggleClass('js no-js');


$('#page-nav>li:first-child').addClass('current');

$(document).ready(function () {
    $('#page-nav').onePageNav();
});



/* ------------------ EVENTOS------------------ */


/*MENU PRINCIPAL _Desplegar/Plegar*/

$('#btnMenu').on('click', function () {
    $('#menu').toggleClass('move');
});

$('#btnMenu').on('click', function () {
    $('#btnMenu').toggleClass('cerrar');
});




$('#social-icon a:last-of-type').on('click', function () {
    $('#social-icon > span').toggleClass('correo');
});

/*ONE PAGE NAV*/

//$('#page-nav').onePageNav({
//    currentClass: 'current',
//    changeHash: false,
//    scrollSpeed: 200,
//    scrollThreshold: 0,
//    filter: '',
//    easing: 'swing',
//    begin: function () {
//        //I get fired when the animation is starting
//    },
//    end: function () {
//        //I get fired when the animation is ending
//    },
//    scrollChange: function ($currentListItem) {
//        //I get fired when you enter a section and I pass the list item of the section
//    }
//});

/*_______________________________________*/

//AL REBASAR EL TOP EL LOGO

var limite = 400;
//el limite es de 400 pixeles

$(window).on('scroll', function () {
    if ($(document).scrollTop() > limite) {
        $('html').addClass('logo_circle');
    } else {
        $('html').removeClass('logo_circle');
    }
});


/*________________________________________*/


//CAMBIAR A BLANCOS LOS PUNTOS DEL NAV-SECTION

$(window).on('scroll', function () {
    var limite = $(window).height() / 2; //el limite es la mitad de la ventana
    if ($(document).scrollTop() > limite) {
        $('html').addClass('umbral');
    } else {
        $('html').removeClass('umbral');
    }
});


/*_______________________________________*/
