$( document ).ready(function() {
	//menu toggle
	if ( $(window).innerWidth() < 480 ) {
		$(".handle").on("click", function(){
			$('.navigation').toggleClass('menu-active');
		});


	   $(".navigation .sub-menu>a").on("click", function(e){
	   		e.preventDefault();
			var a = $('.navigation ul');

	        if ( a.length == 1 ) {
	        	a.addClass('sub-menu-active');
	        }
		});
	}

	/*if ( $(window).innerWidth() >= 480 && $(window).innerWidth() < 1024 ) {
		adsfsdfsdfsdfsdf
	}*/
});