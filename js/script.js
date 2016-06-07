$( document ).ready(function() {
	//menu toggle
	if ( $(window).innerWidth() < 480 ) {
		$(".handle").on("click", function(){
			$('.navigation').toggleClass('menu-active');
			$('.menu-search').hide();
		});


	   $(".navigation .sub-menu>span").on("click", function(e){
	   		e.preventDefault();
			var a = $('.navigation ul');

	       if ( a.length == 1 ) {
	        	a.toggleClass('sub-menu-active');
	        }
		});

	   $(".search-toggle").on("click", function(){
			$('.menu-search').toggle();
			$('.navigation').removeClass('menu-active');
		});




	}

	if ( $(window).innerWidth() >= 480 && $(window).innerWidth() < 1024 ) {
		$(".handle").on("click", function(){
			$('.navigation').toggleClass('menu-active');
			$('.menu-search').hide();
		});


	   $(".navigation .sub-menu>span").on("click", function(e){
	   		e.preventDefault();
			var a = $('.navigation ul');

	        if ( a.length == 1 ) {
	        	a.toggleClass('sub-menu-active');
	        }
		});
	   $(".search-toggle").on("click", function(){
			$('.menu-search').toggle();
			$('.navigation').removeClass('menu-active');
		});
	}
});