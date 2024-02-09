/* Les opérations arithmétiques.
+ signifie additon
- signifie soustraction
* signifie multiplication
/ signifie division
% signifie modulo
*/

let resultat = 14 * 5

console.log(resultat)

/* Faire les calculs suivants en JavaScript et afficher le résultat de chaque opération dans la console.
5*5+2
60/4-6
5555*7777
(938594 - 94859304)*948 
Assigner le résultat de (4*4*6)/5 à une variable. Puis, multiplier ce résultat obtenu de la variable par 99.
*/

let resultat1 = 5 * 5 + 2 

console.log(resultat1)

let resultat2 = 60 / 4 - 6

console.log(resultat2)

let resultat3 = 5555 * 7777

console.log(resultat3)

let resultat4 = (938594 - 94859304) * 948

console.log(resultat4)

let resultat5 = (4 * 4 * 6) / 5
resultat5 *= 99

console.log(resultat4)

// Faire une concaténation d'un string avec une variable en nombre avec différentre façon de l'écrire. Un string c'est une chaine de caractères.

let monNombres = 37
let maPhrase = "Mon âge est de " + monNombres +" ans"
maPhrase = 'Mon âge est de ' + monNombres + ' ans'
maPhrase = `Mon âge est de ${monNombres} ans`
console.log(maPhrase)