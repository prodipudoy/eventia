$(document).ready(function(){
	 // Smooth scroll
	 $("#navigation li a").click(function(e) {
	 	e.preventDefault();

	 	var targetElement = $(this).attr("href");
	 	var targetPosition = $(targetElement).offset().top;
	 	$("html, body").animate({ scrollTop: targetPosition - 65 }, "slow");

	 });

    // owl carousel
    $('.owl-carousel').owlCarousel({
    	items:3,
    	margin: 15,
    	autoplay: true,
    	loop: true,
    	responsive:{
				  	// breakpoint from 0 up
				  	0 : {
				  		items:1
				  	},
				    // breakpoint from 480 up
				    480 : {
				    	items:1,
				    	margin:20
				    },
				    // breakpoint from 768 up
				    768 : {
				    	items:3
				    }
				}
			});
    //
    $(window).scroll(function(){
            if($(this).scrollTop() <600 ){
            	$('nav').removeClass('overlay');
                $(".back-to-top").fadeOut();
            }else{
            	$('nav').addClass('overlay');
                $(".back-to-top").fadeIn();
            }
        });

        $('.back-to-top').click(function(){ 
	        $("html, body").animate({ scrollTop: 0 }, 600); 
	        return false; 
	    });

	    // wow jquery plugin
	    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

});