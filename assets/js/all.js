"use strict";

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})(); //Initialize Swiper


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var elem = document.querySelector('input[name="date-picker"]');
var datepicker = new Datepicker(elem, {
  // ...options
  autohide: true,
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn text-primary'
});
//# sourceMappingURL=all.js.map
