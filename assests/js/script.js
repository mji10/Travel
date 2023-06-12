// const navbarToggler = document.querySelector('.navbar--toggler');
// const navbarCollapse = document.querySelector('.main-nav');

// navbarToggler.addEventListener('click', () => {
//     navbarToggler.classList.toggle('change');
//     navbarCollapse.classList.toggle('show__nav');
// });


// Navbar using span
function openMenu(){
    const navbarCollapse = document.querySelector('.main-nav');
    var burger = document.querySelector('.burger_menu');
    burger.classList.toggle('open');
    navbarCollapse.classList.toggle('show__nav');
  }