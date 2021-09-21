let movieId = sessionStorage.getItem("movieId");
console.log(`Got movieID ${movieId}`);
axios
  .get(`https://www.omdbapi.com/?i=${movieId}&apikey=3b8b5699`)
  .then((response) => {
    console.log("got response", response);
    let movie = response.data;
  });
