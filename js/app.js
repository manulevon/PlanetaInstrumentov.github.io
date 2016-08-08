// document.body.addEventListener('keydown', function(e) {
// 	if (e.keyCode === 40) {

// 		window.scrollBy( 0, 100);

// 	} else if (e.keyCode === 38) {

// 		window.scrollBy( 0, -100);

// 	} 
// });

var elem = document.querySelector('.main-carousel');

var flkty = new Flickity( elem, {

	cellAlign: 'left',
	contain: true,
	setGallerySize: false,
	pageDots: false,
	autoPlay: 2000,
	wrapAround: true

});

ymaps.ready(function () {

	var myMap = new ymaps.Map('YMapsID', {
		center: [47.223363, 39.689787],
		zoom: 16
	});

	var myPlacemark = new ymaps.Placemark([47.223363, 39.689787], {

		balloonContentBody: 'Планета инструментов',
		hintContent: 'Планета инструментов'

	});


	myMap.geoObjects.add(myPlacemark);

});