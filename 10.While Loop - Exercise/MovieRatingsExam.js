function movieRatings(input) {
  let index = 0;
  let numberMovies = Number(input[index]);
  index++;

  let moviesChecked = 0;
  let maxRating = Number.MIN_SAFE_INTEGER;
  let minRating = Number.MAX_SAFE_INTEGER;
  let ratingSum = 0;
  let maxRatingName = 0;
  let minRatingNAme = 0;

  while (moviesChecked < numberMovies) {
    let movieName = input[index];
    index++;
    let movieRating = Number(input[index]);
    index++;
    ratingSum += movieRating;
    moviesChecked++;

    if (movieRating > maxRating) {
      maxRating = movieRating;
      maxRatingName = movieName;
    }
    if (movieRating < minRating) {
      minRating = movieRating;
      minRatingNAme = movieName;
    }
  }
  let avgRating = ratingSum / numberMovies;
  console.log(
    `${maxRatingName} is with highest rating: ${maxRating.toFixed(1)}`
  );
  console.log(
    `${minRatingNAme} is with lowest rating: ${minRating.toFixed(1)}`
  );
  console.log(`Average rating: ${avgRating.toFixed(1)}`);
}

movieRatings([
  "3",
  "Interstellar",
  "8.5",
  "Dangal",
  "8.3",
  "Green Book",
  "8.2",
]);
