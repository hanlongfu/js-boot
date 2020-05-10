/*
function calculateSquare(number) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof number !== "number") {
				return reject(new Error("argument of type number is expected!"));
			}
			const result = number * number;
			resolve(result);
		});
	});
	return promise;
}

calculateSquare(2)
  .then(res => console.log(res), reason => console.log(reason));   // 4

calculateSquare("string")
  .then(res => console.log(res), reason => console.log(reason));   // Error



//promisify
let capitalize = (text) => {
	return text[0].toUpperCase() + text.substr(1);
};

let capitalize_promise = (text) => {
	return new Promise((resolve, reject) => {
		if (typeof text !== "string") {
			return reject(new Error("Argument must be a string!"));
		}
		const result = text[0].toUpperCase() + text.substr(1);
		return resolve(result);
	});
};

capitalize_promise(123)
  .then(
	(res) => console.log(res),
	(reason) => console.log(reason)
);

// Chaining promise
function calculateSquare(number) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof number !== "number") {
				return reject(new Error("argument of type number is expected!"));
			}
			const result = number * number;
			resolve(result);
		});
	});
	return promise;
}

calculateSquare(1)
	.then((value) => {
		console.log(value);
		throw new Error("err");
	})
	//value2 is anything we have returned from previous .then method
	//reason is the "Error" we threw
	.then(
		(value2) => console.log(value2),
		(reason) => console.log(`Error occurred: ${reason}`)
	);

  */

fetch("https://www.omdbapi.com/?s=batman&y=2018&apikey=6cbd1ccb")
	.then((res) => res.json())
	.then((data) => console.log(data));
