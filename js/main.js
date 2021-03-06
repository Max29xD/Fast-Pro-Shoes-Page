let nav = document.querySelector('.nav');
let w = window;

function scrollNav() {
	w.scrollY >= 105 ? nav.classList.add('active') : nav.classList.remove('active');
}
scrollNav();
w.addEventListener('scroll', function (e) {
	scrollNav();
});

let scrollUp = document.querySelector('.scrollup');

scrollUp.addEventListener('click', () => {
	w.scrollTo(0, 0);
});

let btnSidebar = document.querySelector('.nav__menu-img');
let btnClose = document.querySelector('.nav__link-close');
let btnLink = document.querySelectorAll('.nav__link-li-a');
let sidebar = document.querySelector('.nav__link');

btnSidebar.addEventListener('click', () => {
	sidebar.classList.toggle('active');
});
btnClose.addEventListener('click', () => {
	sidebar.classList.remove('active');
});
btnLink.forEach((index) =>
	index.addEventListener('click', () => {
		sidebar.classList.remove('active');
	})
);

const getTheme = localStorage.getItem('theme');
const body = document.querySelector('.body');
const themeToggle = document.querySelector('.nav__link-darkmode');

if (getTheme && getTheme === 'dark') {
	body.classList.add('dark');
}
themeToggle.addEventListener('click', () => {
	body.classList.toggle('dark');
	themeToggle.classList.toggle('active');
	!body.classList.contains('dark')
		? localStorage.setItem('theme', 'light')
		: localStorage.setItem('theme', 'dark');
});
