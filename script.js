//your code here
      let touristSpots = [
        "The Virupaksha Temple",
        "Victoria Memorial",
        "Tajmahal",
      ];
      let newArray =[];

      for (let i = 0; i < touristSpots.length; i++) {

        const newText = touristSpots[i].replace(/\b(?:An|The|A)\s/i, "");
        let spotsObj = {
           [newText] : touristSpots[i] 
        };
        newArray.push(spotsObj);
      }
    
      let withArticle = newArray.map(obj => Object.keys(obj)[0]);
      withArticle.sort();

        for(let i = 0; i < withArticle.length; i++){
            const foundObject = newArray.find(obj => Object.keys(obj)[0] === withArticle[i]);
            touristSpots[i] = foundObject[withArticle[i]];
        }
