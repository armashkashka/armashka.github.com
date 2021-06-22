function aw(){$('.menu').css("width","75%")}function jap(){$('.menu').css("width","0%")}var t1=0;function check(){var wd=$(window).width(),hi=$(window).height();if(wd>hi&&!t1){var str=window.location.href;console.log(str);if(str=="")return;while(str.charAt(str.length-1)!='/')str=str.slice(0,-1);str+="index.html";window.location.replace(str)console.log(str)}}

/*function aw() {
	$('.menu').css("width", "75%");
}

function jap() {
	$('.menu').css("width", "0%");
}

var t1 = 0;

function check() {
	var wd = $(window).width(), hi = $(window).height();
	if (wd > hi && !t1) {
		var str = window.location.href;
		console.log(str);
		if (str == "") return;
		while (str.charAt(str.length - 1) != '/') str = str.slice(0, -1);
		str += "index.html";
		window.location.replace(str)
		console.log(str);
	}
}*/