$("#cep").blur(function () {
  var cep = $(this).val().replace(/\D/g, "");

  if (cep != "") {
    var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      $("#rua").val("...");
      $("#bairro").val("...");
      $("#cidade").val("...");
      $("#uf").val("...");
    }
  }
});
