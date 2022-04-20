/****************************
 *                          *
 *  Coded with love by JBV  *
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

// Compteur de tour déclaré en variable globale par facilité
let myCounter = 0;

// Fonction de fusion des tableaux résultants
function myFusion(myTab1, myTab2) {
  console.log("  > Entrée dans 'myFusion'");
  let myTmpItem = [];
  let myTmpTab = [];
  if (myTab1.length == 0) {
    myCounter++;
    console.log("    > myTab1 est vide.");
    return myTab2;
  }
  
  if (myTab2.length == 0) {
    myCounter++;
    console.log("    > myTab2 est vide.");
    return myTab1;
  }
  
  if (myTab1[0] <= myTab2[0]) {
    myCounter++;
    console.log("    > 1er élément de myTab1 INFERIEUR OU EGAL au 1er élément de myTab2.");
    myTmpItem = myTab1[0];
    myTab1.shift();
    console.log("        > myTab1 se voit retirer ["+myTmpItem+"] pour devenir ["+myTab1+"].");
    myTmpTab = myFusion(myTab1,myTab2);
    console.log("        > Au retour de 'myFusion', myTmpTab vaut ["+myTmpTab+"].");
    myTmpTab.unshift(myTmpItem);
    console.log("        > Auquel on rajoute ["+myTmpItem+"] pour renvoyer ["+myTmpTab+"].");
    return myTmpTab;
  } else {
    myCounter++;
    console.log("    > 1er élément de myTab1 SUPERIEUR OU EGAL au 1er élément de myTab2.");
    myTmpItem = myTab2[0];
    myTab2.shift();
    console.log("        > myTab2 se voit retirer son 1er élément ["+myTmpItem+"] pour devenir ["+myTab2+"].");
    myTmpTab = myFusion(myTab1,myTab2);
    console.log("        > Au retour de 'myFusion', myTmpTab vaut ["+myTmpTab+"].");
    myTmpTab.unshift(myTmpItem);
    console.log("        > Auquel on rajoute ["+myTmpItem+"] pour renvoyer ["+myTmpTab+"].");
    return myTmpTab;
  }
  console.log("  > Sortie de 'myFusion'... Sans rien faire (Anormal !).");
}

// Fonction de division et tri d'un tableau passé en paramètre
function myTriDivision(myArray) {
  console.log("  > Entrée dans 'myTriDivision'");
  if (myArray.length <= 1) {
    console.log("    > Tableau vide ou avec 1 seul élément.");
    return myArray;
  }

  console.log("    > 1ère moitié du tableau : " + myArray.slice(0, myArray.length/2));
  console.log("    > 2nde moitié du tableau : " + myArray.slice(myArray.length/2));
  return myFusion(myTriDivision(myArray.slice(0, myArray.length/2)), myTriDivision(myArray.slice(myArray.length/2)));
}

// Programme principal
// Launch via command line: "node mergesort.js mergesort*.txt" where "*" is an Integer, between 1 and 3

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("\n*** El famoso 'Merge Sort' algoritmo. Ole ! ***");
  console.log(`  > Raw data read from command line: '${data}'`);
  let myInitTab = data.split(' ').map(elem => parseInt(elem,10));
  console.log(`  > Integered and arrayed data for this exercise: [${myInitTab}]`);
  let myFinalTab = myTriDivision(myInitTab);
  console.log(`  > Sorted table: [${myFinalTab}] built in ${myCounter} turns via el famoso 'Merge Sort' algoritmo. Ole !`);
  console.log("*** The End... El fin... ***\n");
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/