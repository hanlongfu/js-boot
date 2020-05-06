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

//fetch a recipe that's related to the author
//of the first recipe
const getRelated = (publisher) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(pub) => {
				const recipe = { title: "Italizan Pizza", publisher: "Seton Hall" };
				resolve(`${pub}: ${recipe.title}`);
			},
			1500,
			publisher
		);
	});
};

//consume promise
//.then is a handler function and inside it a callback function
//that will execute when the promise is successful.
//the argument - "Ids" - is the result of the successful promise
// getIds
// 	.then((Ids) => {
// 		console.log(Ids);
// 		return getRecipe(Ids[2]); // return 456: Fresh Tomato Pasta
// 	})
// 	.then((recipe) => {
// 		console.log(recipe); //this logs the above result
// 		return getRelated("Seton Hall");
// 	})
// 	.then((recipe) => {
// 		console.group(recipe);
// 	})
// 	.catch((error) => {
// 		console.log("Error");
// 	});

// a new way of consuming promises
// async function getRecipesAW() {
// 	const Ids = await getIds; // Ids = [523, 994, 456, 123]
// 	console.log(Ids);
// 	const recipe = await getRecipe(Ids[2]);
// 	console.log(recipe);
// 	const related = await getRelated("Seton Hall");
// 	console.log(related);

// 	return related;
// }
// getRecipesAW().then((recipe) => console.log(recipe));

fetch(
	"https://crossorigin.me/https://www.metaweather.com/api/location/search/?lattlong=50.068,-5.316"
)
	.then((result) => {
		console.log(result);``
		return result.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => console.log(error));
