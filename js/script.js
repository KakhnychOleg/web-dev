const swiper = new Swiper('.swiper', {
   loop: false,
   slidesPerView: 3,
   autoplay: true, 
   speed: 800,
  
   pagination: {
       el: '.swiper-pagination',
       clickable: true,
   },
});