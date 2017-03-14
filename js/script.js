var slideNumber = 1;
showDivs(slideNumber);

function plusDivs (n) {
	showDivs(slideNumber += n);
}

function showDivs(n) {
	var x = document.getElementsByClassName("slides");

	for (var i = 0; i < x.length; i ++) {
		x[i].style.display = "none";
	}
	if (n > x.length) {
		slideNumber = 1;
	}
	if (n < 1) {
		slideNumber = x.length;
	}
	x[slideNumber - 1].style.display = "inline-block";
}