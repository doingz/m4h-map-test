$(document).ready(function() {

  w = $(window).width();
  h = $(window).height();

  $('.map-holder').scrollLeft(1200);
  $('.map-holder').scrollTop(200);


  $('.pointer').mouseenter(function() {

    id = parseInt($(this).attr('id').replace('p',''));
    project = '#project' + id;
    $(project).addClass('active');

  });


  $('.pointer').mouseleave(function() {

    id = parseInt($(this).attr('id').replace('p',''));
    project = '#project' + id;
    $(project).removeClass('active');

  });


  $('.pointer').click(function() {

    alert('Lorem ipsum ..')

  });


});

$(window).on('load', function() {

  $('body').addClass('loaded');

});
