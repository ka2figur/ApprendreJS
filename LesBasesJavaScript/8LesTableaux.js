/* Un tableau (array) est une variable qui contient une liste de valeurs.
Chaque valeur est accessible grâce à un indice dont la numérotation commence à 0.
Voici une schématisation d'un tableau : 
indice  0   1   2   3
Valeur  V1  V2  V3  V4          V=Valeur
*/

let monTableau = ['banane', 'pêche', 'citron']
console.log(monTableau) //ça me créer un tableau avec 3 valeur dedans.
console.log(monTableau[0]) // Accède à la valeurs banane de monTableau.
console.log(monTableau[1]) // Accède à la valeurs pêche de monTableau.

let monTableau1 = ['voiture', 'camion', 'moto']
monTableau1[1] = 'avion' // Modifie une valeur
console.log(monTableau1)

let monTableau3 = ['foot', 'tennis', 'basket']
monTableau3.push('formule 1') // Cette fonction rajoute un élément
console.log(monTableau3)
monTableau3.shift() // Cette fonction enlève la première valeur du tableau.
console.log(monTableau3)
monTableau3.pop() // Cette fonction enlève la dernière valeur du tableau.
console.log(monTableau3)

let maPhrase = 'Il fait bien froid ici'
let monTableau4 = maPhrase.split(' ') // Cette fonction permet de convertir une chaîne de caractère en tableau et prend en argument ce qui fera la césure entre les différents éléments.
console.log(monTableau4)
let maPhrase2 = monTableau4.join(' ') // Cette fonction permet de créer une chaine de caractère à partir d'un tableau.
console.log(maPhrase2)

// Parcourir un tableau à l'aide d'une boucle.

let monTableau5 = ['Jean', 'Kevin', 'John', 'Mohamed', 'Tom', 'Chinchong', 'Marcus']
for(let i = 0 ; i < monTableau5.length ; i++) {
    console.log(monTableau5[i])
}

