const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (process.argv.length > 2) {
    process.argv.slice(2).forEach(breed => {
      fetchBreedDescription(breed, (err, description) => {
        if (!err) {
          console.log(`${breed} Info:`);
          console.log(description);
        } else {
          console.log(`${err}`);
        }
      });
    });
  } else {
    console.log("Expected: ");
    console.log("node breedFetcher '[breed1]' '[breed2]' ");
  }
});