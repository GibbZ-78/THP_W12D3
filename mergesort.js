// Bibliothèque de gestion du système de fichiers
const fs = require('fs');

// Récupération du nom du fichier, passé en paramètre
// argv[0] = node, argv[1] = nom du script JS, argv[2] = nom du fichier
const fileName = process.argv[2];

// Variables globales permettant de repartir du tableau initial à chaque fois
let myMergeTab = [];

function mergeSort(myArray) {
  //
  // TO BE COMPLETED
  //
}

// Programme principal
// Launch via command line: "node mergesort.js numbers.txt"

// Méthode de lecture SYNCHRONE du fichier passé en paramètre (i.e. bloquante mais, surtout, séquentielle)
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log("Raw data read from command line: "+data);
  myMergeTab = data.split(' ').map(elem => parseInt(elem,10));
  console.log("Integered and arrayed data for MERGE sort: "+myBubbleTab);
 } catch (error) {
  console.error(error.message);
 }

// Launching the MERGE sort
mergeSort(myMergeTab);