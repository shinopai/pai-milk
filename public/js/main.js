$(function () {
  // slick
  $(".header__slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    pauseOnDotsHover: false,
  });

  // sp menu
  let menuIcon = $("#menu_icon");
  let spMenu = $("#sp_menu");
  let closeButton = $("#close_button");

  menuIcon.click(function () {
    spMenu.addClass("active");
    spMenu.animate(
      {
        top: 0,
      },
      500
    );
    menuIcon.addClass("inactive");
  });

  closeButton.click(function () {
    spMenu.animate(
      {
        top: -354,
      },
      500
    );
    // spMenu.removeClass("active");
    menuIcon.removeClass("inactive");
  });
});
