"use strict"

var data = [
  {
    id: 243,
    name: "user 2",
    score: [42, 100, 54, 65, 32]
  },

  {
    id: 123,
    name: "user 1",
    score: [76, 64, 10, 67, 64]
  },

  {
    id: 768,
    name: "user 3",
    score: [93, 2, 56, 78, 100]
  },
];

//A partir de ces données
// - afficher une table html contenant le nom des utilisateurs et leurs scores
// - afficher un tableau html contenant le nom des utilisateurs et leur score moyen
// - afficher un tableau html contenant les 5 meilleurs scores et le nom de l'utiisateur, triés par ordre décroissant, puis

//indices :
// pour lire le nom : user.name
// vous pouvez parcourir le tableau de données avec une boucle for
// pour lire le tableau de scores : user.scores


var html = "";

html = html + "<table class='table'>";

for (var i = 0; i < data.length; i++) {
html = html + "<tr><td>" + data[i].name + "</td><td>" + data[i].score + "<td></tr>";
}

html = html + "</table>";

document.querySelector("#table").innerHTML = html;
