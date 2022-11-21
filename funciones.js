$("#menu").click(function(){
    $("#contenedormenu").slideToggle();
});

$(function () {
    $("#slider4").responsiveSlides({
      auto: false,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });
  });
  // Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  //el elemento que tenga el href 
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000 //tiempo para desplazar
  );

  //esta line de código hace que cuando vayamos al vinculo este menu se cierre y no tengamos que cerrarlo cada que vez que regresamos 
  $("#contenedormenu").toggleClass("abrirmenu");
});

  //para el botón subir
  $(document).ready(function () {
    $("#subir").click(function () {
      $("html,body").animate(
        {
          scrollTop: "0px",
        },
        1000
      );
    });
  });
  new WOW().init();