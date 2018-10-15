$(document).ready(function() {
	var currentPage = document.location.href.substr(0); //get current page url
	$("#nav-main ul li a").each(function(num, val){
	    if($(val).attr('href') == currentPage){
	        $(val).addClass('current');
	    } else{
	        $(val).removeClass('current');
	    }
	});
});