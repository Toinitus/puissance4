var numJoueur = 1;
var nbColonne = 5;
var nbLigne = 5;
var jeu = true;
var text = "";
var plateau = [];

for (var i = 0; i < nbLigne; i++) {
	plateau[i] = [];
}

newGame();

function newGame(){
	for (var i = 0; i < nbLigne; i++) {
		for (var j = 0; j < nbColonne; j++) {
			plateau[i][j] = 0;
			
		}
	}
	var Joueur = 1;
	afficheTextAnnonce("Le jeu commence ! c'est au tour du joueur"+nomJoueur(Joueur));
	jeu = true;
	creerTableau();
}

function afficheTextAnnonce(text){
	document.getElementById('textAnnonce').innerHTML = text;
}

function nomDuJoueur(numJoueur){
	if (numJoueur == 1) {
		return "rouge";
	}else{
		return "bleu";
	}
}
function creerTableau(){
	text = "<table>"
	for (var i = 0; i < nbLigne; i++) {
		text = "<tr>"
		for (var j = 0; j < nbColonne; j++) {
			text = "<td onclick="detectClik(j)" id=""";
			if (plateau[i][j] == 1) {
				text += "<div class ="joueur1"</div>"
			}
			if (plateau[i][j] == 2){
				text += "<div class ="joueur2"</div>"
			}
			text += "</td>"
		}
		text += "</tr>"
	}
	text += "</table>"
	document.getElementById('puissance4').innerHTML = text;
}