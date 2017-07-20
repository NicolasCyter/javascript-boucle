var hasCreditCard = false;
var accountBalance = 99;
var itemCost = 143;

if ( hasCreditCard == false && accountBalance == 0) {
  console.log("Vous n'avez pas de moyen de paiement");
} else if (hasCreditCard == false && accountBalance >= 100) {
  console.log("votre compte perso a été debité de" + (itemCost) + " le nouveau solde est " + (accountBalance -= itemCost)+ "€");
} else if (hasCreditCard == false && itemCost > accountBalance) {
  console.log("Votre compte n'est pas assez approvisionné il vous manque " + (itemCost - accountBalance) + "€");
} else {
  console.log("Vous allez être rédirigé sur la page de paiement de votre banque");
}

// les messages :
// - "Vous n'avez pas de moyen de paiement" si il n'y a pas de carte et que le compte est à zero
// -"votre compte perso a été debité de X, le nouveau solde est Y" si le compte perso est suffisement approvisionné
// - "Votre compte perso n'est pas assez approvisionné il vous manque X" si le compte n'est pas assez approvisionné et qu'il n'y a pas de carte
// - "vous allez être redirigé sur la page de paiments de votre banque" si le compte perso n'est pas assez approvisionné mais qu'il a une carte



//sur un site de e commerce, un utilisateur doit fournir au moins un email ou un numero de tel pour confirmer sa commande
//vérifier si l'utilsateur peut confirmer sa commande
//sinon dite lui qu'il doit fournir au moins une des deux informations

var authenticatedWithEmail = false;
var authenticatedWithPhone = true;

if (authenticatedWithEmail == true|| authenticatedWithPhone == true){
  console.log("vous êtes authentifié");
} else {
  console.log("vous n'êtes pas authentifié");
}

var hasEmail = true;
var hasPhone = false;

if (hasEmail || hasPhone) {
  console.log("Vous pouvez faire votre commande");
} else {
  console.log("Vous devez fournir un des deux champs");
}
