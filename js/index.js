$(document).ready(function () {
	var $WIN    = $(window);
	var $Navbar = $('nav');
	var $mouse  = $('#Mouse');
	var $About  = $('#About');

	var goAbout = function() {
	  	$('html, body').stop().animate({
	    	'scrollTop': $About.offset().top
	  	}, 500, 'linear');
	};

	var scrollWin = function() {
	  	var height  = $Navbar.height();
	  	var top     = $WIN.scrollTop();
	  
	  	top > height ? 
	    	$Navbar.css({
	    	boxShadow: '0 .5rem 1rem rgba(0,0,0,.2)',
	    	backgroundColor: '#212529 !important'
	 	}) : $Navbar.css({
	    	boxShadow: '',
	    	backgroundColor: ''
	  	});
	};

	$WIN.on('scroll', scrollWin);
	$mouse.on('click', goAbout);
});