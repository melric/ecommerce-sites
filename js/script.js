// On Scroll Navigation Menu
$(window).scroll(function(){
  $('.nav').toggleClass('onscrollnav', $(this).scrollTop() > 80);
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 80) {
    $('.neostrata_tagline_sm').fadeOut(100);
  } else {
    $('.neostrata_tagline_sm').fadeIn('fast');
  }
});

// Slick Carousel Slider
$(document).ready(function(){
  $('.carousel-main').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Closest Hacked
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i,
          el = this;
      do {
          i = matches.length;
          while (--i >= 0 && matches.item(i) !== el) {};
      } while ((i < 0) && (el = el.parentElement));
      return el;
  };
}


// Dropdown Language
$(document).ready(function(){
  $(".language").click(function(){
    $(".lang-dropdown").toggle();
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.language')){
        $(".lang-dropdown").slideUp(50);
    }
  });
});

// Strip Banner - Remove spacing on scroll
$(document).ready(function(){
  $(".strp-close").click(function(){
    $(".banner-stripe").slideUp("fast");
  });
  $(".strp-close").click(function(){
    $(".nav").removeClass('banner-stripe-space');
    $(".hero-banner").removeClass('banner-spacing');
  });
});

// Modal Search
$(document).ready(function(){
  $(".search-bar").click(function(){
    $(".modalsearch").slideDown("fast");
    $(".search-background").fadeIn();
  });

  $(".modalsearch_close").click(function(){
    $(".modalsearch").slideUp("fast");
    $(".search-background").fadeOut();
  });

  $(".search-background").click(function(){
    $(".modalsearch").slideUp("fast");
    $(".search-background").fadeOut();
  });
});


// Accrodion Body Shop
$(document).ready(function(){
  $(".accordion-header").click(function(){
    // $(".accordion-header").removeClass("accord-active");
    $(this).toggleClass("accord-active");
  })
});


// Accrodion Menu Mobile
$(document).ready(function(){
  // Main level
  $(".mo-accordion__title").click(function(){
    $('.mo-accordion__title').removeClass("mo-accordion__title--active");
    $(this).toggleClass("mo-accordion__title--active");
  });
  // Send level
  $(".mo-accordion__list--sub").click(function(){
    $(".mo-accordion__list--sub").removeClass("mo-accordion__list--sub-active");
    $(this).addClass("mo-accordion__list--sub-active");
  });
  // Open Accordion Menu Mobile
  $(".burger-menu").click(function(){
    $(".mo-nav").show();
  });
  // Close accordion Menu Mobile
  $(".mo-close").click(function(){
    $(".mo-nav").hide();
  });
  // hide accordion mobile on desktop
  $(window).resize(function() {
    $('.mo-nav').hide(screen.width < 1080);
  }).resize();
});


// Filter Category
$(document).ready(function(){
  $(".selectbox-btn").click(function(){
    $(this).next().toggleClass("selectbox-btn__active");
    $(this).toggleClass("focus-bg");
  })
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.selectbox')){
        $(".selectbox-btn__active").removeClass("selectbox-btn__active");
        $(".selectbox-btn").removeClass("focus-bg");
    }
  });
});

// filter mobile button
$(document).ready(function(){
  $(".filter-btn__m").click(function(){
    $(this).toggleClass("focus-bg");
    $(".dropdown-filter").slideToggle("fast");
    $(".dropdown-sort").hide();
    $(".sort-btn__m").removeClass("focus-bg");
  });
  $(".sort-btn__m").click(function(){
    $(this).toggleClass("focus-bg");
    $(".filter-btn__m").removeClass("focus-bg");
    $(".dropdown-sort").slideToggle("fast");
    $(".dropdown-filter").hide();
    $(".sortmobile-hide").hide();
    $(".sort-mobile").show();
  });
});

$(window).resize(function() {
  if ($(this).width() < 940) {
    $('.dropdown-filter').hide();
    $('.dropdown-sort').hide();

  } else {

    $('.dropdown-filter').show();
    $('.dropdown-sort').css("display", "flex");
    $('.sortmobile-hide').show();
  }
    
});

// PDP Tab
$(document).ready(function(){
  $(".nav-tab-1").click(function(){
    $(this).addClass("active-tab");
    $(".nav-tab-2, .nav-tab-3").removeClass("active-tab");
    $(".tab-details-1").fadeIn("fast");
    $(".tab-details-2").fadeOut("fast");
    $(".tab-details-3").fadeOut("fast");
  })

  $(".nav-tab-2").click(function(){
    $(this).addClass("active-tab");
    $(".nav-tab-1, .nav-tab-3").removeClass("active-tab");
    $(".tab-details-1").fadeOut("fast");
    $(".tab-details-2").fadeIn("fast");
    $(".tab-details-3").fadeOut("fast");
  })

  $(".nav-tab-3").click(function(){
    $(this).addClass("active-tab");
    $(".nav-tab-1, .nav-tab-2").removeClass("active-tab");
    $(".tab-details-1").fadeOut("fast");
    $(".tab-details-2").fadeOut("fast");
    $(".tab-details-3").fadeIn("fast");
  })

});

// Info PDP modal
$(document).ready(function(){
  $(".info-icon").click(function(){
    $(".nice-ifo").show();
  });
  $(".close-info").click(function(){
    $(".nice-ifo").hide();
  });
});

// PDP slider Thumbnails
$(document).ready(function(){
  $('.pdpImageSlider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

// PDP Results slider
$(document).ready(function(){
  $('.ResultSlider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
});

// PDP Changed Photo
const thumbs=document.querySelector(".thumb-img").children;
function changeImage(event){
  document.querySelector(".pro-img").src=event.children[0].src
  
  for(let i=0; i<thumbs.length;i++){
    thumbs[i].classList.remove("active-img");
  }
  event.classList.add("active-img");
}