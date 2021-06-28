jQuery(function(){
	$(".fixedTop").click(function()
	{
		$("html, body").animate({
			"scroll-top":0
		},"");
	});
});