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

// Résout l'exercice n°1 en o(n²) en utilisatn 2 boucles imbriquées
function DuoWhoseSumIsK(myTmpTab, myTmpSum) {
  let mySumTest = false;
  let mySumTestTmp = false;
  if (myTmpTab.length >= 2) {
    for (let i = 0; i < myTmpTab.length; i++) {
      for (let j = i + 1; j < myTmpTab.length; j++) {
        mySumTestTmp = myTmpTab[i] + myTmpTab[j] == myTmpSum;
        mySumTest = mySumTest || mySumTestTmp;
        if (mySumTestTmp) {
          console.log("  > We have THE (or one of the) winning couple of numbers: " + myTmpTab[i] + " and " + myTmpTab[j] + " !");
        }
      }
    }
  } else {
    console.log("  > Looks like the array your provided in the file contains less than the needed minimum of 2 elements...");
  }
  return mySumTest;
}

// Programme principal
// Launch via command line: "node algoexo*.js list*.txt" where "*" is an Integer relating to the exercise number

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("\n*** Exercise 1/6 ***");
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
  console.log("*** Exercise 1/6 - THE END... ***");
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/