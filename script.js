const pokemon = results.map((result) => ({
    name: result.name,
    image : result.sprites ["front_default"],
    type : result.types.map ((type) => type.type.name).join(","),
    id : result.id
}));

const urls = ["https://pokeapi.co/api/v2/pokemon/1", "https://pokeapi.co/api/v2/pokemon/2", "https://pokeapi.co/api/v2/pokemon/3"];

Promise.all(urls.map(url =>
  fetch(url)
    .then(response => response.json())
))
.then(data => {
  data.forEach(pokemonData => {
    console.log("Name: " + pokemonData.name);
    console.log("Image: " + pokemonData.sprites.front_default);
    console.log("Type: " + pokemonData.types[0].type.name);
    console.log("ID: " + pokemonData.id);
    console.log("===================");
  });
})
.catch(error => console.log(error));

// display data code below 

const pokemonContainer = document.querySelector('.pokemon-container');

data.forEach(pokemonData => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemonData.name;

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemonData.sprites.front_default;

    const pokemonType = document.createElement('p');
    pokemonType.textContent = pokemonData.types[0].type.name;

    const pokemonId = document.createElement('p');
    pokemonId.textContent = pokemonData.id;

    const pokemonInfo = document.createElement('div');
    pokemonInfo.classList.add('info');
    pokemonInfo.append(pokemonName, pokemonType, pokemonId);

    pokemonCard.append(pokemonImage, pokemonInfo);
    pokemonContainer.append(pokemonCard);
});


