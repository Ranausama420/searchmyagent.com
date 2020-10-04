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
          required: true
        },
        email: {
          required: true
        }
        loan:{
          required: true
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

    }
});

$(".next-btn5").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step6").fadeIn(1000);

    }
});

$(".next-btn6").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step7").fadeIn(1000);
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

});
$(".prev-btn6").click(function() {
 $(".tab-pane").hide();
      $("#step5").fadeIn(1000);

});
$(".prev-btn7").click(function() {
 $(".tab-pane").hide();
      $("#step6").fadeIn(1000);
      $('.progressbar-dots:nth-child(3)').removeClass('active');
      $('.progressbar-dots:nth-child(2)').addClass('active');

});

