// criando array 

// const pokemon = ["charmander", "squirtle", "bulbassauro"];
// const numeros = [1,2,3, -8, 11, 62];
// const arrayMisto = [8, "pegue", true];
// const umItem = [10]; 
// const vazio = [];

// parte 2 observação
// console.log(pokemon.length);//3
// console.log(pokemon[3]);//undefined
// console.log(arrayMisto.includes(8));
// console.log(arrayMisto.includes("Pegue"));
// console.log(arrayMisto.includes(true));
// console.log(umItem);
// console.log(umItem.length);

// parte 3 manipulação

// const copiaPokemon = pokemon 
// console.log(copiaPokemon, pokemon);
// copiaPokemon.push("Pikachu")
// console.log(copiaPokemon, pokemon);

// const copiaPokemon = pokemon.slice() 
// console.log(copiaPokemon, pokemon);
// copiaPokemon.push("Pikachu")
// console.log(copiaPokemon, pokemon);
// copiaPokemon.splice(2,2); //(indice,quantidade)
// console.log(copiaPokemon, pokemon);
// console.log(pokemon);
// console.log(pokemon.sort());
// console.log(numeros);
// console.log(numeros.sort());
// console.log(arrayMisto.sort());

//exercicio de fixação

let numero = [2,5,7,1,9,8]
console.log(numero);
console.log(numero.sort());
console.log(numero.reverse());
numero.pop();
numero.push(6);
numero.splice(2,1);
console.log(numero);