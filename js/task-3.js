'use strict';

// task#3

function getElementWidth(content, padding, border) {
	const summElements = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
	return summElements;	
}
console.log(getElementWidth("50px", "8px", "4px")); // сума 74
console.log(getElementWidth("60px", "12px", "8.5px")); // сума 101
console.log(getElementWidth("200px", "0px", "0px")); // сума 200