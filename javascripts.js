// Begin TEMPLATE SCRIPTS

// COPYRIGHT 2020 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE





// START SCROLL TO TOP ARROW SCRIPT

$(document).ready(function(){
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},300);
		return false;
	});
	
});

// END SCROLL TO TOP ARROW SCRIPT





// SCRIPT FOR THE DROP MENU


( function( $ ) {
$( document ).ready(function() {
$('#rwdmenu > ul').prepend('<li class=\"mobile\"><a href=\"#\"><span>Menu <i>&nbsp;</i></span></a></li>');
$('#rwdmenu > ul > li > a').click(function(e) {
  $('#rwdmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#rwdmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if( $(this).parent().hasClass('mobile') ) {
    e.preventDefault();
    $('#rwdmenu').toggleClass('expand');
  }
  if($(this).closest('li').find('ul').children().length === 0) {
    return true;
  } else {
    return false;
  }
});

});
} )( jQuery );





// CLOSE DROP MENU IF CLICKED AWAY FROM

$(document).click(function(event) {
    if(!$(event.target).closest('#rwdmenu li ul').length) {
      if(!$(event.target).closest('#rwdmenu').length) {
        if($('#rwdmenu li ul').is(":visible")) {
            $('#rwdmenu li ul').hide();
       }
     }
   }
 });





// CURRENT PAGE HIGHLITE (GALLERY MENU)

$(document).ready( function () {
    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $("#gal-menu a").removeClass("current-gal");
    $("#gal-menu a[href='" + pathname  + "']").addClass("current-gal");
});
