/* La boucle while c'est une structure permettant de répéter une série d'instructuion. La répétition ce fait jusqu'à ce qu'on dise à la boucle de s'arrêter.
A chaque fois que la boucle se répète en programmation on appelle ça une itération.
*/

let nombre = 1 
while(nombre < 100) {
    console.log(nombre)
    nombre++ //(nombre++ est la même chose que de faire nombre = nombre + 1 est qui est également la même chose que de faire nombre += 1) ça correspond a une incrémentation.
}
console.log("La boucle est finie on passe à la suite du programme")

let nombre1 = 1 
while(nombre1 < 100) {
    if(nombre1 === 30) {
        break; // break permet de quitter une boucle.
    }
    console.log(nombre1)
    nombre1++ //(nombre++ est la même chose que de faire nombre = nombre + 1 est qui est également la même chose que de faire nombre += 1) ça correspond a une incrémentation. 
}
console.log("La boucle est finie on passe à la suite du programme")
