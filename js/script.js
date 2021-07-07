/*
SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

1- creo una variabile d'appoggio che utilizzerò all'interno dei cicli for e while
2- all'interno del ciclo chiediamo 5 volte un numero all'utente e 'immagazziniamo' i valori ad ogni ciclo del for con la nostra variabile d'appoggio
3- stampiano la somma dei 5 numeri
*/

// variabile d'appoggio

var sum = 0;

//ciclo for

/*
for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt('inserisci un numero'));
    sum += userNumber;
}
*/

//ciclo while

var i = 0;
while (i < 5) {
    var userNumber = parseInt(prompt('inserisci un numero'));
    sum += userNumber;

    i++;
}

//stampa

console.log(sum);


/*
SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.

1- creiamo una variabile il cui valore è chiesto all'utente con un prompt
2- se è pari
*/