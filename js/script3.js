/*
SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "name", "city" "points";
Stampiamo le squadre in pagina, all'interno di una tabella HTML 
*/

var teams = [
	{
		team: "SSC Napoli",
		city: "Napoli",
		points: 91,
	},
	{
		team: "FC Internazionale",
		city: "Milano",
		points: 68,
	},
	{
		team: "AC Milan",
		city: "Milano",
		points: 51,
	},
];

var tableBody = document.querySelector("#table tbody");

var tableContent = "";

for (var i = 0; i < teams.length; i++) {
	var currentTeam = teams[i];

	tableContent += "<tr>";
	tableContent += "<td>" + currentTeam.team + "</td>";
	tableContent += "<td>" + currentTeam.city + "</td>";
	tableContent += "<td>" + currentTeam.points + "</td>";

	tableContent += "</tr>";
}

tableBody.innerHTML = tableContent;
