 document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "dark",
                       "navbars": [
                          {
                             "position": "top",
                             "content": [
                                "searchfield"
                             ]
                          }
                       ]
                    });
                }
            );
//////menu end ////////





///////counter start ////////

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 2;
  }

});


///////counter end ////////




//for slider ///////////
$('.banner-section .owl-carousel').owlCarousel({
      animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
    loop:true,
    margin:10,
    nav:false,
    items:1, 
   autoplayTimeout: 3000,
   autoplay: true,
  autoplayHoverPause: true,
})

//for slider ///////////

