$(document).ready(function () {
  // FONDO NAVBAR
  $(window).scroll(function () {
    if ($('.navbar').offset().top > 100) {
      $('.navbar').addClass('fondo')
      $('.nav-link').removeClass('font2')
      $('.nav-link').addClass('font1')
      
      
      
    } else {
      $('.navbar').removeClass('fondo')
      $('.nav-link').removeClass('font1')
      $('.nav-link').addClass('font2')
    }
  })
})

const element = document.querySelector('.icon-down');
element.classList.add('animate__animated', 'animate__slideInDown', 'animate__infinite',	'infinite', 'animate__slow');