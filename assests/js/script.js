const navbarToggler = document.querySelector('.navbar--toggler');
const navbarCollapse = document.querySelector('.main-nav');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('change');
    navbarCollapse.classList.toggle('show__nav');
});