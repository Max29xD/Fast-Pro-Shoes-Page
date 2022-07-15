let nav = document.querySelector('.nav');

window.addEventListener('scroll', function (e) {
	window.scrollY >= 105 ? nav.classList.add('active') : nav.classList.remove('active');
});