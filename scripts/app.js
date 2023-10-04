$(document).ready(function () {
  $(".popular-slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'</i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'</i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: "unslick",
      },
    ],
  });
});
