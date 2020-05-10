// const promise = new Promise((resolve, reject) => {
// 	const rand = Math.random();
// 	if (rand < 0.5) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promise.then(() => {
// 	console.log("Yay, Dog");
// });

// promise.catch(() => {
// 	console.log(":( No Dog");
// });

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const rand = Math.random();
// 		if (rand < 0.5) {
// 			resolve();
// 		} else {
// 			reject();
// 		}
// 	}, 5000);
// });

// promise.then(() => {
// 	console.log("Yay, Dog");
// });

// promise.catch(() => {
// 	console.log(":( No Dog");
// });

// const makeDogPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand < 0.5) {
// 				resolve();
// 			} else {
// 				reject();
// 			}
// 		}, 1500);
// 	});
// };

// makeDogPromise()
// 	.then(() => {
// 		console.log("Yay We Got A Dog!");
// 	})
// 	.catch(() => {
// 		console.log("noop. it is rejected!");
// 	});

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.7) {
				reject({ status: 404 });
			} else {
				const pages = {
					"/users": [
						{ id: 1, username: "Bilbo" },
						{ id: 5, username: "Fisher" },
					],
					"/about": "This is the about page!",
				};
				const data = pages[url];
				resolve({ status: 200, data });
			}
		}, 3000);
	});
};

fakeRequest("/users")
	.then((res) => {
		console.log("Status Code", res.status);
		console.log("Status code", res.data);
	})
	.catch((res) => {
		console.log(res.status);
	});
