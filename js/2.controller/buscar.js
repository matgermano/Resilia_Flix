const botao = document.querySelector("#botao");
$("#buscarForm").on("submit", (e) => {
  botao.onclick = () => {
    getMovies(botao);
    e.preventDefault();
  };
});
