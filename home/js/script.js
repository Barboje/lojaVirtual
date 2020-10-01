function trocaFoto(id, imagem) {
  // pesquisa o "atributo" e faz troca.
  $('#' + id).attr('src', imagem);
}

function voltaFoto(id, imagem) {
  $('#' + id).attr('src', imagem);
  // document.querySelector("#" + id).src = imagem; - JS (outra forma de fazer)
}

function pesquisar() {
  // aqui estou buscando o valor inserido na caixinha de texto,
  // esse valor eu coloco dentro de um variável chamada textoPesquisado
  var textoPesquisado = $('#texto-pesquisa').val();
  $('.produto').hide();

  // Aqui eu coloco para exibir somente o que eu achar com o valor de data-nome
  // IGUAL ao que foi digitado na caixinha - esse código permite exibir quando digitado palavras picadas. (* final)
  $('*[data-nome*="' + textoPesquisado + '"]').show();


  // "SE" a caixa de texto tiver vazia - mostra todos os produtos
  if (textoPesquisado == '') {
    $('.produto').show();
  }

  // se nenhum produto aparecer na "home" em busca, 'SE'' for igual a zero - emite um alerta (produto visivel = a zero)
  if ($('.produto:visible').length == 0) {
    alert('Nenhum produto encontrado.');
  }
}

function filtrarProdutoCategoria(categoria) {
  // Cada DIV  do HTML que é um produto recebe classe: produto
  // Essa função tem o objetivo de esconder TODOS os produtos que tiverem a classe produto.
  $('.produto').hide();

  $('*[data-categoria="' + categoria + '"]').show();
  // Acha no "onclick" todos que tiverem data-categoria igual (mas mto igual) a categoria
}

function exibirTodosProdutos() {
  // Cada DIV  do HTML que é um produto recebe classe: produto
  // Essa função tem o objetivo de mostrar TODOS os produtos que tiverem a classe produto.
  $('.produto').show();
}


function getUrlVars(id) {
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    if (hash[0] == id) {
      return hash[1];
    }
  }
}

var nome = getUrlVars('pessoa');
$('#nome-visitante').text(nome);