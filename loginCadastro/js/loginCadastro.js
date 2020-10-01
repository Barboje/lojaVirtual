$('#botao').click(function (e) {
  var nome = $('#nome').val();
  e.preventDefault();
  window.location.href = "../home/index.html?pessoa=" + nome;
})

