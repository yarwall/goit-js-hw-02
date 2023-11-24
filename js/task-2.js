'use strict';

// task#2

function getShippingMessage(country, price, deliveryFee) {
	const totalPrice = price + deliveryFee;
	const message = `Shipping to ${country} will cost ${totalPrice} credits`;
	return message;
}
console.log(getShippingMessage("Australia", 120, 50)); // "Доставка до Австралії коштуватиме 170 кредитів"
console.log(getShippingMessage("Germany", 80, 20)); // "Доставка до Німеччини коштуватиме 100 кредитів"
console.log(getShippingMessage("Sweden", 100, 20)); // "Доставка до Швеції коштуватиме 120 кредитів"