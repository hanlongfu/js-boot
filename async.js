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
function getWeather(woeid) {
	fetch(
		"https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/"
	)
		.then((result) => {
			console.log(result);
			return result.json();
		})
		.then((data) => {
			const today = data.consolidated_weather[0];
			console.log(
				`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`
			);
		})
		.catch((error) => console.log(error));
}
getWeather(2487956);


// remember that async function returns a promise
async function getWeatherAW(woeid){
	try{
		const result = await fetch("https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/");
		const data  = await result.json;
		const tomorrow = data.consolidated_weather[1];
		console.log(
			`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`
		);
		// "data" will be the resolved value of that promise
		return data;
	}
	catch(error){
		alert(error);
	
}

getWeatherAW(2487956);
const dataLondon = getWeatherAW(44418);

//this doesn't work because console.log runs way before
//the data comes back. The result comes back as a promise. 
console.log(dataLondon);

//async function returns a promise
let dataLd;
getWeatherAW(44418).then(data => {
	dataLd = data;
	console.log(dataLd);
});

