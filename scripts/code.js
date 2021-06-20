function copy(type) {
	var text;
	if (type == 1) {
		text = "Armashka#5252";
		text.select();
		document.execCommand("copy");
	}
}