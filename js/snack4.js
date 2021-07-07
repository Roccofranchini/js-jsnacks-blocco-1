/*
SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro

1- creiamo i due array con n elementi
2- attraverso un ciclo while generiamo un numero casuale fino a quando le "lunghezze" degli array non si equivalgono
3- tramite un if pushiamo il numero generato ad ogni giro alla lista più corta
4- stampiamo

*/

// creiamo gli array

var nList1 = ['1', '2', '3', '4', '8', '10'];
var nList2 = ['1', '2', '3'];
var display4 = document.getElementById('display4');
var display5 = document.getElementById('display5');

// pushiamo attraverso il while i numeri nella lista più corta

while (nList1.length !== nList2.length) {

    var nRandom = Math.floor(Math.random() * 100);

    console.log(nRandom);

    if (nList1.length > nList2.length) {
        nList2.push(nRandom);
    }

    else {
        nList1.push(nRandom);
    }

}

// stampiamo

display4.innerHTML = nList1;
display5.innerHTML = nList2;


var listElement = '';

for (var i = 0; i < nList1.length; i++) {

    console.log(listElement);

    listElement += '<li>' + nList1[i] + '</li>';
}


display4.innerHTML = listElement;


var listElement2 = '';

for (var i = 0; i < nList2.length; i++) {

    console.log(listElement2);

    listElement2 += '<li>' + nList2[i] + '</li>';
}


display5.innerHTML = listElement2;