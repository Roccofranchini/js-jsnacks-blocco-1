/*
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
*/

var display = document.getElementById("display");
var pesoInput = document.getElementById("peso-input");
var button = document.getElementById("button");

var palla = {
	name: "palla",
	peso: 10,
};

printObject(palla, display);

button.addEventListener("click", function () {
	var nuovoPeso = pesoInput.value;

	if (!nuovoPeso || isNaN(nuovoPeso) || nuovoPeso.trim() === "") {
		alert("peso scorretto");
		return;
	}

	palla.peso = parseInt(nuovoPeso);
	printObject(palla, display);
});

//FUNZIONE GETOBJ

function printObject(obj, targetElement) {
	var content = "";
	for (var key in obj) {
		content += "<li><strong>" + key + "</strong>: " + obj[key] + "</li>";
	}

	targetElement.innerHTML = content;
}
