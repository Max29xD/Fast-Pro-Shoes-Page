let nav = document.querySelector('.nav');

window.addEventListener('scroll', function (e) {
	window.scrollY >= 93 ? nav.classList.add('active') : nav.classList.remove('active');
});

