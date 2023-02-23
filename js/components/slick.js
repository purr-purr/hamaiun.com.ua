$(document).ready(function () {
	$('.reporting-slider-init').slick({
		// autoplay: true,
		// autoplaySpeed: 5000,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});