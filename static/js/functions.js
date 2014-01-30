//helper function
function fullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.webkitRequestFullScreen ) {
    element.webkitRequestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}

//for the whole page
var html = document.documentElement;
fullScreen(html);
			
(function($){
	$(document).ready(function() {
	$(".btn").on('click tap vclick', function (){
			//alert($(this).attr("data"));
			//load url     
			$.get('/control/' + $(this).attr("data")); 
			return false;  
	});
});
})(jQuery);
