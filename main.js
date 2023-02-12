const pokemonContainer = document.querySelector('.pokemon-container')
const spinner = document.querySelector('#spinner')

const typeColors ={
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

let offset = 1;
let limit = 8;


function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then((data) =>{
        createPokemon(data);
        spinner.style.display = "none";
    }
    )};

function fetchPokemons(number) {
    spinner.style.display = "block";
 for (let index = 1; index < number; index++) {
    fetchPokemon(index)
    }
}


function createPokemon(pokemon){ //DOM 
    const card = document.createElement("div");
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div'); // creates a div for every sprite container will contain image
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default // it has this property in the sprite

    spriteContainer.appendChild(sprite);  

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`; //

    const name = document.createElement('p');
    name.classList.add ('name');
    textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
    //appenchild adds DOM to html 

}

fetchPokemons(152);