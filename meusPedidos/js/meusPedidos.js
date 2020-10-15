var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
var i = 0;     // variável que irá percorrer as posições
var valor = 0; // variável que irá receber o preço do produto convertido em Float.

for (i = 1; i <= 99; i++) // verifica até 99 produtos registrados na localStorage
{
  var prod = localStorage.getItem("produto_" + i + ""); // verifica se há recheio nesta posição. 
  if (prod != null) {

    var produto = JSON.parse(localStorage.getItem("produto_" + i));
    
    var linha_produto = "<tr>"
    + "<td>" + produto.prod + "</td>"
    + "<td>" + produto.qtd + "</td>"
    + "<td> R$" + produto.valor_unitario.toFixed(2) + "</td>"
    + "<td class='text-right right'> R$" + produto.valor_total.toFixed(2) + "</td>"
    + "</tr>";

    document.getElementById("tabela-produto").innerHTML += linha_produto;
    total += produto.valor_total;
  }
}



var linha_total = "<tr>"
+ "<td colspan='4' class='text-right right'>Total: R$ " + total.toFixed(2) + "</td>"
+ "</tr>";

document.getElementById("tabela-produto").innerHTML += linha_total;

// exibe o total dos recheios
// document.getElementById("total").innerHTML = total.toFixed(2);