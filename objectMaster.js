const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//returns an array of pokemon where the id is evenly divisible by 3
const pkmnIds = pokemon.filter( p => p.id % 3 === 0).map( p => p.id );

//returns an array of pokemon objects that are fire type 
const pkmnFire = pokemon.filter(p => p.types.includes("fire"));

// returns an array of pokemon that have mutiple "types"
const pkmnDiverse = pokemon.filter( p => p.types.length > 1);

//returns an array of pokemon with just the pkmnNames
const pkmnNames = pokemon.map(p => p.name );

//returns an array of pokemon with id > 99
const pkmnGreaterId = pokemon.filter( p => p.id > 99).map( p => p.name);

//returns an array of pokemon whose only type is poison
const pkmnPoison = pokemon.filter( p => p.types.includes("poison")).filter( p => p.types.length <= 1);

//returns an array of pokemon continaing the first type of all pokemon whose second type is flying
const pkmnFly = pokemon.filter( p => p.types.includes("flying")).map( p => p.types[0]);

//returns an array of pokemon with a count of the number of  pokemon that are normal type
const pkmnCount = pokemon.filter( p => p.types.includes("normal"));

//console.log(pkmnIds);
//console.log(pkmnFire);
//console.log(pkmnDiverse);
//console.log(pkmnNames);
//console.log(pkmnGreaterId);
//console.log(pkmnPoison);
//console.log(pkmnFly);
//console.log(pkmnCount.length);
