const hobbies = ['jogar bola', 'escutar musica', 'dormir']
console.log(hobbies);


// Mostrar o primeiro hobby
console.log(hobbies[0]);

//Mostrar o segundo hobby
console.log(hobbies[1]);
//Mostrar o terceiro hobby
console.log(hobbies[2]);

//atividade 4
//Atualizar o primeiro hobby
hobbies[0] = 'ler livros'

console.log(hobbies);

//atividade 5

// Contar e mostrar a quantidade de hobbies
console.log(hobbies.length);

hobbies.push('beber');
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

hobbies.splice(1, 1);
console.log(hobbies);

const hobbiesDoAmigo = ['cantar','dançar', 'tocar violão'];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);
console.log(todosOsHobbies);

const hobbiesMusicais = ['cantar','dançar', 'tocar violão'];
const hobbiesEsportivos = ['jogar bola', 'escutar musica', 'dormir'];

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos];
console.log(categoriasDeHobbies[0]);

console.log(categoriasDeHobbies[0][0]);
categoriasDeHobbies[0][0];
categoriasDeHobbies[1][2];
console.log(categoriasDeHobbies[1][2]);






