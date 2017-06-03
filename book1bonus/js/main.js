$(document).ready(function () {
    $('.firstp h1').gradientText({
        colors: ['#fc7264', '#fe9952', '#fec64f']
    });
    var arrowBounce = $(".arrow_bounce");
    arrowBounce.effect("bounce", 4000);
    setInterval(function () {
        arrowBounce.effect("bounce", 4000);
    }, 4000);

    var arrowUp = $('.static_arrow');
    var arrowDown = $('.bounce_arrow');
    arrowUp.css({
        'visibility': 'hidden'
    });
    arrowUp.removeClass('none');
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {});
        } // End if
        if ($(this).attr('href') == "#subscribe") {
            arrowDown.css({
                'visibility': 'hidden'
            });
            arrowUp.css({
                'visibility': 'visible'
            });
        } else if ($(this).attr('href') == "#up") {
            arrowUp.css({
                'visibility': 'hidden'
            });
            arrowDown.css({
                'visibility': 'visible'
            });
        }
    });
    $('.submit').on('click', function () {
        $.ajax({
            url: '/book1bonus/Send.php',
            method: 'GET',
            dataType: 'JSON',
            data: {
                'email': $('input[name="email"]').val(),
                'name': $('input[name="name"]').val()
            }
        }).done(function(data) {
            document.location.replace("thankyou.html");
        });
  });
});