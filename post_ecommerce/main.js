const botaoCadastrarProduto = document.querySelector("#btncadastrarproduto");
const inputNomeProduto = document.querySelector("#nomeproduto");
const inputPrecoProduto = document.querySelector("#precoproduto");
const textareaDescricaoProduto = document.querySelector("#descricaoproduto");
const selectCategoriaProduto = document.querySelector("#categoriaproduto");
const inputImagemProduto = document.querySelector("#imagemproduto");

const imgPrevisualizacao = document.querySelector('#imagempreviw');

inputImagemProduto.addEventListener('mouseout', function(){
    imgPrevisualizacao.setAttribute('src', inputImagemProduto.value)
});

botaoCadastrarProduto.addEventListener("click", function (e) {
  e.preventDefault();

  if (
  inputNomeProduto.value === "" || 
  inputPrecoProduto.value === "" || 
  textareaDescricaoProduto.value === "" ||
  inputImagemProduto.value === "") {
    inputNomeProduto.focus();
    return alert('Preencha todos os campos');
  }

  function enviarProduto() {
    try {
      fetch("https://api.escuelajs.co/api/v1/products/", {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: inputNomeProduto.value,
          price: inputPrecoProduto.value,
          description: textareaDescricaoProduto.value,
          categoryId: selectCategoriaProduto.value,
          images: [inputImagemProduto.value]
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));
    alert('Produto Inserido com Sucesso');
    } catch (error) {
      console.log(error);
    }
  }

  enviarProduto();

  inputNomeProduto.value = "";
  inputPrecoProduto.value = ""
  textareaDescricaoProduto.value = ""
  selectCategoriaProduto.value = "1"
  inputImagemProduto.value = "";
  imgPrevisualizacao.setAttribute('src', '');
});
