window.onload=function(){
	var gray=document.getElementById("gray");
	var blue=document.getElementById("blue");
	var red=document.getElementById("red");
	var cyan=document.getElementById("cyan");
	var orange=document.getElementById("orange");
	var green=document.getElementById("green");
	var div=[gray,blue,red,cyan,orange,green];
	var txt=document.getElementById("txt");
	var arr=['#A9A9A9','#7B68EE','#FF0000','#48D1CC','#F4A460','#90EE90'];
//	for(var i=0;i<div.length;i++){
//		div[i].onclick=function(){
//			console.log(div[i]);
//			localStorage.setItem("color",arr[i]);
//			txt.style.backgroundColor=localStorage.getItem("color");
//		}
//	}
	blue.onclick=function(){
		localStorage.setItem("color",arr[1]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	red.onclick=function(){
		localStorage.setItem("color",arr[2]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	cyan.onclick=function(){
		localStorage.setItem("color",arr[3]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	orange.onclick=function(){
		localStorage.setItem("color",arr[4]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	green.onclick=function(){
		localStorage.setItem("color",arr[5]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	gray.onclick=function(){
//		div1.style.marginTop="-3px";
		localStorage.setItem("color",arr[0]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	txt.style.backgroundColor=localStorage.getItem("color");
}