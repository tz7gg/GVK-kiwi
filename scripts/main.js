$(document).ready(function(){
	$("#menu, #menu1").on("click","a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

	var kiwi6l = $('.kiwi-6').css('left');
	var kiwi6t = $('.kiwi-6').css('top');
	kiwi6l = Number.parseInt(kiwi6l);
	kiwi6t = Number.parseInt(kiwi6t);
	$("#uslugi").on("mouseover", "#circle1, #circle-content1", function (event) {		
		$(".kiwi-6").stop().animate({'left': kiwi6l -100, 'top': kiwi6t -100}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle1, #circle-content1", function (event) {
		$(".kiwi-6").stop().animate({'left': kiwi6l, 'top': kiwi6t}, 800, "swing");
	});	

	var kiwi7l = $('.kiwi-7').css('left');
	var kiwi7t = $('.kiwi-7').css('top');
	kiwi7l = Number.parseInt(kiwi7l);
	kiwi7t = Number.parseInt(kiwi7t);
	$("#uslugi").on("mouseover", "#circle1, #circle-content1", function (event) {		
		$(".kiwi-7").stop().animate({'left': kiwi7l + 50, 'top': kiwi7t -20}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle1 #circle-content1", function (event) {
		$(".kiwi-7").stop().animate({'left': kiwi7l, 'top': kiwi7t}, 800, "swing");
	});

	var kiwi8l = $('.kiwi-8').css('left');
	var kiwi8t = $('.kiwi-8').css('top');
	kiwi8l = Number.parseInt(kiwi8l);
	kiwi8t = Number.parseInt(kiwi8t);
	$("#uslugi").on("mouseover", "#circle1, #circle-content1", function (event) {		
		$(".kiwi-8").stop().animate({'left': kiwi8l + 70, 'top': kiwi8t + 100}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle1, #circle-content1", function (event) {
		$(".kiwi-8").stop().animate({'left': kiwi8l, 'top': kiwi8t}, 800, "swing");
	});

	var kiwi7l = $('.kiwi-7').css('left');
	var kiwi7t = $('.kiwi-7').css('top');
	kiwi7l = Number.parseInt(kiwi7l);
	kiwi7t = Number.parseInt(kiwi7t);
	$("#uslugi").on("mouseover", "#circle2, #circle-content2", function (event) {		
		$(".kiwi-7").stop().animate({'left': kiwi7l - 70, 'top': kiwi7t + 100}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle2, #circle-content2", function (event) {
		$(".kiwi-7").stop().animate({'left': kiwi7l, 'top': kiwi7t}, 800, "swing");
	});

	var kiwi8l = $('.kiwi-8').css('left');
	var kiwi8t = $('.kiwi-8').css('top');
	kiwi8l = Number.parseInt(kiwi8l);
	kiwi8t = Number.parseInt(kiwi8t);
	$("#uslugi").on("mouseover", "#circle2, #circle-content2", function (event) {		
		$(".kiwi-8").stop().animate({'left': kiwi8l + 30, 'top': kiwi8t + 100}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle2, #circle-content2", function (event) {
		$(".kiwi-8").stop().animate({'left': kiwi8l, 'top': kiwi8t}, 800, "swing");
	});

	var kiwi3l = $('.kiwi-3').css('left');
	var kiwi3t = $('.kiwi-3').css('top');
	kiwi3l = Number.parseInt(kiwi3l);
	kiwi3t = Number.parseInt(kiwi3t);
	$("#uslugi").on("mouseover", "#circle2, #circle-content2", function (event) {		
		$(".kiwi-3").stop().animate({'left': kiwi3l + 70, 'top': kiwi3t - 100}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle2, #circle-content2", function (event) {
		$(".kiwi-3").stop().animate({'left': kiwi3l, 'top': kiwi3t}, 800, "swing");
	})

	var kiwi2l = $('.kiwi-2').css('left');
	var kiwi2t = $('.kiwi-2').css('top');
	kiwi2l = Number.parseInt(kiwi2l);
	kiwi2t = Number.parseInt(kiwi2t);
	$("#uslugi").on("mouseover", "#circle2, #circle-content2", function (event) {		
		$(".kiwi-2").stop().animate({'left': kiwi2l - 30, 'top': kiwi2t - 70}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle2, #circle-content2", function (event) {
		$(".kiwi-2").stop().animate({'left': kiwi2l, 'top': kiwi2t}, 800, "swing");
	})

	var kiwi2l = $('.kiwi-2').css('left');
	var kiwi2t = $('.kiwi-2').css('top');
	kiwi2l = Number.parseInt(kiwi2l);
	kiwi2t = Number.parseInt(kiwi2t);
	$("#uslugi").on("mouseover", "#circle1, #circle-content1", function (event) {		
		$(".kiwi-2").stop().animate({'left': kiwi2l + 10, 'top': kiwi2t - 30}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle1, #circle-content1", function (event) {
		$(".kiwi-2").stop().animate({'left': kiwi2l, 'top': kiwi2t}, 800, "swing");
	})


	var kiwi9l = $('.kiwi-9').css('left');
	var kiwi9t = $('.kiwi-9').css('top');
	kiwi9l = Number.parseInt(kiwi9l);
	kiwi9t = Number.parseInt(kiwi9t);
	$("#uslugi").on("mouseover", "#circle3, #circle-content3", function (event) {		
		$(".kiwi-9").stop().animate({'left': kiwi9l - 160, 'top': kiwi9t + 130}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle3, #circle-content3", function (event) {
		$(".kiwi-9").stop().animate({'left': kiwi9l, 'top': kiwi9t}, 800, "swing");
	})

	var kiwi8l = $('.kiwi-8').css('left');
	var kiwi8t = $('.kiwi-8').css('top');
	kiwi8l = Number.parseInt(kiwi8l);
	kiwi8t = Number.parseInt(kiwi8t);
	$("#uslugi").on("mouseover", "#circle3, #circle-content3", function (event) {		
		$(".kiwi-8").stop().animate({'left': kiwi8l - 20, 'top': kiwi8t + 60}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle3, #circle-content3", function (event) {
		$(".kiwi-8").stop().animate({'left': kiwi8l, 'top': kiwi8t}, 800, "swing");
	});

	var kiwi3l = $('.kiwi-3').css('left');
	var kiwi3t = $('.kiwi-3').css('top');
	kiwi3l = Number.parseInt(kiwi3l);
	kiwi3t = Number.parseInt(kiwi3t);
	$("#uslugi").on("mouseover", "#circle3, #circle-content3", function (event) {		
		$(".kiwi-3").stop().animate({'left': kiwi3l - 15, 'top': kiwi3t - 15}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle3, #circle-content3", function (event) {
		$(".kiwi-3").stop().animate({'left': kiwi3l, 'top': kiwi3t}, 800, "swing");
	})

	var kiwi10l = $('.kiwi-10').css('left');
	var kiwi10t = $('.kiwi-10').css('top');
	kiwi10l = Number.parseInt(kiwi10l);
	kiwi10t = Number.parseInt(kiwi10t);
	$("#uslugi").on("mouseover", "#circle3, #circle-content3", function (event) {		
		$(".kiwi-10").stop().animate({'left': kiwi10l + 30, 'top': kiwi10t + 70}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle3, #circle-content3", function (event) {
		$(".kiwi-10").stop().animate({'left': kiwi10l, 'top': kiwi10t}, 800, "swing");
	})

	var kiwi11l = $('.kiwi-11').css('left');
	var kiwi11t = $('.kiwi-11').css('top');
	kiwi11l = Number.parseInt(kiwi11l);
	kiwi11t = Number.parseInt(kiwi11t);
	$("#uslugi").on("mouseover", "#circle4, #circle-content4", function (event) {		
		$(".kiwi-11").stop().animate({'left': kiwi11l + 20, 'top': kiwi11t + 130}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle4, #circle-content4", function (event) {
		$(".kiwi-11").stop().animate({'left': kiwi11l, 'top': kiwi11t}, 800, "swing");
	})



	var kiwi5l = $('.kiwi-5').css('left');
	var kiwi5t = $('.kiwi-5').css('top');
	kiwi5l = Number.parseInt(kiwi5l);
	kiwi5t = Number.parseInt(kiwi5t);
	$("#uslugi").on("mouseover", "#circle4, #circle-content4", function (event) {		
		$(".kiwi-5").stop().animate({'left': kiwi5l - 20, 'top': kiwi5t - 80}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle4, #circle-content4", function (event) {
		$(".kiwi-5").stop().animate({'left': kiwi5l, 'top': kiwi5t}, 800, "swing");
	})

	var kiwi12l = $('.kiwi-12').css('left');
	var kiwi12t = $('.kiwi-12').css('top');
	kiwi12l = Number.parseInt(kiwi12l);
	kiwi12t = Number.parseInt(kiwi12t);
	$("#uslugi").on("mouseover", "#circle4, #circle-content4", function (event) {		
		$(".kiwi-12").stop().animate({'left': kiwi12l - 20, 'top': kiwi12t - 90}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle4, #circle-content4", function (event) {
		$(".kiwi-12").stop().animate({'left': kiwi12l, 'top': kiwi12t}, 800, "swing");
	})

	var kiwi12l = $('.kiwi-12').css('left');
	var kiwi12t = $('.kiwi-12').css('top');
	kiwi12l = Number.parseInt(kiwi12l);
	kiwi12t = Number.parseInt(kiwi12t);
	$("#uslugi").on("mouseover", "#circle3, #circle-content3", function (event) {		
		$(".kiwi-12").stop().animate({'left': kiwi12l + 20, 'top': kiwi12t - 40}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle3, #circle-content3", function (event) {
		$(".kiwi-12").stop().animate({'left': kiwi12l, 'top': kiwi12t}, 800, "swing");
	})

	var kiwi13l = $('.kiwi-13').css('left');
	var kiwi13t = $('.kiwi-13').css('top');
	kiwi13l = Number.parseInt(kiwi13l);
	kiwi13t = Number.parseInt(kiwi13t);
	$("#uslugi").on("mouseover", "#circle1, #circle-content1", function (event) {		
		$(".kiwi-13").stop().animate({'left': kiwi13l - 30, 'top': kiwi13t + 40}, 800, "swing");
	});	
	$("#uslugi").on("mouseout", "#circle1, #circle-content1", function (event) {
		$(".kiwi-13").stop().animate({'left': kiwi13l, 'top': kiwi13t}, 800, "swing");
	})
});



jQuery(document).ready(function(){
	$objWindow = $(window);
	$('div[data-type="background"]').each(function(){
		var $bgObj = $(this);
		$(window).scroll(function() {
			var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
			var coords =  yPos + 'px';
			$bgObj.css('background-position-y', coords);	
		});
	});
});

   $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
      	margin: 15,
        autoplay:true,
        dots: true,
        autoplayTimeout: 5000,
        loop: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: false
          }
        }
      })
    })


$('#submit').submit(function(){
	if ($('#name-main').val() !== "" && $('#phone-main').val() !== "") {
		$("#btn-submit").text("Спасибо заявка принята!")
		$(".btn-submit").attr('disabled',true)
		$.post(
        'mail.php', // адрес обработчика 
        {	        	
        	name: $('#name-main').val(), 
        	phone: $('#phone-main').val(),
        	email: $('#email-main').val(),
        	message: $('#message-main').val()   
        } 
        );
		return false;
	} 
	else {
		$("#btn-submit").text("не все обязательные поля заполнены!")
		return false;
	}
});

function burger() {
	let bg = document.querySelector('.navbar-bg');
	bg.classList.toggle('bgwhite')
}
