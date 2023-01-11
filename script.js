$(document).ready(function(){
 	$(window).scrol1(function(){
 		if (this.scrol1Y>20) {
 			$('.navbar').addClass("sticky"); 		}
 		else{
 			$('.navbar').removeClass("sticky"); 
 		}
 	})
 });		

