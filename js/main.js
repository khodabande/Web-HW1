$( document ).ready(function(){
	$(".button-collapse").sideNav();
});

function show_fix_sidenav() {
	$("#side-navbar1").toggle();
	// document.getElementById("side-navbar1").style.transform = "translateX(0%)";
	// $("#side-navbar1").animate({transform : "translateX(0%)"});
	// document.getElementById("side-navbar1").style.top = "calc(100%  - 60px) !important;";
}

function side_navbar1() {
	$("#side-navbar1").toggle();	
	
}
function hide_fix_sidenav(){
	
	$("#side-navbar1").toggle();	
	// 	document.getElementById("side-head").style.transform = "translateX(-100%)";	
// 	document.getElementById("side-navbar1").style.transform = "translateX(-100%)";
	
}


function toggle_menu1() {
	document.getElementById("side-navbar").style.width = "68px";
	document.getElementById("side-navbar").style.height = "calc(100% - 44px - 48px)";
	document.getElementById("side-navbar2").style.width = "68px";
	document.getElementById("side-navbar1").style.transform = "translateX(-100%)";
	document.getElementById("side-navbar2").onclick = toggle_menu2;
	document.getElementById("side-navbar2-svg").style.transform = "rotate(180deg)";
	document.getElementById("overview-btn").style.display = "block";
	document.getElementById("overview").style.height = "88px";
	document.getElementById("overview-btn").style.marginLeft = "20px";
	document.getElementById("overview-btn").style.marginTop = "-20px";
	document.getElementById("DEVELOP-divider").style.display = "block";
	document.getElementById("DEVELOP").style.display = "none";
	document.getElementById("DEVELOP-divider1").style.display = "block";
	document.getElementById("DEVELOP1").style.display = "none";	
	document.getElementById("DEVELOP-divider2").style.display = "block";
	document.getElementById("DEVELOP2").style.display = "none";
	document.getElementById("padding-adder").style.width = "112px";
	
	var all = document.getElementsByClassName('c5e-entry-displayname');
	for (var i = 0; i < all.length; i++) {
	  all[i].style.display = 'none';
	}

}

function toggle_menu2() {
	document.getElementById("side-navbar").style.width = "256px";
	document.getElementById("side-navbar").style.height = "calc(100% - 104px - 48px)";
	document.getElementById("side-navbar2").style.width = "256px";	
	document.getElementById("side-navbar2-svg").style.transform = "rotate(0deg)";
	document.getElementById("side-navbar2").onclick = toggle_menu1;
	document.getElementById("side-navbar1").style.transform = "translateX(0%)";
	document.getElementById("overview-btn").style.display = "inline";
	document.getElementById("overview").style.height = "55px";
	document.getElementById("overview-btn").style.marginLeft = "1px";
	document.getElementById("overview-btn").style.marginTop = "0px";
	document.getElementById("DEVELOP-divider").style.display = "none";
	document.getElementById("DEVELOP").style.display = "block";
	document.getElementById("DEVELOP-divider2").style.display = "none";
	document.getElementById("DEVELOP2").style.display = "block";
	document.getElementById("DEVELOP-divider1").style.display = "none";
	document.getElementById("DEVELOP1").style.display = "block";
	document.getElementById("padding-adder").style.width = "300px";
	
	var all = document.getElementsByClassName('c5e-entry-displayname');
	for (var i = 0; i < all.length; i++) {
	  all[i].style.display = 'inline';
	}
}
