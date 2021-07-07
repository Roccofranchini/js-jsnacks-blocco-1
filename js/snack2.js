/*
SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.

1- creiamo una variabile il cui valore è chiesto all'utente con un prompt
2- se è pari, stampiamo la variabile, se è dispari stampiamo la variabile +1
*/

//interazione con l'utente

var userNumber = parseInt(prompt('inserisci un numero'));

// stampa con if

if (userNumber % 2 === 0) {
    console.log(userNumber);
}
else {
    console.log(userNumber + 1)
}