"use strict"

function calculate() {

	var result;
	var original = document.getElementById("original");
	var temp = original.value;
	var regexp = /^-?\d+(.\d+)?(f|F|C|c)$/g;

	var m = temp.match(regexp);
	m = m[0];	

	if (m) {
		var num = m.match(/^-?\d+(.\d+)?/);
		var type = m.match(/C|c|F|f/);
		num = parseFloat(num);

		if(type == 'c' || type == 'C') {
			result = (num * 9 / 5) + 32;
			result += 'F';
		}
		else {
			result = (num - 32) * 5 / 9;
			result += 'C';
		}
		converted.innerHTML = result;
	}
	else {
		converted.innerHTML = "ERROR! Try something like '-4.2' instead";
	}
}
