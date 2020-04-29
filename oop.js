/*
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

function hd(){
  return {name: 'justin timberlake', age: 40};
}
//let {name, age} = hd();
// console.log(name, age)

function user({name, age}){
  console.log(name, age);
}
user({name: 'justin timberlake', age: 40});

//destructure Math object
let {random} = Math;
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
  job: 'rock star'
};

let {name, lesson: {title, student=600}} = hd2;
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

*/

