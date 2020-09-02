document.addEventListener("DOMContentLoaded", function() {

	$('.main-slider').owlCarousel({
		nav: false,
		dots: true,
		autoWidth: false,
		items: 1
	});

	$('.pictures-slider').owlCarousel({
		nav: true,
		dots: false,
		autoWidth: true,
		// autoHeight: true,
		margin: 70,
		navText: ["<img class=\"pictures-slider__next-prev\" src='img/_src/arrow_gold_prev.svg'>","<img class=\"pictures-slider__next-prev pictures-slider__next\" src='img/_src/arrow_gold_prev.svg'>"]
	});

	// Фон для блока pic-categories
	$('.promo-categories__background').css({
		'border-width': $('.promo-categories').innerHeight() + 'px ' + $('.promo-categories').width() + 'px' + ' 0px 0px' 
	});

	// Инициализация сетки при загрузке страницы

	var $grid = $('.pic-masonry__container').imagesLoaded( function() {
	// init Masonry after all images have loaded
	$grid.masonry({
		itemSelector: '.pic-masonry__item',
		columnWidth: '.percent-size',
		gutter: '.masonry-gutter',
		percentPosition: true,
	});
	});

	$('.picture__img').each(function(index){
		$(this).attr('src', 'img/_src/catalog_' + (index + 1) +'.jpg' )
	})
});
