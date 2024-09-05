function filtrarProdutos() {
  // Obtem os filtros que estão marcados (.checked)
  var filtroAcessorios = document.getElementById('filtroAcessorios').checked;
  var filtroBeleza =  document.getElementById('filtroBeleza').checked;
  var filtroCasa =  document.getElementById('filtroCasa').checked;
  var filtroTecnologia =  document.getElementById('filtroTecnologia').checked;

  // Obtem o filtro do preço
  var precoMin = parseFloat(document.getElementById('min-price').value) || 0;
  var precoMax = parseFloat(document.getElementById('max-price').value) || 1000;

  // Seleciona todos os produtos
  var produtos = document.querySelectorAll('.ecom-card');

  // Loop sobre os produtos para exibir ou esconder com base nos filtros
  produtos.forEach(function (produto) {
    // Pega os atributos(categoria e preço) do produto e coloca em variáveis
    var categoria = produto.getAttribute("dado-categoria");
    var preco = parseFloat(produto.getAttribute("dado-preco"));

    // Verifica se o produto corresponde aos filtros de categoria e armazena na variáveç=l
    var categoriaValida =
      (filtroAcessorios && categoria === "acessorios") ||
      (filtroBeleza && categoria === "beleza") ||
      (filtroCasa && categoria === "casa") ||
      (filtroTecnologia && categoria === "tecnologia") ||
      // Caso nenhum filtro esteja ativdao exibe todos os produtos
      (!filtroAcessorios && !filtroBeleza && !filtroCasa && !filtroTecnologia);

    // Verifica se o produto corresponde à faixa de preço
    var precoValido = preco >= precoMin && preco <= precoMax;

    // Mostra ou esconde o produto com base nos filtros
    if (categoriaValida && precoValido) {
      produto.classList.remove("oculto");
    } else {
      produto.classList.add("oculto");
    }
  });
}


