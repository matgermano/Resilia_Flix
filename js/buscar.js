const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=3b8b5699';
const BuscaApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=3b8b5699';
$(document).ready(() => {
    $('#buscarForm').on('submit', (e) => {
        let buscarTexto = $('#buscarTexto').val();
        getMovies(buscarTexto)
        e.preventDefault();
    });
});

const botao = document.querySelector("#botao");
$('#buscarForm').on('submit', (e) => {
    botao.onclick = () => {
        getMovies(botao)
        e.preventDefault();
    }
})

function getMovies(buscarTexto) {
    axios.get('https://www.omdbapi.com/?s=' + buscarTexto + '&apikey=3b8b5699')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
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


            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'filme.html';
    return false;
}

function getMovie() {
    let movieId = sessionStorage.GetItem('movieId');

    axios.get('https://www.omdbapi.com/?i=' + movieId + '&apikey=3b8b5699')
        .then((response) => {
            console.log(response);
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