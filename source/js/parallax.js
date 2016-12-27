$(document).ready(function () {

	var layer = $('.parallax').find('.parallax__layer');

	layer.map(function (key, value) {
		var bottomPosition = (window.innerHeight / 2) * (key / 100);
	
		$(value).css({
			'bottom' : '-'+bottomPosition+'px',
			'transform': 'transform3d(0px,0px, 0)'
		});
	});

	$(window).on('mousemove', function (e) {
		
		var mouse_dx = e.pageX;
		var mouse_dy = e.pageY;
		
		var w = (window.innerWidth / 2) - mouse_dx;
		var h = (window.innerHeight / 2) - mouse_dy;
		
		layer.map(function (key, value) {
			var bottomPosition = (window.innerHeight / 2) * (key / 100);
			var widthPosition = w * (key / 100);
			var heightPosition = h * (key / 100);

			$(value).css({
				'bottom' : '-'+bottomPosition+'px',
				'transform': 'transform3d('+widthPosition+'px,'+heightPosition+'px, 0)'
			});
		});
	});
});