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


// Programme principal
// Launch via command line: "node algoexo1.js sujet1.txt"

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("\n*** Exercise 1 ***");
  console.log(`  > Raw data read from command line: ${data}`);
  myExoTab = data.split(' ').map(elem => parseInt(elem,10));
  let k = myExoTab.pop();
  console.log(`  > Integered and arrayed data for this exercise: ${myExoTab}`);
  console.log(`  > Found 'k' value: ${k}`);
} catch (error) {
  console.error(error.message);
}

/*****************************************
 *  Neither code nor ♥ beyond this line  *
 *****************************************/