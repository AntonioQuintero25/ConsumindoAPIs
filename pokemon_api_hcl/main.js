const inputNomePokemon = document.querySelector('#namePokemon');
const botaoPokemon = document.querySelector('#pesquisaPokemon');
const divDadosDoPokemon = document.querySelector('#dadosPokemon');

function getPokemon(nomePokemon){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}/`)
    .then(data => data.json())
    .catch(error => console.log(error))
}

botaoPokemon.addEventListener('click' , function(e){
    e.preventDefault();
    try {

        async function showPokemon(){
            const pokemon = await getPokemon(inputNomePokemon.value.toLowerCase());
            if (pokemon === undefined) {
                 return alert(`Nome do pokemon ${inputNomePokemon.value} incorreto`);
            }
            console.log(pokemon);
            const namePokemon = document.querySelector('#nomePokemonApi');
            namePokemon.textContent = `Nome do Pokemon: ${pokemon.name}`;
            const imagemDoPokemon = document.querySelector('#imagemDoPokemon');
            imagemDoPokemon.setAttribute('src', pokemon.sprites.other.home.front_default);
            const tipoDoPokemon = document.querySelector('#pTipoDoPokemon');
            let arrTipoDoPokemon = [];
            pokemon.types.map(tipo => {
                arrTipoDoPokemon.push(" "+tipo.type.name);
                tipoDoPokemon.textContent = `Tipos do Pokemon: ${arrTipoDoPokemon}.`;
            });

            const hP = document.querySelector('#hp');
            hP.textContent = `${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}`;

            const aTtack = document.querySelector('#attack');
            aTtack.textContent = `${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}`;

            const defense = document.querySelector('#defense');
            defense.textContent = `${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}`;

            const specialattack = document.querySelector('#special-attack');
            specialattack.textContent = `${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}`;

            const specialdefense = document.querySelector('#special-defense');
            specialdefense.textContent = `${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}`;

            const speed = document.querySelector('#speed');
            speed.textContent = `${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}`;

            const imageFrente = document.querySelector('#imagemPokemonFrente');
            imageFrente.setAttribute('src', pokemon.sprites.front_default);

            const imageVerso = document.querySelector('#imagemPokemonVerso');
            imageVerso.setAttribute('src', pokemon.sprites.back_default);

            inputNomePokemon.value = "";
            divDadosDoPokemon.style.display = 'flex';
        }

        showPokemon();

    } catch (error) {
        alert('Preencha um nome de pokemon valido');
    }
});