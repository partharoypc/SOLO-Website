/*=======================================
       | | | | Preloder | | | | ||||
=======================================*/
$(window).on('load', function () {

	$('#status').fadeOut();
	$('#preloader').delay(100).fadeOut('slow');
});

/*=======================================
       | | | | Team | | | | ||||
=======================================*/

$(function () {
	$("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class=" fa fa-angle-left"></i>', '<i class=" fa fa-angle-right"></i>']

	});
});

/*=======================================
       | | | | Progress Bar| | | | ||||
=======================================*/

$(function () {

	$("#progress-elements").waypoint(function () {
		$(".progress-bar").each(function () {
			$(this).animate({
				width: $(this).attr("aria-valuenow") + "%"

			}, 1000);

		});
		this.destroy();
	}, {
		offset: 'bottom-in-view'
	});

});


/*=======================================
       | | | | Responsive Tabs| | | | ||||
=======================================  */
$(function () {
	$("#services-tabs").responsiveTabs({
	
	animation: 'slide',

	});

});





/*=======================================
       | | | | Testimonial| | | | ||||
=======================================*/

$(function () {
	$("#testimonial-slider").owlCarousel({
		items: 1,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class=" fa fa-angle-left"></i>', '<i class=" fa fa-angle-right"></i>']

	});
});


/*=======================================
       | | | | Stars| | | | ||||
=======================================*/

$(function(){
	$(".counter").counterUp({
		delay:10,
		time:2000
		
	});
	
});


/*=======================================
       | | | | Clint | | | | ||||
=======================================*/

$(function () {
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class=" fa fa-angle-left"></i>', '<i class=" fa fa-angle-right"></i>']

	});
});










