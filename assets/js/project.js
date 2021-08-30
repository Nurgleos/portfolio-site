const showMoreBtn = document.querySelector('.showMore-btn');

// SLICK SLIDER
$('.slider').slick({
   arrows: false,
   dots: true,
   autoplay: true,
   autoplaySpeed: 2000,
   focusOnSelect: false,
   speed: 2000
});


// PREVIEW ITEM
showMoreBtn.onclick = (e) => {
   let cardsPos = document.querySelector('.projects-preview').offsetTop;
   console.log(cardsPos);
   $('body, html').animate({ scrollTop: cardsPos }, 1000);
};

let cardsSide = document.querySelector('.projects-preview');


// Scrolling button
$(document).on('click', '.scroll-to-top', function (e) {
   e.preventDefault();
   $('body, html').animate({ scrollTop: 0 }, 1000);
});

window.addEventListener('scroll', () => {
   const scrollBtn = document.querySelector('.scroll-to-top');
   if ($(window).scrollTop() < 200) scrollBtn.style.display = 'none';
   if ($(window).scrollTop() > 200) scrollBtn.style.display = 'block';
});