//executor function used to inform the promise
//whether an execution has been successful
const getIds = new Promise((resolve, reject) => {
	// use setTimeout to simulate async tasks
	setTimeout(() => {
		//return the result of the promise if successful
		resolve([523, 994, 456, 123]);
	}, 1500);
});

const getRecipe = (recId) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(Id) => {
				const recipe = {
					title: "Fresh Tomato Pasta",
					publisher: "McGraw Hill",
				};
				resolve(`${Id}: ${recipe.title}`);
			},
			1500,
			recId
		);
	});
};

//consume promise
//.then is a handler function and inside it a callback function
//that will execute when the promise is successful.
//the argument - "Ids" - is the result of the successful promise
getIds
	.then((Ids) => {
		console.log(Ids);
		return getRecipe(Ids[2]); // return 456: Fresh Tomato Pasta
	})
	.then((recipe) => {
		console.log(recipe); //this logs the above result
	})
	.catch((error) => {
		console.log("Error");
	});
