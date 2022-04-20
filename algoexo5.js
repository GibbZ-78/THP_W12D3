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

// Return an array composed of the sum of myTmpItem with all element of myTmpTab1
function sumFirstWithOtherElems(myTmpItem, myTmpTab1) {
  console.log(`  > Entering 'sumFirstWithOtherElems' function with myTmpItem = '${myTmpItem}' and myTmpTab1 = [${myTmpTab1}].`);
  if (myTmpTab1.length == 0) {
    console.log("    > Empty array, let's return [].");
    console.log("  > Exiting 'sumFirstWithOtherElems' function.");
    return [];
  } else {
    let myTmpTab2 = myTmpTab1.slice();
    console.log("    > Initially, myTmpTab2 = [" + myTmpTab2 + "].");
    myTmpTab2.map(element => element + myTmpItem);
    console.log(`    > myTmpTab2 stores the result of the 'mapped sum' of myTmpTab1 = [${myTmpTab2}].`);
    console.log("  > Exiting 'sumFirstWithOtherElems' function.");
    return myTmpTab2;
  }
}

// Shortcut to fit a "map" function
function doWhatIWant(myTmpTabX, myElementX) {
  let myTmpElement = myTmpTabX[0];
  myTmpTabX.shift();
  console.log(`  > Launching 'sumFirstWithOtherElems' with ${myElementX} and myTmpTab = [${myTmpTabX}].`);
  return sumFirstWithOtherElems(myTmpElement, myTmpTabX);
}

// Résout l'exercice n°5 en o(n) en utilisant 1 seule boucle assortie d'un mode de parcours alternatif
function DuoWhoseSumIsK(myTmpTab, myTmpSum) {
  // Pour chaque element du tableau, on fabrique un tableau stockant sa somme avec chacun des éléments de la suite du tableau
  // Ex: [10, 15, 3, 7] => [[25, 13, 17], [18, 25], [10]]
  // Dans un second temps, on 'flatten' tous ces tableaux et on fait un "findIndex" de myTmpSum => true ou false
  let myTmpTest = false;
  let myTmpTab3 = myTmpTab.slice();
  console.log(`  > Initiammy, myTmpTab3 = [${myTmpTab3}].`);
  myTmpTab3.map(element => doWhatIWant(myTmpTab, element));
  console.log(`  > When exiting the 'map' function, we switch from myTmpTab = [${myTmpTab}] to myTmpTab3 = [${myTmpTab3}].`);
  myTmpTab3.flat();
  myTmpTest = (myTmpTab3.findIndex(myTmpSum) != -1);
  return myTmpTest;
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
    // if (DuoWhoseSumIsK(myTab, mySum)) {
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