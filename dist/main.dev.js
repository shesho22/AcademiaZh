"use strict";

$(document).ready(function () {
  $("#open").on("click", function () {
    $("#popup").fadeIn("slow");
    $('#popup').css('display', 'flex');
  });
  $("#close").on("click", function () {
    $("#popup").fadeOut("slow");
  });
});