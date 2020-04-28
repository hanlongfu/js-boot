//calculate the frequency of a given number
let arr = [1, 2, 3, 1, 1, 5, 6, 6, 7, 6];

function arrayCount(array, item) {
	return array.reduce((total, cur) => {
		total += item === cur ? 1 : 0;
		return total;
	}, 0);
}
console.log(arrayCount(arr, 6));

//find the max of an array
function arrayMax(array) {
	return array.reduce((prev, cur) => {
		return prev > cur ? prev : cur;
	});
}
console.log(arrayMax(arr));

//find the most expensive item in shopping cart

let cart = [
	{ name: "iphone", price: 900 },
	{ name: "imac", price: 1500 },
	{ name: "ipad", price: 360 },
	{ name: "sumsung s10", price: 875 },
];

function maxPrice(goods) {
	return goods.reduce((prev, cur) => {
		return prev.price > cur.price ? prev : cur;
	});
}
console.log(maxPrice(cart));

// summing up the prices in shopping cart
function sum(goods) {
	return goods.reduce((total, cur) => {
		return (total += cur["price"]);
	}, 0);
}
console.log(sum(cart));

// find the names of items that cost more than $500
function getNameByPrice(goods, price) {
	return goods
		.reduce((arr, cur) => {
			if (cur.price > price) arr.push(cur);
			return arr;
		}, [])
		.map((item) => item.name);
}
console.table(getNameByPrice(cart, 500));

// remove duplicates 
