const basSwiper = new Swiper('.bas1', {
  // Optional parameters
  
  // loop: true,
  slidesPerView:3,
  slidesPerGroup:3,
  spaceBeetween:3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
const hautSwiper = new Swiper('.haut1', {
    // Optional parameters
    
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs :{
      swiper: basSwiper
    }
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  // =================================================================
  const bas2Swiper = new Swiper('.bas2', {
    // Optional parameters
    
    // loop: true,
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBeetween:3,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  const hautSwiper2 = new Swiper('.haut2', {
      // Optional parameters
      
      // loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs :{
        swiper: bas2Swiper
      },
  
    });


  
