$(document).ready(function(){
    
    $(".fixed").hide();
    $(window).scroll(function(){
     var lengthY=$(window).scrollTop();
	if(lengthY>725 )
	{
	    $(".fixed").show();
	}
	if(lengthY<725)
	{
		$(".fixed").hide();
	}
	});	
	$(".pic1").hide();
    $(window).scroll(function(){
     var lengthY1=$(window).scrollTop();
	if(lengthY1>3870 )
	{
	    $(".pic1").fadeIn();
	}
});	
     $(".pic2").hide();
    $(window).scroll(function(){
     var lengthY2=$(window).scrollTop();
	if(lengthY2>3890 )
	{
	    $(".pic2").fadeIn();
	}
});	
    $(".pic3").hide();
    $(window).scroll(function(){
     var lengthY3=$(window).scrollTop();
	if(lengthY3>3910 )
	{
	    $(".pic3").fadeIn();
	}
});	
    $(window).scroll(function(){
    	var lengthbg1=$(window).scrollTop();
    	var lengthbg11=(lengthbg1*0.5+'px');
    	$(".bg1").css("background-position","0px lengthbg11+'0px' " );
    });
});





