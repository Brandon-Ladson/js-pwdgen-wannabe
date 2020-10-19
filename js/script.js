// chedere all'utente il suo nome
var nome = prompt('scrivi il tuo nome');

console.log(nome);

// chiedere all'utente il suo cognome
var cognome = prompt('scrivi il tuo cognome');

console.log(cognome);

// chiedere all'utente il suo colore preferito
var colore = prompt('scrivi il tuo colore preferito');

console.log(colore);

// dire all'utente la sua password
var passwordCreata = nome + cognome + colore;

console.log(passwordCreata);

document.getElementById('password').innerHTML = passwordCreata;
