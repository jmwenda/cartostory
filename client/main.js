$(function() {
  $(window).resize(function() {
    $('#map').css('height', window.innerHeight);
  });
  $(window).resize(); // trigger resize event
});
