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

// Résoud l'exercice n°2 en o(n²) en utilisatn 2 boucles imbriquées
function allQuietOnTheWesternFront (myTmpTab) {
  let myTest = true;
  for (let i = 0; i < myTmpTab.length; i++) {
    let myTmpTestI = true;
    for (let j = i+1; j < myTmpTab.length; j++) {
      mytmpTestJ = myTmpTab[i] > myTmpTab[j];
      myTmpTestI = myTmpTestI && mytmpTestJ;
      myTest = myTest && mytmpTestJ;
    }
    if (myTmpTestI) {
      console.log("  > We have THE (or one of the) best place to move to in the street " + myTmpTab + ": the building #" + i + " with " + myTmpTab + " stairs and a clear view to the West!");
    }
  }
  return myTest;
}

// Programme principal
// Launch via command line: "node algoexo*.js list*.txt" where "*" is an Integer relating to the exercise number

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
// suivie du programme principal contenant notamment l'appel de la fonction principale
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("\n*** Exercise #1 ***");
  console.log(`Raw data read from file '${fileName}': [${data}]`);
  myTab = data.split(' ').map(elem => parseInt(elem,10));
  console.log(`Integered and arrayed resulting data: [${myTab}].`);
  if (allQuietOnTheWesternFront(myTab)) {
    console.log(`Glad to inform you we found ${myBuildingCounter} buildings within the street [${myTab}] which offers a clear view to the West!`);
  } else {
    console.log(`Am afraid... No building within the street [${myTab}] seems to offer a clear viw to the West: try investing in construction ;-) .`);
  }
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/