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


// $("button").on("click", async function (event) {
//   event.preventDefault();
//   $("#inicio").css("display", "none");
//   let valueData = $("#date").val();
//   let url = `https://api.nasa.gov/planetary/apod?api_key=QRaDd5HWwVtjNo83M6DhwSdhxw9M2Ibxj798RL5w&date=${valueData}`;
//   let api = await fetch(url).then((response) => response.json());
//   $("body").css("background-image", `url(${api.url})`);
//   $("body").css("background-repeat", "no-repeat");
//   $("body").css("background-size", "cover");
//   $("#corpo").css("display", "block");
//   $("#titulo").html(`${api.title}`);
//   $("#texto").html(`(${api.explanation})`);
//   console.log(event);
//   console.log(apiResponse);
//   console.log(inputDate);

//   if (valueData < 01 / 01 / 1996) {
//     alert("Datas válidas somente a partir de 1996");
//   }
// });
