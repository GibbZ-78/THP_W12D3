/****************************
 *                          *
 *  Coded with ♥ by JBV     *
 *         for the          *
 *    THP W22 Developer     *
 *       curriculum         *
 *                          *
 ****************************/

// Bibliothèque de gestion du système de fichiers
const fs = require('fs');

// Récupération du nom du fichier, passé en paramètre
// argv[0] = node, argv[1] = nom du script JS, argv[2] = nom du fichier, argv[3] = k
const fileName = process.argv[2];
const mySum = process.argv[3];

// Résout l'exercice n°3 en o(n) en utilisant 1 seule boucle assortie d'un mode de parcours alternatif
function DuoWhoseSumIsK(myTmpTab, myTmpSum) {

  //myTmpTab.map(element => element + );
  // Pour chaque element dtu tableau, on fabrique un tableau stockant sa somme avec chacun des éléments de la suite du tableau
  // Ex: [10, 15, 3, 7] => [25, 13, 17], [18, 25], [10]
  // Dans un second temps, on join + flattent ces 3 tableaux et on fait un "find" de myTmpSum => true ou false

}

// Programme principal
// Launch via command line: "node algoexo*.js list*.txt" where "*" is an Integer relating to the exercise number

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("\n*** Exercise 5/6 ***");
  if (mySum == undefined) {
    console.log(`Raw data read from file '${fileName}' (${data}) are OK...`);
    console.log("... But no correct value was found for 'k' (possible sum value of 2 integers of the provided table).\n");
  } else {
    console.log(`Raw data read from file '${fileName}' (${data}) and command line k=${mySum}`);
    myTab = data.split(' ').map(elem => parseInt(elem, 10));
    console.log(`Integered and arrayed resulting data: [${myTab}].`);
    if (DuoWhoseSumIsK(myTab, mySum)) {
      console.log(`Glad to inform you we found a couple of numbers within [${myTab}] whose sum is effectively ${mySum} !`);
    } else {
      console.log(`Am afraid... No couple of numbers, taken from [${myTab}], seems to have ${mySum} as their sum. Try with another array or 'k' value.`);
    }
  }
  console.log("*** Exercise 5/6 - THE END... ***");
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/