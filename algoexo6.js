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
// argv[0] = node, argv[1] = nom du script JS, argv[2] = nom du fichier
const fileName = process.argv[2];
let myBuildingCounter = 0;

// Résout l'exercice n°6 en o(n) en utilisant 1 boucle et 1 "find"
function allQuietOnTheWesternFront(myTab) {
  // On parcourt le tableau d'Ouest en Est (length-1 à 0)
  // On stocke : (i)  le plus grand immeuble trouvé qu'on compare au suivant vers la gauche à chaque fois
  //             (ii) le nombre d'immeuble offrant ainsi une vue

  let highest = myTab[myTab.length - 1];
  myBuildingCounter = 1;
  for (let i = myTab.length - 1; i >= 1; i--) {
    if (myTab[i] < myTab[i - 1]) {
      if (myTab[i - 1] > highest) {
        myBuildingCounter++;
        highest = myTab[i - 1];
      }
    }
  }
  return true;
}

// Programme principal
// Launch via command line: "node algoexo*.js list*.txt" where "*" is an Integer relating to the exercise number

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
// suivie du programme principal contenant notamment l'appel de la fonction principale
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("\n*** Exercise 6/6 ***");
  console.log(`Raw data read from file '${fileName}': '${data}'`);
  let myTab = data.split(' ').map(elem => parseInt(elem, 10));
  console.log(`Integered and arrayed resulting data: [${myTab}].`);
  if (allQuietOnTheWesternFront(myTab)) {
    console.log(`Glad to inform you we found ${myBuildingCounter} buildings within the street [${myTab}] which offer(s) a clear view to the West!\n`);
  } else {
    console.log(`Am afraid... No building within the street [${myTab}] seems to offer a clear viw to the West: try investing in construction ;-)\n`);
  }
  console.log("*** Exercise 6/6 - THE END... ***");
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/