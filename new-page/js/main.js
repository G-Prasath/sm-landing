(function ($) {
  "use strict";

  $(document).on("ready", function () {
    /* ==================================================
            # Smooth Scroll
         ===============================================*/
    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 200,
    });
    $("a.smooth-menu").on("click", function (event) {
      var $anchor = $(this);
      var headerH = "75";
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - headerH + "px",
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    /* ==================================================
            # Equal Height Init
        ===============================================*/
    $(window).on("resize", function () {
      $(".equal-height").equalHeights();
    });

    $(".equal-height")
      .equalHeights()
      .find("img, iframe, object")
      .on("load", function () {
        $(".equal-height").equalHeights();
      });

    /* ==================================================
            # Fun Factor Init
        ===============================================*/
    $(".timer").countTo();
    $(".fun-fact").appear(
      function () {
        $(".timer").countTo();
      },
      {
        accY: -100,
      }
    );

    /* ==================================================
            # Our Work Flow Carousel
         ===============================================*/
    $(".our-offer-carousel").owlCarousel({
      loop: false,
      margin: 30,
      nav: false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

/* ==================================================
        Contact Form Validations
================================================== */
      
      document
        .getElementById("form1")
        .addEventListener("submit", function (event) {
          // Reset error messages
          var errorElements = document.getElementsByClassName("error-message");
          for (var i = 0; i < errorElements.length; i++) {
            errorElements[i].innerText = "";
          }

          // Validate each input field
          var name = document.querySelector(".name").value.trim();
          var email = document.querySelector(".email").value.trim();
          var phone = document.querySelector(".phone").value.trim();
          var requirement = document.querySelector(".msg").value.trim();
          var isValid = true;

          if (name === "") {
            document.getElementById("name-error").innerText =
              "Please enter your name.";
            isValid = false;
          }
          if (email === "") {
            document.getElementById("email-error").innerText =
              "Please enter your email.";
            isValid = false;
          }
          if (phone === "") {
            document.getElementById("phone-error").innerText =
              "Please enter your phone number.";
            isValid = false;
          } else if (!/^\d{10}$/.test(phone)) {
            document.getElementById("phone-error").innerText =
              "Please enter a valid 10-digit phone number.";
            isValid = false;
          }
          if (requirement === "") {
            document.getElementById("requirement-error").innerText =
              "Please enter your requirement.";
            isValid = false;
          }

          if (!isValid) {
            event.preventDefault(); // Prevent form submission
          }
        });
      
      
      
  
  });
})(jQuery); // End jQuery
