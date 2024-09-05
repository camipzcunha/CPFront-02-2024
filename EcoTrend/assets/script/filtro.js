// document.addEventListener('DOMContentLoaded', function() {
//     // Função de Pesquisa
//     const searchInput = document.getElementById('search');
//     searchInput.addEventListener('input', function() {
//         const searchValue = this.value.toLowerCase();
//         const sections = document.querySelectorAll('.category-section');

//         sections.forEach(function(section) {
//             const sectionContent = section.textContent.toLowerCase();
//             if (sectionContent.includes(searchValue)) {
//                 section.style.display = 'block';
//             } else {
//                 section.style.display = 'none';
//             }
//         });
//     });

//     // Função de Filtragem por Categoria
//     document.querySelectorAll('.filter-link').forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const category = this.getAttribute('data-category');
//             const sections = document.querySelectorAll('.category-section');

//             sections.forEach(function(section) {
//                 if (section.id === category) {
//                     section.scrollIntoView({ behavior: 'smooth' });
//                     // Opção adicional para destacar a seção selecionada
//                     section.style.backgroundColor = '#f0f0f0'; // Cor de fundo ao selecionar
//                     setTimeout(() => section.style.backgroundColor = '', 2000); // Remove o destaque após 2 segundos
//                 }
//             });
//         });
//     });
// });


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


