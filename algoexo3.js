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
  let myTab1 = [];
  let myTab2 = [];
  let myTest = false;
  let myTmpTest = false;
  if (myTmpTab.length < 2) {
    console.log("  > Looks like the array your provided in the file contains less than the needed minimum of 2 elements...");
  } else {
    for (let i = 1; i < myTmpTab.length; i++) {
      console.log(`  > Loop #${i} with myTab1 = ${myTab1}`);
      myTab1 = myTmpTab.slice(i);
      console.log(`    > Once sliced, myTab1 = ${myTab1}`);
      myTab2 = myTab1.map(item => item + myTmpTab[i - 1]);
      console.log(`    > Once mapped, myTab2 = ${myTab2}`);
      myTmpTest = (myTab2.find(element => (element == myTmpSum)) != undefined);
      console.log("    > myTmpTest = " + myTmpTest + " for number " + myTmpTab[i - 1] + " and the remaining numbers of the array [" + myTab1 + "]. BTW, results of related sums are [" + myTab2 + "].");
      myTest = myTest || myTmpTest;
      console.log(`    > And more generally myTest = ${myTest}`);
    }
  }
  return myTest;
}

// Programme principal
// Launch via command line: "node algoexo*.js list*.txt" where "*" is an Integer relating to the exercise number

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("\n*** Exercise 3/6 ***");
  if (mySum == undefined) {
    console.log(`Raw data read from file '${fileName}' (${data}) are OK...`);
    console.log("... But no correct value was found for 'k' (possible sum value of 2 integers of the provided table).\n");
  } else {
    console.log(`Raw data read from file '${fileName}' (${data}) and command line k=${mySum}`);
    myTab = data.split(' ').map(elem => parseInt(elem, 10));
    console.log(`Integered and arrayed resulting data: [${myTab}].`);
    if (DuoWhoseSumIsK(myTab, mySum)) {
      console.log(`Glad to inform you we found a couple numbers within [${myTab}] whose sum is effectively ${mySum} !`);
    } else {
      console.log(`Am afraid... No couple of numbers, taken from [${myTab}], seems to have ${mySum} as their sum. Try with another array or 'k' value.`);
    }
  }
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/