//scenario 1
function hd() {
	let n = 1;
	return function sum() {
		let m = 1;
		function show() {
			console.log(++m);
		}
		show();
	};
}
let a = hd();
a(); //2
a(); //2

//scenario 2
function hd2() {
	let n = 1;

	return function sum() {
		let m = 1;
		return function show() {
			console.log(++m);
		};
		// show();
	};
}
let b = hd2()();
b(); //2
b(); //3

//constructor function
function Hd() {
	let n = 1;
	this.sum = function () {
		console.log(++n);
	};
}
let a = new Hd();
a.sum();
a.sum();

for (var i = 1; i <= 3; i++) {
	console.log(i);
}
console.log(`last i: ${i}`);

let arr = [];
for (var i = 1; i <= 3; i++) {
	arr.push(function () {
		return i;
	});
}
console.log(arr[1]());
console.log(arr[2]());

// using regular function
let arr = [1, 23, 4, 5, 6, 78, 19, 20];
let hd = arr.filter((el) => el >= 2 && el <= 9);
console.log(hd);

//using closures
function between(a, b) {
	return function (el) {
		return el >= a && el <= b;
	};
}
console.log(arr.filter(between(3, 9)));

//当你多点击几次，按钮会产生抖动，原因就是每次点击按钮都会产生一个新的作用域（环境），从而left会被重新设置为1。解决方法就是把left=1移出去
let btns = document.querySelectorAll("button");
btns.forEach((item) => {
	let left = 1;
	item.addEventListener("click", () => {
		setInterval(function () {
			//子函数可以访问到外部作用域的item的值
			item.style.left = left++ + "px";
		}, 5);
	});
});

//动画加速的解决方法
let btns = document.querySelectorAll("button");
btns.forEach((item) => {
	let interval = false;
	let left = 1;
	item.addEventListener("click", () => {
		if (!interval) {
			interval = true;
			setInterval(function () {
				//子函数可以访问到外部作用域的item的值
				item.style.left = left++ + "px";
			}, 100);
		}
		console.log(interval);
	});
});

const lessons = [
	{ title: "javascript", click: 119, price: 50 },
	{ title: "mysql", click: 129, price: 150 },
	{ title: "react", click: 19, price: 250 },
	{ title: "python", click: 49, price: 510 },
	{ title: "css", click: 78, price: 550 },
];

//根据价格排序
// let hd = lessons.sort((a, b) => {
// 	return a.price > b.price ? 1 : -1;
// });
// console.log(hd);

//把回调函数一般化了
function order(field) {
	return function (a, b) {
		return a[field] > b[field] ? 1 : -1;
	};
}

function order(field, type) {
	return function (a, b) {
		if (type === "asc") return a[field] > b[field] ? 1 : -1;
		return a[field] < b[field] ? 1 : -1;
	};
}

let hd = lessons.sort(order("price", "asc"));
//console.table(hd);

//以下的例子每次点击后都要把一个复杂的对象存到内存当中，造成浪费
let divs = document.querySelectorAll("div");
divs.forEach((item) => {
	item.addEventListener("click", () => {
		console.log(item.getAttribute("desc"));
	});
});

//以下是优化后
let divs = document.querySelectorAll("div");
divs.forEach((item) => {
	//把要找的属性存到一个变量里面
	let desc = item.getAttribute("desc");
	item.addEventListener("click", () => {
		console.log(desc);
	});
	item = null; //remove item to save memory space
});

//this指向的不是hd的方法，而是window
let hd = {
	user: "jason mraz",
	get: function () {
		return function () {
			return this.user;
		};
	},
};

let a = hd.get();
console.log(a());
