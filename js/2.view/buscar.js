function getMovies(buscarTexto) {
  axios
    .get("https://www.omdbapi.com/?s=" + buscarTexto + "&apikey=3b8b5699")
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = "";
      $.each(movies, (index, movie) => {
        output += `
            <div class="col-md-4">
              <div class="well text-center">
                <img class="movie-poster" src="${movie.Poster}" alt="Name of the movie"> 
                <h4>${movie.Title}</h4>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-movies btn-primary"  href="#">Detalhes do Filme</a>
              </div>
            </div>                 
            `;
      });

      $("#movies").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}
