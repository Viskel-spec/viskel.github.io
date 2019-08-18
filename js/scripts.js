// Слайдер

$(document).ready(function () {

  $('#offer-form').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      url: "mail.php",
      type: "POST",
      data: $(this).serialize(),
      success: function (data) {
        $('.success').text(data + '. ваша форма   отправлена.');
      }
    });
  });

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    variableWidth: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: false
        }
      }

    ]
  });
  // Валидация форм

  $('#brif-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Осталось: {0} символов")
      },
      phone: {
        required: "Укажите телефон"
      },
      email: "Введите корректный email"
    }
  });

  $('#offer-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Осталось: {0} символов")
      },
      phone: {
        required: "Укажите телефон"
      },
    }
  });

  $('#top-modal').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Осталось: {0} символов")
      },
      phone: {
        required: "Укажите телефон"
      },
    }
  });

  // Маска для телефона
  $('.phone').mask('+7 (999) 999-99-99');
});