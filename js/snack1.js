/*
SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

1- creo una variabile d'appoggio che utilizzerò all'interno dei cicli for e while
2- all'interno del ciclo chiediamo 5 volte un numero all'utente e 'immagazziniamo' i valori ad ogni ciclo del for con la nostra variabile d'appoggio
3- stampiano la somma dei 5 numeri
*/

var display = document.getElementById('display');

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
    var userNumber = parseInt(prompt('ES 1: inserisci un numero'));
    sum += userNumber;

    i++;
}

//stampa

display.innerHTML = sum;
