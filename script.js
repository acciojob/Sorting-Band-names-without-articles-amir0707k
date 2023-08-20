//your code here
let bands = [
	"The Virupaksha Temple",
	"Victoria Memorial",
	"Tajmahal",
  ];

// Define the strip function to remove common words from band names
function strip(word) {
const regex = /^(a |the |an )/i;
return word.replace(regex, '').trim();
}

// Sort the bands array using the strip function to ignore common words
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

// Update the DOM with the sorted band names
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
const listItem = document.createElement('li');
listItem.textContent = band;
bandList.appendChild(listItem);
});
//   let newArray =[];

//   for (let i = 0; i < touristSpots.length; i++) {

// 	const newText = touristSpots[i].replace(/\b(?:An|The|A)\s/i, "");
// 	let spotsObj = {
// 	   [newText] : touristSpots[i] 
// 	};
// 	newArray.push(spotsObj);
//   }

//   let withArticle = newArray.map(obj => Object.keys(obj)[0]);
//   withArticle.sort();

// 	for(let i = 0; i < withArticle.length; i++){
// 		const foundObject = newArray.find(obj => Object.keys(obj)[0] === withArticle[i]);
// 		touristSpots[i] = foundObject[withArticle[i]];
// }