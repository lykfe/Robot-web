$(document).ready(function(){
	$('a[href^="#"]').click(function(e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $(target).animatescroll();
	});

	$(".picture").popover();
});