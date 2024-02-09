/* Les types de variables. 
Pour déclarer une variable on utilise le mot clé "let" et on nomme le nom de la variable.
Expemple "let monNom"
On peut changer la valeur d'une variable au cours du programme.
*/

let monNombre = 2 // Une variable peut être un nombre.
console.log(monNombre)
monNombre = 128
console.log(monNombre)
let monMot = "chat" // Une variable peut être une chaîne de caractère appelé string
console.log(monMot)
let monBooleen = true // Une variable peut être vraix ou faux appelé true ou false
console.log(monBooleen)

// Les types de variables.
console.log(typeof monNombre)
console.log(typeof monMot)
console.log(typeof monBooleen)

/* Les constantes. 
Pour déclarer une constante on utilise le mot clé "const" et on nomme le nom de la constante.
Exemple "const monNom" 
On ne peut pas changer la valeur d'une constante au cours du programme.
*/
const monChiffre = 14
console.log(monChiffre)
/* cela va me prdoduire une erreur si je veux changer la valeur de monChiffre. On peut essayer dans le terminal.
const monchiffre = 14
console.log(monChiffre)
monChiffre = 325 
console.log(monChiffre)
*/