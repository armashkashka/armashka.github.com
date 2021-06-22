var t1 = 0;

function check() {
	var wd = $(window).width(), hi = $(window).height();
	if (wd < hi && !t1) {
		var str = window.location.href;
		console.log(str);
		if (str == "") return;
		while (str.charAt(str.length - 1) != '/') str = str.slice(0, -1);
		str += "mobile.html";
		window.location.replace(str)
		console.log(str);
	}
}