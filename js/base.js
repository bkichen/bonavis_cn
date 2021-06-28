$(function(){
	$("#listCloseBtn").click(function(){
		$(".list").stop(false,true).animate({
			"top":"-800px",
			"opacity":"0"
		},500);
	});
	navBtnBool=true;
	$(".navBtn").click(function(){
		$(this).toggleClass("wapBtnAn");
		var screenWidth=$(window).width();
		if(screenWidth>=1024){
			if(navBtnBool){
				$(".list").stop(false,true).animate({
					"top":"0px",
					"opacity":"1"
				},500);
			}else{
				$(".list").stop(false,true).animate({
					"top":"-800px",
					"opacity":"0"
				},500);
			}
			
		}else{
			
			if(navBtnBool){
				
				$(".nav").css("height",$(document.body).height()).show();
				$(".nav").animate({
					"right":"0px"	
				},500);
				navBtnBool=false;
			}else{
				$(".nav").hide();
				$(".nav").animate({
					"right":"-125px"	
				},500);
				
				navBtnBool=true;
			}
		}
		
	});
	
	
	$("#footChildCode").mouseover(function(){
		$(this).find(".childCode").stop(false,true).fadeIn(200);
	}).mouseleave(function(){
		$(this).find(".childCode").stop(false,true).fadeOut(200);
	});
	
	
	/*fixed*/
	var floatBool=false;
	$(window).scroll(function(){
		if($(this).scrollTop()>=200){
			if(!floatBool){
				$(".fixed").stop(false,true).fadeIn(500);
				floatBool=true;
			}
		}else{
			if(floatBool){
				$(".fixed").stop(false,true).fadeOut(500);
				floatBool=false;
			}
		}
	});
	$(".fixedTop").mouseover(function(){
		$(this).css("background","#666");
		var imageSrc=$(this).find(".fixedTopPointer").attr("src");
		if(imageSrc.indexOf("on.png")>0){}else{
			imageSrc=imageSrc.replace(".png","on.png");
		}
		$(this).find(".fixedTopPointer").attr("src",imageSrc);
	}).mouseleave(function(){
		$(this).css("background","#b2b2b2");
		var imageSrc=$(this).find(".fixedTopPointer").attr("src");
		if(imageSrc.indexOf("on.png")>0){
			imageSrc=imageSrc.replace("on.png",".png");
		}else{}
		$(this).find(".fixedTopPointer").attr("src",imageSrc);
	}).click(function(){
		$('body').animate({scrollTop:"0px"},500);
	});
	$(".fixedCode").mouseover(function(){
		$(".fixedCodeInfo").stop(false,true).fadeIn(500);
	}).mouseleave(function(){
		$(".fixedCodeInfo").stop(false,true).fadeOut(500);
	});
	

});


/*animateClassAdd*/
function anClasAdd(e,keyframes,stime,dtime,an,status){
	$(e).css({
		"animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-moz-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-webkit-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-o-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
	});
}
/*cutString*/
function cutString(str, len) {
	if(str.length*2 <= len) {
		return str;
	}
	var strlen = 0;
	var s = "";
	for(var i = 0;i < str.length; i++) {
		s = s + str.charAt(i);
		if (str.charCodeAt(i) > 128) {
			strlen = strlen + 2;
			if(strlen >= len){
				return s.substring(0,s.length-1) + "...";
			}
		} else {
			strlen = strlen + 1;
			if(strlen >= len){
				return s.substring(0,s.length-2) + "...";
			}
		}
	}
	return s;
}

function moveMain(ele){
	var top=parseInt($(ele).offset().top);
	var headerTop=parseInt($(".header").css("height"));
	top=top-headerTop;
	$('body').animate({scrollTop:top},500);
}
