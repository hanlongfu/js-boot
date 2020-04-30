let user = {
	name: "jason mraz",
	age: 26,
	occupation: "singer",
	"net worth": 10000000,
};

// console.log(user["age"]);

for (const key in user) {
	// dot notation doesn't work here
	//console.log(user[key]);
}

// spread operator
let hd = { ...user, married: true, numOfChildren: 4 };

for (const key in hd) {
	// console.log(hd[key]);
}

function upload(params) {
	let config = {
		type: "*.jpeg, *.png",
		size: 10000,
	};
	config = { ...config, ...params };
	//console.log(config);
}
// console.log(upload({ size: 99 }));

//let {name, age, occupation} = user;
// console.log(occupation);

function hd() {
	return { name: "justin timberlake", age: 40 };
}
//let {name, age} = hd();
// console.log(name, age)

function user({ name, age }) {
	console.log(name, age);
}
user({ name: "justin timberlake", age: 40 });

//destructure Math object
let { random } = Math;
console.log(random);

// 解构层级对象
let hd = {
	name: "jason",
	lesson: {
		title: "javascript",
	},
};

let {
	name,
	lesson: { title },
} = hd;

console.log(title);

//解构的默认值
let hd2 = {
	name: "jason",
	lesson: {
		title: "javascript",
	},
	job: "rock star",
};

let {
	name,
	lesson: { title, student = 600 },
} = hd2;
console.log(title, student);

function createElement(options) {
	let { width = 200, height = 100, backgroundColor = "red" } = options;
	//console.log(width, height, backgroundColor);
	const div = document.createElement("div");
	div.style.width = width + "px";
	div.style.height = height + "px";
	div.style.backgroundColor = backgroundColor;
	document.body.appendChild(div);
}
createElement({ width: 600, height: 200, backgroundColor: "orchid" });

//检测对象本身的属性
let hd = {};
hd.name = "后蹲人";
hd.age = 60;
hd.job = "programmer";
delete hd.name;
console.log(hd.hasOwnProperty("age")); // true

//检测包含原型链上的属性
console.log(hd);
console.log("toString" in hd);

//设置对象的原型
let a = {
	name: "google",
};
let b = {
	url: "google.com",
};
Object.setPrototypeOf(a, b);
console.log(a);

let shopping = {
	user: "jason",
	item: 4,
	price: 50,
};

//检测对象的属性 Object.getOwnPropertyDescriptor(obj, "property")
// console.log(
// 	JSON.stringify(Object.getOwnPropertyDescriptor(shopping, "user"), null, 2)
// );

Object.defineProperty(shopping, "user", {
	value: "mraz",
	writable: false,
	enumerable: true,
	configurable: true,
});

// console.log(
// 	JSON.stringify(Object.getOwnPropertyDescriptors(shopping), null, 2)
// );

Object.defineProperties(shopping, {
	user: {
		value: "michael",
		writable: false,
		enumerable: false,
		configurable: true,
	},
	item: {
		value: 50,
		writable: false,
		enumerable: true,
		configurable: true,
	},
	price: {
		value: 100,
		writable: false,
		enumerable: true,
		configurable: true,
	},
});

let shopping = {
	user: "jason",
	item: 4,
	price: 50,
};

//Object.preventExtensions(shopping);
shopping.name = "mraz";
//console.log(shopping);

if (Object.isExtensible(shopping)) {
	console.log("hello world");
}

//封闭对象  - 不可以添加属性或者删除
Object.seal(shopping);
console.log(
	JSON.stringify(Object.getOwnPropertyDescriptor(shopping, "user"), null, 2)
);
//不可以添加，也不可以删除
shopping.extra = "lily hunter";
delete shopping.price;

let shopping = {
	user: "jason",
	item: 4,
	price: 50,
};

Object.freeze();
console.log(
	JSON.stringify(Object.getOwnPropertyDescriptor(shopping, "user"), null, 2)
);
shopping.name = "michael";

//使用访问器
const user = {
	data: { name: "houdunren", age: 10 },
	set age(value) {
		if (typeof value != "number" || value < 10 || value > 100) {
			throw new Error("Invalid age");
		}
	},
	get age() {
		return this.data.age;
	},
};
// user.age = 999;  //Invalid age
// console.log(user.age);

//访问器设置token为本地存储，给人感觉是从对象中获取
let request = {
	set token(content) {
		localStorage.setItem("token", content);
	},
	get token() {
		let token = localStorage.getItem("token", content);
		if (!token) alert("please sign in");
		return token;
	},
};
Request.token = "3456jsbb67ijkxh12B3";
console.log(Request.token);

//代理拦截对象
const hd = { name: "houdunren" };
const proxy = new Proxy(hd, {
	get(obj, property) {
		return obj[property];
	},
	set(obj, property, value) {
		obj[property] = value;
		return true;
	},
});
console.log(proxy.name);
proxy.name = "向军";
console.log(proxy);

//代理拦截函数操作
function factorial(num) {
	return num == 1 ? 1 : num * factorial(num - 1);
}
let proxy = new Proxy(factorial, {
	apply(func, obj, args) {
		console.time("run");
		func.apply(this, args);
		console.timeEnd("run");
	},
});
proxy.apply({}, [5]);

//代理拦截数组
let lessons = [
	{
		title: "mysql breakthrough",
		category: "mysql",
	},
	{
		title: "learn flex in 3 days",
		category: "css",
	},
	{
		title: "react app made easy",
		category: "react",
	},
];

let proxy = new Proxy(lessons, {
	get(array, key) {
		const title = array[key].title;
		const len = 5;
		array[key].title =
			title.length > len ? title.substr(0, len) + ".".repeat(3) : title;
		return array[key];
	},
});
console.log(proxy[1]);

function oss(options) {
	if (!options.hasOwnProperty("host")) {
		throw new Error("must have host");
	}
}
oss({ user: admin });

const lessons = [
	{ title: "responsive", category: "css" },
	{ title: "mysql", category: "mysql" },
	{ title: "php", category: "php" },
];

let res = lessons.reduce((obj, cur, idx) => {
	obj[`${cur["category"]}-${idx}`] = cur;
	return obj;
}, {});

console.log(JSON.stringify(res, null, 2));

//merge two objects
let hd = Object.assign({ a: 1 }, { b: 2 });
//console.log(hd);

function upload(params) {
	let options = { size: 19999 };

	options = Object.assign(options, params);
	//console.log(JSON.stringify(options, null, 2))
}
upload({ size: 99, type: "rock" });

// merge two objects
let combinedObj = Object.assign(lessons, hd);
//console.log(combinedObj);

let deepObj = {
	name: "jason",
	user: {
		name: "MLK",
	},
	arr: [],
};

//浅拷贝 - 引用拷贝
//深拷贝 - 值拷贝
function copy(obj) {
	let res = {};
	for (const key in obj) {
		res[key] = typeof obj[key] == "object" ? copy(obj[key]) : obj[key];
	}
	return res;
}

let deepObjCopy = copy(deepObj);
console.log(deepObjCopy);
// deepObjCopy.user.name = "michael jordan";
deepObjCopy.arr.push("abc");

//深拷贝 - 拷贝数组和对象
function copyGeneral(obj) {
	let res = obj instanceof Array ? [] : {};
	for (const [key, value] of Object.entries(obj)) {
		res[key] = typeof value == "object" ? copyGeneral(value) : value;
	}
	return res;
}

let deepObjCopy = copyGeneral(deepObj);
//console.log(JSON.stringify(deepObj, null, 2));
//console.log(JSON.stringify(deepObjCopy, null, 2));

//构造函数
function User(name) {
	this.name = name;
	this.show = function () {
		console.log(this.name);
	};
}

let xj = new User("湘军");
console.log(xj);
xj.show();

//封装和抽象
function User(name, age) {
	let data = { name, age };
	this.show = function () {
		console.log(data.name + this.info());
	};
	this.info = function () {
		return data.age > 50 ? "old age" : "young age";
	};
}

let xj = new User("湘军", 35);
xj.show();
console.log(xj);

function user(name) {
	return {
		name,
		show: function () {
			console.log(this.name);
		},
	};
}
let xj = user("jason");
xj.show();
