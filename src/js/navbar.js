import $ from "jquery";
import "../css/navbar.css";
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-section");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });