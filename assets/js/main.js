$( document ).ready(function() {

	$(".scroll").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash, {duration: 3000}); 
    });

    $( "#port-image1" ).hover(
	  function() {
	    $(".port-holder1").slideDown(".port-text");
	  }, function() {
	    $(".port-holder1").slideUp(".port-text");
	  }
	);

	$( "#port-image2" ).hover(
	  function() {
	    $(".port-holder2").slideDown(".port-text");
	  }, function() {
	    $(".port-holder2").slideUp(".port-text");
	  }
	);

    $( "#port-image3" ).hover(
	  function() {
	    $(".port-holder3").slideDown(".port-text");
	  }, function() {
	    $(".port-holder3").slideUp(".port-text");
	  }
	);
});

