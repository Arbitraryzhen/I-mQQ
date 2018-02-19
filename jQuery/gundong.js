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
});
$(document).ready(function(){
    $(".pic1").hide();
    $(window).scroll(function(){
     var lengthY1=$(window).scrollTop();
	if(lengthY1>3870 )
	{
	    $(".pic1").fadeIn();
	}
});	
});
$(document).ready(function(){
    $(".pic2").hide();
    $(window).scroll(function(){
     var lengthY2=$(window).scrollTop();
	if(lengthY2>3890 )
	{
	    $(".pic2").fadeIn();
	}
});	
});
$(document).ready(function(){
    $(".pic3").hide();
    $(window).scroll(function(){
     var lengthY3=$(window).scrollTop();
	if(lengthY3>3910 )
	{
	    $(".pic3").fadeIn();
	}
});	
});
$(document).ready(function(){
    $(window).scroll(function(){
    	var lengthYbg1=$(window).scrollTop();
	if(lengthYbg1>720 )
	{
     $(".bg1").scrollTop(1000);
	}
});	
});


