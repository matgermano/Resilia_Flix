$(document).ready(() => {
    // $('#buscarForm').on('submit', (e) => {
    //     let buscarTexto = $('#buscarTexto').val();
    //     getMovies(buscarTexto)
    //     e.preventDefault();
    // });
    getMovie();
});
function getMovie() {
    let movieId = sessionStorage.getItem('movieId');
    console.log(`Got movieID ${movieId}`);
    axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=3b8b5699`)
        .then((response) => {
            console.log('got response', response);
            let movie = response.data;

            let output = `
                <div class="row">
                <div class="col-md-4">
                    <img src="${movie.Poster}" alt="thumbnail">
                </div>     
                <div class="col-md-8">
                    <h2>${movie.Title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre:</strong>  ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released:</strong>  ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated</strong>  ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating:</strong>  ${movie.Rating}</li>
                        <li class="list-group-item"><strong>Director:</strong>  ${movie.Director}</li>
                        <li class="list-group-item"><strong>Writter:</strong>  ${movie.Writter}</li>
                        <li class="list-group-item"><strong>Actors:</strong>  ${movie.Actors}</li>
                    </ul>
                    <div class="well">
                    <h2>Plot</h2>
                    <p>${movie.Plot}</p>
                    <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank" class="btn">Watch the movie</a>
                    <a href="index.html" class="btn">Go back</a>
                    </div>
                </div>

                
               `;
               $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}