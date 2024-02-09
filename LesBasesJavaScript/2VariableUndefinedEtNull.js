//Une variable est undefined si elle est déclaré mais n'a pas reçu de valeur.
let maVariable
console.log(maVariable)

//Une variable null c'est une affection de valeur pour indiquer qu'une variable est intentionnellement vide ou inexistante.
let maVariable1 = null
console.log(maVariable1)
if(maVariable1 === null) {
    console.log("La variable est null")
}

// undefined et null 
console.log(undefined == null) // considéré comme équivalent.
console.log(undefined === null) // pas parfaitement équivalent car de type différent.

/*undefined ça apparait quand c'est javascript qui va donner à une variable une valeur par défaut.
Alors que null est globalement utilisé par les programmeurs pour indiquer une absence intentionnelle de valeur.
*/