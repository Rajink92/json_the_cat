const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (process.argv.length > 2) {
    process.argv.slice(2).forEach(breed =>
});