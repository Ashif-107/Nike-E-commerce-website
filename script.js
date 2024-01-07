/*=========== responsive nav ==========*/

var navMenu = document.querySelector('.side-nav')

function shownavbar(){
    navMenu.style.right="0"
}
function closenavbar(){
    navMenu.style.right="-100%"
}

/*========== swiper ==========*/

const swipershoe= new Swiper('.home-img', {
    
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect:{
        prev: {
            translate: [-100,0,-500],
            rotate: [0,0,15],
            opacity: 0
        },
        next: {
            translate: [100,0,-500],
            rotate: [0,0,-15],
            opacity: 0
        },
    },
    autoplay: {
        delay: 1500, 
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})