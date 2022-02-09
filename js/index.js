$(document).ready(function() {

  w = $(window).width();
  h = $(window).height();

  $('.map-holder').scrollLeft(400);
  $('.map-holder').scrollTop(400);


  $('.pointer').mouseenter(function() {

    id = parseInt($(this).attr('id').replace('p', ''));
    project = '#project' + id;
    $(project).addClass('active');

  });


  $('.pointer').mouseleave(function() {

    id = parseInt($(this).attr('id').replace('p', ''));
    project = '#project' + id;
    $(project).removeClass('active');

  });


  $('.pointer').click(function() {

    alert('Lorem ipsum ..')

  });

  $(".zoomin").click(function() {

    $(".map-transform").addClass('zoomed');

  });

  $(".zoomout").click(function() {

    $(".map-transform").removeClass('zoomed');

  });


});

$(window).on('load', function() {

  $('body').addClass('loaded');

});
