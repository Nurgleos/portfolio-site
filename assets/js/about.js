$(document).on('click', '.scroll-to-top', function (e) {
   e.preventDefault();
   $('body, html').animate({ scrollTop: 0 }, 1000);
});

window.addEventListener('scroll', () => {
   const scrollBtn = document.querySelector('.scroll-to-top');
   if ($(window).scrollTop() < 200) scrollBtn.style.display = 'none';
   if ($(window).scrollTop() > 200) scrollBtn.style.display = 'block';
});