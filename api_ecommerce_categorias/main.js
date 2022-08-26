const botaoEletronico = document.querySelector('#btneletronico');
const botaoJoias = document.querySelector('#btnjoias');
const botaoRoupaMasculina = document.querySelector('#btnroupamasculina');
const botaoRoupaFeminina = document.querySelector('#btnroupafeminina');

botaoEletronico.addEventListener('click', function(e){
    e.preventDefault();
    divEletronicos.style.display = 'flex';
    divJoais.style.display = 'none';
    divRoupaMasculina.style.display = 'none';
    divRoupaFeminina.style.display = 'none';
});

botaoJoias.addEventListener('click', function(e){
    e.preventDefault();
    divEletronicos.style.display = 'none';
    divJoais.style.display = 'flex';
    divRoupaMasculina.style.display = 'none';
    divRoupaFeminina.style.display = 'none';
});

botaoRoupaMasculina.addEventListener('click', function(e){
    e.preventDefault();
    divEletronicos.style.display = 'none';
    divJoais.style.display = 'none';
    divRoupaMasculina.style.display = 'flex';
    divRoupaFeminina.style.display = 'none';
});

botaoRoupaFeminina.addEventListener('click', function(e){
    e.preventDefault();
    divEletronicos.style.display = 'none';
    divJoais.style.display = 'none';
    divRoupaMasculina.style.display = 'none';
    divRoupaFeminina.style.display = 'flex';
});

function getprodutct(tipo){
    return fetch(`https://api.escuelajs.co/api/v1/categories/${tipo}/products?offset=0&limit=6`)
        .then(res=>res.json())
        .catch(error=>console.log(error))
}

const divEletronicos = document.querySelector('#eletronicos');

async function showProductsEletric(){
    const produto = await getprodutct("2");
    produto.map(item =>{
        const divProdutoUnidade = document.createElement('div');
        divProdutoUnidade.setAttribute('class', 'produto__categoria');

        const imgProdutoUnidade = document.createElement('img');
        imgProdutoUnidade.setAttribute('class', 'imagem__categoria');
        imgProdutoUnidade.setAttribute('src', item.images[0]);

        const h2NomeProdutoUnidade = document.createElement('h2');
        h2NomeProdutoUnidade.setAttribute('class', 'produto__nome--categoria');
        h2NomeProdutoUnidade.textContent = item.title;

        const pPrecoProdutoUnidade = document.createElement('p');
        pPrecoProdutoUnidade.setAttribute('class', 'produto__preco--categoria');
        pPrecoProdutoUnidade.textContent = `R$ ${item.price.toFixed(2)}`;

        divProdutoUnidade.appendChild(imgProdutoUnidade);
        divProdutoUnidade.appendChild(h2NomeProdutoUnidade);
        divProdutoUnidade.appendChild(pPrecoProdutoUnidade);

        divEletronicos.appendChild(divProdutoUnidade);

        
    });
}

showProductsEletric();


const divJoais = document.querySelector('#joias');

async function showProductsJoias(){
    const produto = await getprodutct("1");
    produto.map(item =>{
        const divProdutoUnidade = document.createElement('div');
        divProdutoUnidade.setAttribute('class', 'produto__categoria');

        const imgProdutoUnidade = document.createElement('img');
        imgProdutoUnidade.setAttribute('class', 'imagem__categoria');
        imgProdutoUnidade.setAttribute('src', item.images[0]);

        const h2NomeProdutoUnidade = document.createElement('h2');
        h2NomeProdutoUnidade.setAttribute('class', 'produto__nome--categoria');
        h2NomeProdutoUnidade.textContent = item.title;

        const pPrecoProdutoUnidade = document.createElement('p');
        pPrecoProdutoUnidade.setAttribute('class', 'produto__preco--categoria');
        pPrecoProdutoUnidade.textContent = `R$ ${item.price.toFixed(2)}`;

        divProdutoUnidade.appendChild(imgProdutoUnidade);
        divProdutoUnidade.appendChild(h2NomeProdutoUnidade);
        divProdutoUnidade.appendChild(pPrecoProdutoUnidade);

        divJoais.appendChild(divProdutoUnidade);

        
    });
}

showProductsJoias();

const divRoupaMasculina = document.querySelector('#roupasMasculinas');

async function showProductsRoupaMasculina(){
    const produto = await getprodutct("3");
    produto.map(item =>{
        const divProdutoUnidade = document.createElement('div');
        divProdutoUnidade.setAttribute('class', 'produto__categoria');

        const imgProdutoUnidade = document.createElement('img');
        imgProdutoUnidade.setAttribute('class', 'imagem__categoria');
        imgProdutoUnidade.setAttribute('src', item.images[0]);

        const h2NomeProdutoUnidade = document.createElement('h2');
        h2NomeProdutoUnidade.setAttribute('class', 'produto__nome--categoria');
        h2NomeProdutoUnidade.textContent = item.title;

        const pPrecoProdutoUnidade = document.createElement('p');
        pPrecoProdutoUnidade.setAttribute('class', 'produto__preco--categoria');
        pPrecoProdutoUnidade.textContent = `R$ ${item.price.toFixed(2)}`;

        divProdutoUnidade.appendChild(imgProdutoUnidade);
        divProdutoUnidade.appendChild(h2NomeProdutoUnidade);
        divProdutoUnidade.appendChild(pPrecoProdutoUnidade);

        divRoupaMasculina.appendChild(divProdutoUnidade);

        
    });
}

showProductsRoupaMasculina();

const divRoupaFeminina = document.querySelector('#roupasFemininas');

async function showProductsRoupaFeminina(){
    const produto = await getprodutct("4");
    produto.map(item =>{
        const divProdutoUnidade = document.createElement('div');
        divProdutoUnidade.setAttribute('class', 'produto__categoria');

        const imgProdutoUnidade = document.createElement('img');
        imgProdutoUnidade.setAttribute('class', 'imagem__categoria');
        imgProdutoUnidade.setAttribute('src', item.images[0]);

        const h2NomeProdutoUnidade = document.createElement('h2');
        h2NomeProdutoUnidade.setAttribute('class', 'produto__nome--categoria');
        h2NomeProdutoUnidade.textContent = item.title;

        const pPrecoProdutoUnidade = document.createElement('p');
        pPrecoProdutoUnidade.setAttribute('class', 'produto__preco--categoria');
        pPrecoProdutoUnidade.textContent = `R$ ${item.price.toFixed(2)}`;

        divProdutoUnidade.appendChild(imgProdutoUnidade);
        divProdutoUnidade.appendChild(h2NomeProdutoUnidade);
        divProdutoUnidade.appendChild(pPrecoProdutoUnidade);

        divRoupaFeminina.appendChild(divProdutoUnidade);

        
    });
}

showProductsRoupaFeminina();