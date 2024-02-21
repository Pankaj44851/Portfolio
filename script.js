// side bar javascript 

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});



// first page name changer effect js

AOS.init({
    duration: 1200,
  })
  

  // jQuery("#carousel").owlCarousel({
  //   autoplay: true,
  //   rewind: true, /* use rewind if you don't want loop */
  //   margin: 20,
  //    /*
  //   animateOut: 'fadeOut',
  //   animateIn: 'fadeIn',
  //   */
  //   responsiveClass: true,
  //   autoHeight: true,
  //   autoplayTimeout: 7000,
  //   smartSpeed: 800,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  
  //     600: {
  //       items: 3
  //     },
  
  //     1024: {
  //       items: 3
  //     },
  
  //     1366: {
  //       items: 3
  //     }
  //   }
  // });