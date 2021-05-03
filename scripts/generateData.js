// generate random data for the api endpoint

/*
  - create a basic array of values per property
  - loop X times and math.random() each property
*/
const startTime = Date.now();
// default to 50 dataRows if not specific on command line
const dataRows = (process.argv.slice(2))[0] || 50;

const fs = require('fs');

const availableValues = {
  name: { 
    values: [
      "Fullmetal Alchemist: Brotherhood",
      "Shingeki no Kyojin Season 3 Part 2",
      "Steins;Gate",
      "Hunter x Hunter (2011)",
      "Ginga Eiyuu Densetsu",
      "3-gatsu no Lion 2nd Season",
      "Koe no Katachi",
      "Gintama.",
      "Gintama",
      "Clannad",
      "Clannad: After Story",
      "Kimi no Na wa."
    ]
  }, // 1 value
  genre: { 
    values: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Ecchi",
      "Fantasy",
      "Game",
      "Horror",
      "Mecha",
      "Music",
      "Mystery",
      "Psychological",
      "Romance",
      "School",
      "Sci-Fi",
      "Seinen",
      "Shoujo",
      "Shounen",
      "Slice of Life",
      "Sports",
      "Thriller",
      "Yaoi",
      "Yuri"
    ] 
  }, // 1+ values
  type: { values: ["TV", "OVA", "Movie"], weights: [70, 20, 10] }, // 1 value

  /*
    other values:
    image: `poster-lg-{0 to 8}.png`
  */
}

let data = { anime: [] };
let index = 0;

function returnIndex(valueArray, weights) {
  if (!weights) {
    return parseInt(Math.random() * (valueArray.length - 1));
  } else {
    // find the highest index of the weights.
    // the weight indexes are respective to the value indexes.
    let highestIndex = 0;
    let calculatedWeights = weights.map((weight) => Math.random() * weight);
    calculatedWeights.forEach((calculatedWeight, i) => {
      calculatedWeights[highestIndex] < calculatedWeight ? highestIndex = i : null;
    });

    return highestIndex;
  }
}

function generateGenres() {
  const { genre } = availableValues;

  // genre values
  let genreValues = [];
  let genreUsedIndexes = [];
  let totalGenres = parseInt(Math.random() * parseInt(genre.values.length / 8)) + 1;
  let completed = 0;

  while (completed < totalGenres) {
    const genreIndex = returnIndex(genre.values);
    let indexWasUsed = false;

    genreUsedIndexes.forEach((genreUsedIndex) => {
      if (genreUsedIndex === genreIndex) indexWasUsed = true;
    });

    if (!indexWasUsed) {
      genreValues.push(genre.values[genreIndex]);
      genreUsedIndexes.push(genreIndex);
      completed += 1;
    }

    // console.log(`${completed} - ${totalGenres} - ${genreIndex} - ${indexWasUsed}`);
  }

  return genreValues;
}

(async () => {
  while (index < dataRows) {
    const { name, type } = availableValues;

    const compiledData = await {
      name: name.values[returnIndex(name.values)],
      genres: await generateGenres(),
      type: type.values[returnIndex(type.values, type.weights)],
      image: `/img/poster-lg-${parseInt(Math.random() * 8)}.png`
    }
  
    // other values + push
    data.anime.push(compiledData);
  
    // MAKE SURE TO ADD THE INDEX, OTHERWISE IT WILL RUN FOREVER AND USE ALL YOUR RAM!!!
    index += 1;
  }
  
  const finalData = JSON.stringify(data, null, "\t");
  
  fs.writeFileSync(`dataDump/anime-data_${dataRows}-rows_-${(new Date()).toISOString()}.json`, finalData);

  console.log(`Run time: ${Date.now() - startTime} ms`);
})();
