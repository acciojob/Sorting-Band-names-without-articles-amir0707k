//your code here
let bands = [
	"The Virupaksha Temple",
	"Victoria Memorial",
	"Tajmahal",
  ];

// Define the strip function to remove common words from band names
function strip (word) {
    let regex = new RegExp('^(a |the |an )', 'i')
    return word.replace(regex, '').trim()
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)


/** 
 * add ul list in HTML
 **/
document.querySelector('#bands').innerHTML = 
    sortedBands.map(item => `<li>${item}</li>`).join('')
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