async function apiFilme(filme) {
  const key = "3b8b5699";
  let url = `https://www.omdbapi.com/?apikey=${key}&t=${filme}`;
  let apiResponse = await fetch(url).then((response) => response.json());
  console.log(apiResponse);
  try {
    if (apiResponse.Title !== undefined) {
      sucessoApi(apiResponse);
    } else {
      throw new Error(
        "O filme não foi encontrado, nosso buscador funciona apenas com titulos em seu idioma <strong>original</strong>. <br> Tente pesquisar em <strong>inglês.</strong>"
      );
    }
  } catch (error) {
    erroApi(error);
  }
}

function sucessoApi(apiResponse) {
  $(".list-content").css("display", "none");
  $("#InfoOmdb").css("display", "flex");
  $("#poster").html(`<img src="${apiResponse.Poster}">`);
  $("#titulo").html(`${apiResponse.Title}`);
  $("#diretor").html(`Diretor: ${apiResponse.Director}`);
  $("#ano").html(`Ano: ${apiResponse.Year}`);
  $("#duracao").html(`Duração: ${apiResponse.Runtime}`);
  $("#sinopse").html(`Sinopse: ${apiResponse.Plot}`);
  $("#btnPesquisa").html(
    `<button id="botao"><a href="./html/buscar.html" class="text-light" id="tirar">Pesquise mais filmes</a></button>`
  );
}

function erroApi(error) {
  $("#teste").css("display", "none");
  $(".list-content").css("display", "none");
  $("#infoOmdb").css("display", "flex");
  $("#poster").empty();
  $("#diretor").empty();
  $("#ano").empty();
  $("#lancamento").empty();
  $("#duracao").empty();
  $("#sinopse").empty();
  $("#titulo").html(`${error}`);
}
