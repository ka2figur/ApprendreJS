/* La fonction prend en compte des arguments (parametres) qu'elle va traiter et ensuite retourner un résultat, 
par expemple une fonction qui permet de calculer l'aire d'un carré, la fonction prend en argument (parametre) de la fonction le côté d'un carré,
elle va faire une opération qui en fonction de ce côté me permettra de récupérer l'aire du carré et va me retourner l'aire du carré.
*/

function aireCarre(cote) {
    let aire = cote * cote
    return aire
}

let aireDeMonCarre = aireCarre(8)
console.log(aireDeMonCarre)

//Toutes variables utilisées dans une fonction reste dans cette fonction, on appelle ça des variables locales. Ces variables sont différentes des variables globales.

let hello = 'variable globale'
function dire() {
    let hello = 'variable locale'
    console.log(hello)
}
dire()
console.log(hello)