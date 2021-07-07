/*
SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

1- creare 2 array con rispettivamente nomi e cognomi
2- creare un array vuoto
3- generae a partire da questi un nome completo random
4- inserire il tutto in un ciclo in maniera da ripeterlo fino a quando le lunghezze degli array sono ==
5- stampare
*/


//creiamo gli array

var fakeList = [];
var nameList = ['Anna', 'Carla', 'Gioia', 'Luca', 'Armando', 'Giorgio'];
var surnameList = ['Pignatiello', 'De Simone', 'Carlini', 'Chiaravanzo', 'Maffia', 'Rimolo'];


// creiamo un ciclo
while (fakeList.length < 3) {
    var nameRandom = nameList[Math.floor(Math.random() * 6)] + ' ' + surnameList[Math.floor(Math.random() * 6)] + ' ';

    if (!fakeList.includes(nameRandom)) {
        fakeList.push(nameRandom);
    }
}

// stampiamo
console.log(fakeList);