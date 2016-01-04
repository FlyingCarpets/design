$(document).ready(function(){
	//alert("Busy");

	$('#presents').hover (
		function(){
			$("<h2>RANKŲ DARBO VOKAI IR ATVIRUTĖS</h2>").hide().appendTo("#presents .caption").fadeIn(200);
		},
		function () {
    		$("h2:nth-child(2)").remove();
  		}
	);

	$('#interior').hover (
		function(){
			$("<h2>PIEŠINIAI, PAGYVINANTYS KAMBARIO SIENAS</h2>").hide().appendTo("#interior .caption").fadeIn(200);
		},
		function () {
    		$("h2:nth-child(2)").remove();
  		}
	);

	$('#exterior').hover (
		function(){
			$("<h2>TEMINIAI PIEŠINIAI ANT LAUKO SIENŲ</h2>").hide().appendTo("#exterior .caption").fadeIn(200);
		},
		function () {
    		$("h2:nth-child(2)").remove();
  		}
	);

	$('#objects').hover (
		function(){
			$("<h2>ORIGINALIOS DAIKTŲ PUOŠYBOS IDĖJOS</h2>").hide().appendTo("#objects .caption").fadeIn(200);
		},
		function () {
    		$("h2:nth-child(2)").remove();
  		}
	);

	//collapsed navbar pushing down content
	$('.navbar-default').on('click', function() {
    var height = ($('.navbar-collapse.in').length == 0) ? '120px' : 0;
    $('#services').css({marginTop: height});
   	});

	//anchor link scroll to element
	$('#index').localScroll({duration:800});
	$('html,body').animate({
  		scrollTop: $('index.html#scroll').offset().top
	});
	
	//$('html,body').animate({
  		//scrollTop: $("#scroll").offset().top
	//});

	//image preloader
	$.preloadImages = function() {
 		for (var i = 0; i < arguments.length; i++) {
    	$("<img />").attr("src", arguments[i]);
  		}
	}

	$.preloadImages("objektai2.jpg","siena1.jpg","airport3_small.jpg","kede4_small.jpg");

});






