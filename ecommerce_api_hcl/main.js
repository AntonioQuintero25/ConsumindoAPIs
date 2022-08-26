const root = document.querySelector('#vitrine');

function getProducts(){
    return fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
    .then(res=>res.json())
    .catch(error => console.log(error))
}

async function showProducts(){
    try {
        const roupas = await getProducts();
        console.log(roupas);
        roupas.map(roupa =>{
        
            const divProduto = document.createElement('div');
            divProduto.setAttribute('class', 'produto');

            const h2PrecoProduto = document.createElement('h2');
            h2PrecoProduto.setAttribute('class', 'produto__preco');
            h2PrecoProduto.textContent = `R$ ${roupa.price.toFixed(2)}`;

            const imagemProduto = document.createElement('img');
            imagemProduto.setAttribute('class', 'produto__imagem');
            imagemProduto.setAttribute('src', roupa.images[0]);
            imagemProduto.setAttribute('alt', roupa.title);

            const nomeProduto = document.createElement('p');
            nomeProduto.setAttribute('class', 'produto__nome');
            nomeProduto.textContent = roupa.title;

            const categoriaProduto = document.createElement('p');
            categoriaProduto.textContent = `Categoria: ${roupa.category.name}`;

            
            divProduto.appendChild(imagemProduto);
            divProduto.appendChild(nomeProduto);
            divProduto.appendChild(categoriaProduto);
            divProduto.appendChild(h2PrecoProduto);
            root.appendChild(divProduto);


        });
    } catch (error) {
        console.log(error);
    }

}

showProducts();


//Pesquisar de produtos

function pegarRoupa(id){
    return fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res=>res.json())
            .catch(erro=>console.log(erro))
}

const botaoPesquisar = document.querySelector('#pesquisar');
const rootPesquisa = document.querySelector('#rootpesquisa');
const inputPesquisa = document.querySelector('#titulo');

botaoPesquisar.addEventListener('click', function(e){
    e.preventDefault()
    try {
        async function pesquisarRoupa(){

            const produto = await pegarRoupa(inputPesquisa.value);
            console.log(produto);
        
            imagemProdutoPesquisa.setAttribute('src' , produto.images[0]);
            h2NomeProdutoPesquisa.textContent = produto.title;
            pCategoriaProdutoPesquisa.textContent = produto.category.name;
            pDescricaoProdutoPesquisa.textContent = produto.description;
            pPrecoProdutoPesquisa.textContent = `R$ ${produto.price.toFixed(2)}`;
        
            divProdutoPesquisa.append(imagemProdutoPesquisa);
            divProdutoPesquisa.append(h2NomeProdutoPesquisa);
            divProdutoPesquisa.append(pCategoriaProdutoPesquisa);
            divProdutoPesquisa.append(pDescricaoProdutoPesquisa);
            divProdutoPesquisa.append(pPrecoProdutoPesquisa);
        
            rootPesquisa.append(divProdutoPesquisa);
        
            
        }
        
        pesquisarRoupa();
        
    } catch (error) {
        console.log(error);
    }
});




const divProdutoPesquisa = document.createElement('div');
divProdutoPesquisa.setAttribute('class', 'produto__pesquisa');

const imagemProdutoPesquisa = document.createElement('img');
imagemProdutoPesquisa.setAttribute('class', 'imagem__pesquisa');

const h2NomeProdutoPesquisa = document.createElement('h2');
h2NomeProdutoPesquisa.setAttribute('class', 'produto__nome--pesquisa');

const pCategoriaProdutoPesquisa = document.createElement('p');
pCategoriaProdutoPesquisa.setAttribute('class', 'font__montserrat');

const pDescricaoProdutoPesquisa = document.createElement('p');
pDescricaoProdutoPesquisa.setAttribute('class', 'produto__descricao--pesquisa');

const pPrecoProdutoPesquisa = document.createElement('p');
pPrecoProdutoPesquisa.setAttribute('class', 'font__montserrat');


