/*var button=document.getElementsById("biaodan4");
var handler=function(){
  $("#alert").addClass("alert-dangder");
};
EventUtil.addHandler(button,"click",handler);*/

/*var focu=function(){
$("#yincang").css("visibility","visible");
};
var btn=document.getElementsById("focu");
EventUtil.addHandler(btn,"focus",focu);*/

	/*$("#focu").on("focus",function(){
		$("#yincang").css("visibility","visible")});*/
		//聚焦事件
		function xianshi(){
			$("#yincang").css("visibility","visible");
		}
		
		//失焦事件
		function yinshen(){
			$("#yincang").css("visibility","hidden");
		}

		function jinggao(){
			$("#alert").css("outline-color","red").focus();
			$("#label").css("visibility","visible");
			$("#label").css("top","390px");
		}
		function loadXMLDoc(){
			var xmlhttp;
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			xmlhttp.onreadystatechange=function()
			  {
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			    document.querySelector("form").outerHTML=xmlhttp.responseText;
			    }
			  }
			xmlhttp.open("GET","../html/ajaxform.html",true);
			xmlhttp.send();
		}
