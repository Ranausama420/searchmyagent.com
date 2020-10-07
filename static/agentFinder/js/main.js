var v = $("#booking-form").validate({
      rules: {
        address: {
          required: true
        },
        properType:{
        required: true
        },
        tgSale:{
        required: true
        },
        soonTime:{
        required: true
        },
        fname: {
          required: true
        },
        phone: {
          required: true,
          phoneUS: true,

          minlength : 10,
          maxlength : 13
        },
        email: {
          required: true,
          email: true

        }


      },
        messages: {
        phone: {
        matches: "Enter valid phone number"
        }
       },
      errorElement: "span",
      errorClass: "error",
      errorPlacement: function(error, element) {
            error.insertBefore(element);
      }
});

$(".next-btn1").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step2").fadeIn(1000);

    }
 });
$(".next-btn2").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step3").fadeIn(1000);
       $('.progressbar-dots').removeClass('active');
      $('.progressbar-dots:nth-child(2)').addClass('active');

    }
});
$(".next-btn3").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step4").fadeIn(1000);

    }
});
$(".next-btn4").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step5").fadeIn(1000);
      $('.progressbar-dots').removeClass('active');
      $('.progressbar-dots:nth-child(3)').addClass('active');
    }
});


$(".prev-btn2").click(function() {
 $(".tab-pane").hide();
      $("#step1").fadeIn(1000);


});

$(".prev-btn3").click(function() {
 $(".tab-pane").hide();
      $("#step2").fadeIn(1000);
      $('.progressbar-dots:nth-child(2)').removeClass('active');
      $('.progressbar-dots:nth-child(1)').addClass('active');

});
$(".prev-btn4").click(function() {
 $(".tab-pane").hide();
      $("#step3").fadeIn(1000);

});
$(".prev-btn5").click(function() {
 $(".tab-pane").hide();
      $("#step4").fadeIn(1000);
      $('.progressbar-dots:nth-child(3)').removeClass('active');
      $('.progressbar-dots:nth-child(2)').addClass('active');

});

jQuery.validator.methods.matches = function( value, element, params ) {
    var re = new RegExp(params);
    return this.optional( element ) || re.test( value );
}


jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 &&
    phone_number.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
}, "Please specify a valid phone number");

var searchInput = 'search_input';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
   });