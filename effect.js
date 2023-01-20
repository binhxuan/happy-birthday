$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7, #b8, #b9').stop();
			$('#b11').animate({top:240, left: vw-450},500);
			$('#b22').animate({top:240, left: vw-350},500);
			$('#b33').animate({top:240, left: vw-250},500);
			$('#b44').animate({top:240, left: vw-150},500);
			$('#b55').animate({top:240, left: vw-50},500);
			$('#b66').animate({top:240, left: vw+50},500);
			$('#b77').animate({top:240, left: vw+150},500);
			$('#b88').animate({top:240, left: vw+250},500);
			$('#b99').animate({top:240, left: vw+350},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			playMusic();
		});
	});

	function playMusic() {
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		setTimeout(() => {
			// showBanner();
			$('#bannar_coming').fadeIn('slow');
		}, 6000)
	}

	function showBanner() {
		$('.bannar').addClass('bannar-come');
		setTimeout(() => {
			flyBalloon();
		}, 6000)
	}

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			// $('#balloons_flying').fadeIn('slow');
			flyBalloon();
		});
	});

	function flyBalloon() {
		$('.balloon-border').animate({top:-500},8000);

		document.querySelectorAll('.balloons').forEach((el) => {
			let tmpid = el.getAttribute('id').substr(1, 1)
			animateBalloon(tmpid)
		})

		setTimeout(() => {
			showCake();
		}, 6000)
		
	}

	function animateBalloon(id) {
		if(Number(id) % 2 === 0) {
			$('#b'+id).addClass('balloons-rotate-behaviour-two');
		}
		else {
			$('#b'+id).addClass('balloons-rotate-behaviour-one');
		}
		var randleft = 1500*Math.random();
		var randtop = 500*Math.random();
		$('#b'+id).animate({left:randleft,bottom:randtop},10000,function(){
			animateBalloon(id)
		});
	}

	function showCake() {
		$('.cake').fadeIn(4000);
		setTimeout(() => {
			$('#light_candle').fadeIn('slow');
		}, 3000)
	}

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7, #b8, #b9').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		$('#b11').animate({top:240, left: vw-450},500);
		$('#b22').animate({top:240, left: vw-350},500);
		$('#b33').animate({top:240, left: vw-250},500);
		$('#b44').animate({top:240, left: vw-150},500);
		$('#b55').animate({top:240, left: vw-50},500);
		$('#b66').animate({top:240, left: vw+50},500);
		$('#b77').animate({top:240, left: vw+150},500);
		$('#b88').animate({top:240, left: vw+250},500);
		$('#b99').animate({top:240, left: vw+350},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('slow').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(1000).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(2000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('slow');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');