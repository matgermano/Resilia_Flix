async function apiOmdb(filme) {
  const apikey = "3b8b5699";
  let url = `http://www.omdbapi.com/?i=${movieId}&apikey=${apikey}&`;
  let response = await fetch(url).then((response) => response.json());
  console.log(response);
  try {
    if (response.Poster !== undefined) {
      sucessoApi(response);
    } else {
      throw new Error(
        "Poster não encontrado"
      );
    }
  } catch (error) {
    erroApi(error);
  }
}
