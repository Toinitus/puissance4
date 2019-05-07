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
	numJoueur = 1;
	afficheTextAnnonce("Le jeu commence ! c'est au tour du joueur"+nomJoueur(numJoueur));
	jeu = true;
}