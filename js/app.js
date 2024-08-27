import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

new Swiper('.card--wrapper', {
	loop: true,
	spaceBetween: 30,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	//responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
