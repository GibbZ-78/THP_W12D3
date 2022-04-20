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

// Résout l'exercice n°4 en o(n) en utilisant 1 boucle et 1 "find"
function allQuietOnTheWesternFront(myTab) {
  let myTest = true;
  let myTmpTest = true;
  let myTmpTab = [];
  console.log("  > Starting the 'allQuietOnTheWesternFront' function.");
  for (let i = 0; i < myTab.length; i++) {
    if (i == myTab.length - 1) {
      myTmpTest = true; // Cas du dernier immeuble à l'Ouest qui a forcément une vue dégagée !
      console.log("    > Last building on the Western side of the street hence offering a clear view in this direction ;-)");
    } else {
      myTmpTab = myTab.slice(i + 1);
      myTmpTest = myTmpTab.find(height => (height >= myTab[i])) == undefined;
      console.log(`    > Building #${i} of the street with ${myTab[i]} floors.`);
    }
    myTest = myTest || myTmpTest;
    if (myTmpTest) {
      myBuildingCounter++;
      console.log(`      > We have THE / one of the best place to move to in street [${myTab}]: the ${myTab[i]}-storey building #${i}offering a clear view to the West!`);
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
  console.log("\n*** Exercise 4/6 ***");
  console.log(`Raw data read from file '${fileName}': '${data}'`);
  let myTab = data.split(' ').map(elem => parseInt(elem, 10));
  console.log(`Integered and arrayed resulting data: [${myTab}].`);
  if (allQuietOnTheWesternFront(myTab)) {
    console.log(`Glad to inform you we found ${myBuildingCounter} buildings within the street [${myTab}] which offer(s) a clear view to the West!\n`);
  } else {
    console.log(`Am afraid... No building within the street [${myTab}] seems to offer a clear viw to the West: try investing in construction ;-)\n`);
  }
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/