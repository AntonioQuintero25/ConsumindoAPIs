const inputIDProduto = document.querySelector("#idProduto");

const botaoPesquisaProduto = document.querySelector("#btnPesquisarProduto");

const formularioPesquisa = document.querySelector('#formulario__pesquisa');

//Formulario mostrar dados
const nomeproduto = document.querySelector("#nomeProduto");
const precoproduto = document.querySelector("#precoProduto");
const descricaoproduto = document.querySelector("#descricaoProduto");
const categoriaProduto = document.querySelector("#categoriaproduto");
const inputImagemDoProduto = document.querySelector("#imagemproduto");
const imgPrevisualizacao = document.querySelector("#imagempreviw");

function getOneProduct(id) {
  return fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((data) => data.json())
    .catch((error) => console.log(error));
}

inputImagemDoProduto.addEventListener('mouseout', function(){
  imgPrevisualizacao.setAttribute('src', inputImagemDoProduto.value)
});

botaoPesquisaProduto.addEventListener("click", function (e) {
  e.preventDefault();
  try {
    async function showProduct() {
      const produto = await getOneProduct(inputIDProduto.value);
      if (produto.title === undefined) {
        formularioPesquisa.style.display = 'none';
        alert('Produto Não Encontrado');
        nomeproduto.value = "";
        precoproduto.value = "";
        descricaoproduto.value = "";
        categoriaProduto.value = "1";
        inputImagemDoProduto.value = "";
        imgPrevisualizacao.setAttribute("src", '');
        return botaoPesquisaProduto.focus();
      }
      nomeproduto.value = produto.title;
      precoproduto.value = produto.price;
      descricaoproduto.value = produto.description;
      categoriaProduto.value = produto.category.id;
      inputImagemDoProduto.value = produto.images[0];
      imgPrevisualizacao.setAttribute("src", produto.images[0]);
      formularioPesquisa.style.display = 'flex';
    }

    showProduct();

  } catch (error) {
      alert('Produto Não Encontrado');
      console.log(error);
  }
});

const botaoEditarProduto = document.querySelector("#btnEditarProduto");

botaoEditarProduto.addEventListener("click", function (e) {
  e.preventDefault();
  try {
    if (
      nomeproduto.value === "" ||
      precoproduto.value === "" ||
      descricaoproduto.value === "" ||
      inputImagemDoProduto.value === ""
      ) {
      alert('Preencha todos os campos do formulário');
      return nomeproduto.focus();
    }

    function alterarProduto() {
      fetch(`https://api.escuelajs.co/api/v1/products/${inputIDProduto.value}`,{
        method: "PUT",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "title": nomeproduto.value,
          "price": precoproduto.value,
          "description": descricaoproduto.value,
          "category.id": categoriaProduto.value,
          "images": [inputImagemDoProduto.value]
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));
    }

    alterarProduto();
    alert('Produto editar com sucesso');
    nomeproduto.value = "";
    precoproduto.value = "";
    descricaoproduto.value = "";
    categoriaProduto.value = "1";
    inputImagemDoProduto.value = "";
    imgPrevisualizacao.setAttribute("src", '');
  } catch (error) {
    console.log(error);
  }
});

const botaoDeletarProduto = document.querySelector('#btnDeletarProduto');

botaoDeletarProduto.addEventListener('click', function(e){
  e.preventDefault();
  try {
    fetch(`https://api.escuelajs.co/api/v1/products/${inputIDProduto.value}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .catch(erro=>console.log(erro))
            alert('Produto deletado com sucesso');
            nomeproduto.value = "";
            precoproduto.value = "";
            descricaoproduto.value = "";
            categoriaProduto.value = "1";
            inputImagemDoProduto.value = "";
            imgPrevisualizacao.setAttribute("src", '');
            formularioPesquisa.style.display = 'flex';
  } catch (error) {
    console.log(error);
  }
})
