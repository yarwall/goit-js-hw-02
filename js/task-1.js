'use strict';

// task#1

function makeTransaction(quantity, pricePerDroid) {
	const totalPrice = quantity * pricePerDroid;
	const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
	return message;
}	

console.log(makeTransaction(5, 3000)); // Ви замовили 5 дроїдів вартістю 15000 кредитів
console.log(makeTransaction(3, 1000)); // Ви замовили 3 дроїдb вартістю 1000 кредитів
console.log(makeTransaction(10, 500)); // Ви замовили 10 дроїдів вартістю 500 кредитів