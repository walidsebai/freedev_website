var pContainerHeight = $('.intro').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

   $('.img').css({
      'transform' : 'translate(0px, '+ wScroll /3.0 +'%)'
    });


    $('.header-logo').css({'opacity': '0',
      'transition' : 'opacity 1s'
    });

  }

});
