/* Un objet est constitué généralement d'un constructeur, d'attributs (propriétés), de méthodes (fonctions).
Le constructeur c'est un bout de code qui sera executer lorsque l'on va créer un nouvel objet il permet souvent de faire des actions.
Les propriétés sont des valeurs placées dans des variables au sein de l'objet (par exemple : age, santé, poids) 
et elle permettent de récupérer des informations sur un objet bien précis.
Les méthodes vont permettre de modifier l'objet en réalisant des opérations sur le contenu de l'objet.
*/

let monChat = {
    "nom": "Garfield",
    "age": 3,
    "estTatoué": true
}
console.log(monChat)
console.log(monChat.nom)
console.log(monChat.age)
console.log(monChat.estTatoué)
monChat.puce = false // Ajoute une propriété à monChat.
console.log(monChat)

// On peut parcourir l'objet en faisant

for(let i in monChat) {
    console.log(monChat[i])
}

// On peut combiner les tableaux avec les objets.

let mesChats = [
    {
        "nom": "Soleil",
        "age": 6,
        "couleur": "roux"  
    },
    {
        "nom": "Kitcat",
        "age": 2,
        "couleur": "noir"  
    },
    {
        "nom": "Mimine",
        "age": 4,
        "couleur": "blanc"  
    },
]

function a3AnsOuPlus(chats) {
    let resultat = []
    for(let i = 0 ;  i < chats.length ; i++) {
        if(chats[i].age >= 3) {
           resultat.push(chats[i]) 
        }
    }
    return resultat
}

let listeDesVieuxChats = a3AnsOuPlus(mesChats)
console.log(listeDesVieuxChats)

function estNoir(chats) {
    let resultat = []
    for(let i = 0 ;  i < chats.length ; i++) {
        if(chats[i].couleur === 'noir') {
           resultat.push(chats[i]) 
        }
    }
    return resultat
}

let listeDesChatsNoir = estNoir(mesChats)
console.log(listeDesChatsNoir)


function calculMoyenneAge(chats) {
    let somme = 0 
    let nombreChats = chats.length
    for(let i = 0 ; i < nombreChats ; i++) {
        somme += chats[i].age
    }
    return somme / nombreChats
}
console.log(calculMoyenneAge(mesChats))

