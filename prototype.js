/*
let arr = ["houdunren"];
let arr2 = arr.concat("向军");

//判断原型是否相等
console.table(Object.getPrototypeOf(arr) === Object.getPrototypeOf(arr2));

//完全数据字典对象 - 没有原型
let hd = Object.create(null, {
	name: {
		value: "houdunren",
	},
});

//没有hasOwnProperty的方法
// console.log(hd);
// console.log(hd.hasOwnProperty("name"));

let hd2 = {
	name: "jason mraz",
	height: 178,
	weight: 67,
};
hd2.__proto__.render = function () {
	console.log(
		`${this.name} is ${this.height} tall and weighs ${this.weight} kilos.`
	);
};
hd2.render();

function User() {}
User.prototype.show = function () {
	console.log("houdunren");
};
//let hd = new User();

//hd.show();
//console.dir(User)
//console.log(User.prototype === hd.__proto__);

//构造函数 - 可以使任意函数
function Girlfriend(name) {
	this.name = name;
}
//设置构造函数的原型对象
Girlfriend.prototype = function () {
	console.log(`my girlfriend's name is ${this.name}`);
};
//实例对象
var alice = new Girlfriend("alice");
// console.log(Girlfriend.prototype === alice.__proto__);
// console.log(Girlfriend.prototype.__proto__ === Function.prototype)
// console.log(Girlfriend.prototype.__proto__.__proto__=== Object.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);

//借用原型链上的方法
let hd = {
	data: [1, 2, 3, 4, 5, 6, 7, 100],
};
Object.setPrototypeOf(hd, {
	max() {
		return this.data.sort((a, b) => b - a)[0];
	},
});
//console.log(hd.max());

//借用其他对象原型链上的方法
let xj = {
	lessons: { js: 87, php: 63, node: 99, linux: 88 },
	get data() {
		return Object.values(this.lessons);
	},
};
//console.log(hd.max.apply(xj));

function User(name){
  this.name = name;
}
User.prototype = {
  constructor: User, 
  show(){
    console.log(this.name);
  },
  get(){
    console.log('get....');
  }
};
let jason = new User('jason');
let michael = new User('michael');

let user = {
	show() {
		return this.name;
	},
};
let hd = Object.create(user, {
	name: {
		value: "houdunren",
	},
});
console.log(user.isPrototypeOf(hd));

function User() {}
User.prototype = {
	constructor: User,
	name() {
		console.log(this.name);
	},
};
function Admin() {
	console.log("admin.role");
}
function Member() {
	console.log("member.role");
}

//Admin继承User
Admin.prototype.__proto__ = User.prototype;

//Member继承User
Member.prototype.__proto__ = User.prototype;

class User {
	constructor(name) {
		this.name = name;
	}
	show() {}
}
let u = new User("houdunren");
console.log(Object.getOwnPropertyNames(u));

function HD(name) {
	this.name = name;
}
let h = new HD("后盾");
console.log(Object.getOwnPropertyNames(h));

class User {
	site = "houren.com";
	constructor(name) {
		this.name = name;
	}
	get() {
		return this.name;
	}
	changeSite(value) {
		this.site = value;
	}
	show() {
		return `${this.site}: ${this.name}`;
	}
}
let user = new User("jason");
user.changeSite("gogo.com");
console.log(user.show());


class User{
  constructor(name){
    this.name = name;
  }
  show(){}
}
let u = new User('jason');
console.log(JSON.stringify(Object.getOwnPropertyDescriptors(User.prototype, 'show'), null, 2));
for(const key in u){
  console.log(key);
}


class User {
	name = "Jason Mraz";
	sayHi() {
		console.log(`hello, ${this.name}`);
	}
}
let user1 = new User();
user1.sayHi();
// alert(User.prototype.sayHi);
// alert(User.prototype.name)
console.dir(User.prototype)

class Article {
  planet = "earth";
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article('html', new Date(2019, 1, 1)), 
  new Article('css', new Date(2019, 0, 1))
];

console.log(articles[0].planet);

class Animal{
  static planet = "Earth";
  constructor(name, speed){
    this.speed = speed;
    this.name = name;
  }
   static run(speed) {
    //this.speed += speed;
    console.log(`jason runs with speed ${speed}`);
  }
}

class Rabbit extends Animal {
  hide(){
    console.log(`${this.name} hides`);
  }
}

let rabbit = new Rabbit('monkey', 50);
// error because static methods are not available to instances of a class
//console.log(rabbit.run(50))      
console.log(Rabbit.run(50));

*/