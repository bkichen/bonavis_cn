$(function(){
	var $win = $(window);	
	 $(this).scroll(function() {
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		if (screen.width>100){
			var sw=100;
		}else{
			var sw=100;
		}
		if(scrollTop>sw){
			$('.indcasecate').addClass("actives");	
		} else {						
			$('.indcasecate').removeClass("actives");
	 }
   });	
});

//左边菜单
jQuery(document).ready(function($) {
	$(".fixleft h1").click(function(event){	
		$('.fixleft h1').addClass("active");	
		$('.fixleft h2').addClass("active");
		$('.footbottom').addClass("active");		
	});
	$(".fixleft h2").click(function(event){			
		$('.fixleft h2').removeClass("active");	
		$('.fixleft h1').removeClass("active");
		$('.footbottom').removeClass("active");	
	});
});

/////////////////////////////////////////////////// 顶部表单提交///////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){     
	$("#listname").focus(function(){	
		if($(this).val()=="请输入您的联系人姓名（必填）"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的联系人姓名（必填）");
		}
	});
	$("#listtel").focus(function(){	
		if($(this).val()=="请输入您的联系方式（必填）"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的联系方式（必填）");
		}
	});
	$("#listaddress").focus(function(){	
		if($(this).val()=="请输入您的地址（必填）"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的地址（必填）");
		}
	});
	$("#listinfo").focus(function(){	
		if($(this).val()=="请输入您的留言"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的留言");
		}
	});
   $("#listbtn").click(function(){           //当按钮button被点击时的处理函数   
		 if (document.getElementById("listname").value.length<2 || document.getElementById("listname").value=='请输入您的联系人姓名（必填）') {
		 	alert("请输入您的联系人姓名！"); 
			document.getElementById("listname").focus();
		 }
		 else if (document.getElementById("listtel").value.length<4 || document.getElementById("listtel").value=='请输入您的联系方式（必填）') {
			alert("请输入您的联系方式！"); 
			document.getElementById("listtel").focus();
		 }
		 else if (document.getElementById("listaddress").value.length<2 || document.getElementById("listaddress").value=='请输入您的地址（必填）') {
			alert("请输入您的地址！"); 
			document.getElementById("listaddress").focus();
		 }
		 else
		 { postdata();}                                       //button被点击时执行postdata函数
   });   
});   
function postdata(){                              //提交数据函数   
   $.ajax({                                                 //调用jquery的ajax方法   
     type: "POST",                                      //设置ajax方法提交数据的形式   
     url: "/inc/savetop.php",                                       //把数据提交到ok.php   
     data: "listname="+$("#listname").val()+"&listinfo="+$("#listinfo").val()+"&listtel="+$("#listtel").val()+"&listaddress="+$("#listaddress").val(),     //输入框writer中的值作为提交的数据   
     success: function(msg){                  //提交成功后的回调，msg变量是ok.php输出的内容。   
     alert("提交成功！我们会尽快与您联系。");                      //如果有必要，可以把msg变量的值显示到某个DIV元素中
	 document.getElementById("listname").value="请输入您的联系人姓名（必填）"; 
	 document.getElementById("listtel").value="请输入您的联系方式（必填）";
	 document.getElementById("listaddress").value="请输入您的地址（必填）";
	 document.getElementById("listinfo").value="请输入您的留言";
     } 
   });   
}



/////////////////////////////////////////////////// 联系我们里表单提交///////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){     
	$("#clistname").focus(function(){	
		if($(this).val()=="请输入您的联系人姓名（必填）"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的联系人姓名（必填）");
		}
	});
	$("#clisttel").focus(function(){	
		if($(this).val()=="请输入您的联系方式（必填）"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的联系方式（必填）");
		}
	});
	$("#clistaddress").focus(function(){	
		if($(this).val()=="请输入您的地址（必填）"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的地址（必填）");
		}
	});
	$("#clistinfo").focus(function(){	
		if($(this).val()=="请输入您的留言"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的留言");
		}
	});
   $("#clistbtn").click(function(){           //当按钮button被点击时的处理函数   
		 if (document.getElementById("clistname").value.length<2 || document.getElementById("clistname").value=='请输入您的联系人姓名（必填）') {
		 	alert("请输入您的联系人姓名！"); 
			document.getElementById("clistname").focus();
		 }
		 else if (document.getElementById("clisttel").value.length<4 || document.getElementById("clisttel").value=='请输入您的联系方式（必填）') {
			alert("请输入您的联系方式！"); 
			document.getElementById("clisttel").focus();
		 }
		 else if (document.getElementById("clistaddress").value.length<2 || document.getElementById("clistaddress").value=='请输入您的地址（必填）') {
			alert("请输入您的地址！"); 
			document.getElementById("clistaddress").focus();
		 }
		 else
		 { postdata3();}                                       //button被点击时执行postdata函数
   });   
});   
function postdata3(){                              //提交数据函数   
   $.ajax({                                                 //调用jquery的ajax方法   
     type: "POST",                                      //设置ajax方法提交数据的形式   
     url: "/inc/savetop.php",                                       //把数据提交到ok.php   
     data: "listname="+$("#clistname").val()+"&listinfo="+$("#clistinfo").val()+"&listtel="+$("#clisttel").val()+"&listaddress="+$("#clistaddress").val(),     //输入框writer中的值作为提交的数据   
     success: function(msg){                  //提交成功后的回调，msg变量是ok.php输出的内容。   
     alert("提交成功！我们会尽快与您联系。");                      //如果有必要，可以把msg变量的值显示到某个DIV元素中
	 document.getElementById("clistname").value="请输入您的联系人姓名（必填）"; 
	 document.getElementById("clisttel").value="请输入您的联系方式（必填）";
	 document.getElementById("clistaddress").value="请输入您的地址（必填）";
	 document.getElementById("clistinfo").value="请输入您的留言";
     } 
   });   
}


/////////////////////////////////////////////////// 首页表单提交///////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){     
	$("#indname").focus(function(){	
		if($(this).val()=="您的姓名"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("您的姓名");
		}
	});
	$("#indtel").focus(function(){	
		if($(this).val()=="您的电话"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("您的电话");
		}
	});
	$("#indaddress").focus(function(){	
		if($(this).val()=="您的地址"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("您的地址");
		}
	});
	$("#indcons").focus(function(){	
		if($(this).val()=="您的留言"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("您的留言");
		}
	});
   $(".indmessage .mright2 .submit").click(function(){           //当按钮button被点击时的处理函数   
		 if (document.getElementById("indname").value.length<2 || document.getElementById("indname").value=='您的姓名') {
		 	alert("请输入您的姓名！"); 
			document.getElementById("indname").focus();
		 }
		 else if (document.getElementById("indtel").value.length<4 || document.getElementById("indtel").value=='您的电话') {
			alert("请输入您的电话！"); 
			document.getElementById("indtel").focus();
		 }
		 else if (document.getElementById("indaddress").value.length<2 || document.getElementById("indaddress").value=='您的地址') {
			alert("请输入您的地址！"); 
			document.getElementById("indaddress").focus();
		 }
		 else
		 { postdata2();}                                       //button被点击时执行postdata2函数
   });   
});   
function postdata2(){                              //提交数据函数   
   $.ajax({                                                 //调用jquery的ajax方法   
     type: "POST",                                      //设置ajax方法提交数据的形式   
     url: "/inc/savetop.php",                                       //把数据提交到ok.php   
     data: "listname="+$("#indname").val()+"&listinfo="+$("#indcons").val()+"&listtel="+$("#indtel").val()+"&listaddress="+$("#indaddress").val(),     //输入框writer中的值作为提交的数据   
     success: function(msg){                  //提交成功后的回调，msg变量是ok.php输出的内容。   
     alert("提交成功！我们会尽快与您联系。");                      //如果有必要，可以把msg变量的值显示到某个DIV元素中
	 document.getElementById("indname").value="您的姓名"; 
	 document.getElementById("indtel").value="您的电话";
	 document.getElementById("indaddress").value="您的地址";
	 document.getElementById("indcons").value="您的留言";
     } 
   });   
}