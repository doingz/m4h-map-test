$(document).ready(function() {

  w = $(window).width();
  h = $(window).height();


  $('.size').click(function() {

    $('.size').removeClass('active');

    s = $(this).data('stock');

    $('.stk').html(s);

    $('.stock').addClass('active');

    $(this).addClass('active');

    $('.snipcart-add-item').attr('data-item-id', $(this).data('id'));

    $('.snipcart-add-item').attr('data-item-custom1-value', $(this).data('size'));

    $('.snipcart-add-item').removeClass('disabled');

  });


  $('.color').click(function() {

    $('.color').removeClass('active');

    s = $(this).data('stock');

    $('.stk').html(s);

    $('.stock').addClass('active');

    $(this).addClass('active');

    $('.snipcart-add-item').attr('data-item-id', $(this).data('id'));

    $('.snipcart-add-item').attr('data-item-custom1-value', $(this).data('color'));

    $('.snipcart-add-item').removeClass('disabled');

  });


});

$(window).on('load', function() {

  $('body').addClass('loaded');

});
