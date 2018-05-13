// This function makes sliding between "a" tags smoothly
"use strict";
$.noConflict();
jQuery(document).ready(function($){
    $("#navigation").on("click","a", function (event) {

            event.preventDefault();

            var id  = $(this).attr('href');
            var top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#toggler').click(function(event){
        $('#navigation').slideToggle(500);
    });

    $('#modal-window > input').click(function(){
        $('#modal-window').fadeOut(500);
    });

    $('#form').submit(function(){
		
        $.ajax({
            type: "POST",
            url: "feedback.php",
            data: $(this).serialize()
        }).done(function(){
            $('#modal-window').fadeIn(500);
        });
        return false;
    });
});


 // This function makes the iframe's height to be changed dynamicly 
 // due to <body onload & onresize="changeiFrameHeight()">

document.querySelector('body').onload = changeiFrameHeight;
document.querySelector('body').onresize = changeiFrameHeight; 

function changeiFrameHeight() {

var bodyWidth = document.querySelector('body').offsetWidth;
var iFrameWidth = document.getElementById("video").offsetWidth;
var iFrame = document.getElementById("promo-video");
var iFrameHeight;

    if (bodyWidth <= 1050) { 

        iFrameHeight = Math.round( iFrameWidth / 1.75 );
	    
		iFrame.style.height = iFrameHeight + "px"; 
		iFrame.style.width = iFrameWidth + "px";

    }else{

    	iFrame.style.height = "320px"; 
		iFrame.style.width = "520px";
    };  
}; 

