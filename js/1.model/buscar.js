const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=3b8b5699';
const BuscaApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=3b8b5699';
$(document).ready(() => {
    $('#buscarForm').on('submit', (e) => {
        let buscarTexto = $('#buscarTexto').val();
        getMovies(buscarTexto)
        e.preventDefault();
    });
 
});

