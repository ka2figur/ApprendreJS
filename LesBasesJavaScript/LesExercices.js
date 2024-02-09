// Exercice n°1
/* Petit exercice, faire une condition qui établi si un nombre est
paire ou impaire (Astuce utiliser le modulo (%))
*/

let nombre = 588 // Change la valeur du nombre pour voir les différents résultats.
if(nombre % 2 == 0) {
    console.log('Le chiffre est paire')
}
else {
    console.log('Le chiffre est impaire')
}

//Exercice n°2
/* Réalise un script où tu vas placer dans une variable le montant du compte en banque d'un utilisateur,
puis dans une autre variable son âge ainsi que dans une autre variable le prix d'un objet à acheter.
Si le montant du compte en banque dépasse celui de l'objet à acheter et que l'utilisateur a au moins 18 ans,
alors une phrase s'affichera : "Vous pouvez acheter l'objet" sinon la phrase "vous ne pouvez pas acheter l'objet" s'affichera.
*/

let compte = 500 // Change la valeur du compte pour voir les différents résultats.
let age = 26 // Change la valeur de age pour voir les différents résultats.
let objet = 250 // Change la valeur de objet pour voir les différents résultats.
let message = (age >= 18) && (compte >= objet)? "Vous pouvez acheter l'objet" : "vous ne pouvez pas acheter l'objet"
console.log(message)

// Autre façon de le faire 

let compte1 = 500 
let age1 = 26
let objet1 = 250
if(compte1 > objet1 && age1 >= 18) {
    console.log("Vous pouvez acheter l'objet")
}
else {
    console.log("vous ne pouvez pas acheter l'objet")
}

//Exercice N°3
/*  a) L'objectif sera de mettre dans une variable la valeur du côté d'un carré. Indiquer à l'utilisateur l'air du carré.
    b) L'objectif sera de mettre dans une variable la valeur du rayon d'un cercle. Indiquer à l'utilisateur le périmètre du cercle.
    Si le périmètre fait plus de 100, alors afficher aussi la phrase : "Le cercle a une périphérie très longue".
    c) Mettre dans trois variables trois notes différentes. Afficher la moyenne de ces trois notes par une phrase.
    Si la moyenne est comprise entre 0 et 5 (exclus), afficher "insuffisant"
    Si la moyenne est comprise entre 5 et 10 (exclus), afficher "bof bof"
    Si la moyenne est comprise entre 10 et 15 (exclus), afficher "bien"
    Si la moyenne est comprise entre 10 et 20, afficher "très bien"
*/

// a) Change la valeur du CoteDuCarre pour voir les différents résultats.

let CoteDuCarre = 5 
let AireDuCarre = CoteDuCarre * CoteDuCarre
console.log("L'aire du carré est égale à " + AireDuCarre)

//b) Change la valeur du rayon pour voir les différents résultats.

let rayon = 11 
let peri = 2* 3.14 * rayon
console.log(peri)
if(peri >= 100) {
    console.log("Le cercle a une périphérie très longue")
}

//c) Change la valeur des notes pour voir les différents résultats.

let notefr = 5 
let notemath = 5 
let notede = 5 
let moyenne = (notefr + notemath + notede) / 3 
console.log(moyenne)
if(moyenne < 5) {
    console.log("insuffisant")
}
else if(moyenne >= 5 && moyenne < 10) {
    console.log("bof bof")
}
else if(moyenne >= 10 && moyenne < 15) {
    console.log("bien")
}
else if(moyenne >= 15) {
    console.log("très bien") 
}

/* Créer les Fonctions suivantes :
a) Une fonction qui calcul l'aire d'un rectangle en fonction des deux côtés.
b) Une fonction qui calcul le périmèrtre d'un cercle en fonction du diamètre.
c) Une fonction qui calcul le périmètre d'un cercle en fonction du rayon.
d) Une fonction qui calcul la longueur d'une chaîne (utilise la fonction str.length pour connaître la taille de la chaîne de caractère"str") et qui renvoie vrai,
si la longueur est inférieur à 10 caractères ou faux si ce n'est pas le cas.
e) Créer une fonction qui renvoie le type d'une variable passée en paramètre.
f) Ecrire une fonction permettant à partir du rayon d'un cercle, d'avoir sa surface.
g) Ecrire une fonction permettant à partir de la largeur, longueur, profondeur d'un pavé, d'obtenir son volume.
h)Ecrire une fonction permettant à partir de la largeur, longueur, profondeur et d'un nombre de pavé, d'obtenir leur volume total.
*/

//a)

function longueurRectangle(cote) {
    let longueur = cote
    return longueur
}
function largeurRectangle(cote1) {
    let largeur = cote1
    return largeur
}
let aireRectangle = longueurRectangle(8) * largeurRectangle(5)
console.log(aireRectangle)

// b)

function diametre(cercle) {
    let perimetre = cercle 
    return perimetre
}
let perimetreCercle = diametre(18) * 3.14
console.log(perimetreCercle)

//c) 

function rayon1(cercle1) {
    let perimetre1 = cercle1
    return perimetre1
}
let perimetreCercle1 = rayon1(12) * 2 * 3.14
console.log(perimetreCercle1)

//d) 

function calculerLongueurChaine(chaine) {
    let longueur1 = chaine.length
    if(longueur1 < 10) {
        return true
    }
    return false
}
console.log(calculerLongueurChaine('Bonjour je suis Thomas'))

//e)

function quelEstLeType(maVariable) {
    return typeof maVariable
}
let nombre1 = 6
console.log(quelEstLeType(nombre1))

//f)

function calculSurfaceCercle(rayon2) {
    return rayon2 * rayon2 * 3.14
}
let rayon2 = 5
console.log(calculSurfaceCercle(rayon2))

//g)

function volumePave(largeur1, longueur2, profondeur) {
    return largeur1 * longueur2 * profondeur
}
console.log(volumePave(3, 4, 10))

//h)

function volumeTotalPave(largeur2, longueur3, profondeur1, nombre2) {
    return largeur2 * longueur3 * profondeur1 * nombre2
}
console.log(volumeTotalPave(4, 25, 30, 6))

/* Construire un tableau d'objets appartement avec les informations suivantes:
"Titre": "Super F2 à la petit France", "Prix": 280000, "Surface": 45
"Titre": "Lumineux F5 à la Krutenau","Prix": 450000, "Surface": 115
"Titre": "Studio au Neudorf", "Prix": 85000, "Surface": 24
Puis écrire les fonctions suivantes:
Une fonction qui retourne la moyenne de la surface des appartements.
Une fonction qui nous retourne la surface de l'appartement le plus cher.
Une fonction qui retourne dans un tableau les objets appartement dont les prix est inférieur à 300000.
*/

let appartements = [
    {
        "Titre": "Super F2 à la petit France",
        "Prix": 280000, 
        "Surface": 45
    },
    {
        "Titre": "Lumineux F5 à la Krutenau",
        "Prix": 450000, 
        "Surface": 115 
    },
    {
        "Titre": "Studio au Neudorf", 
        "Prix": 85000, 
        "Surface": 24 
    }
]
function moyenneSurface(apparts) {
    let surface = 0 
    let nombreApparts = appartements.length
    for(let i = 0 ; i < nombreApparts ; i++) {
        surface += apparts[i].Surface
    }
    return surface / nombreApparts
}
console.log(moyenneSurface(appartements))

function surfaceLaplusCher(appartements) {
    let resultat 
    let lePlusCher = 0 
    for(let i = 0 ; i < appartements.length ; i++) {
        if(appartements[i].Prix > lePlusCher) {
            resultat = appartements[i].Surface
            lePlusCher = appartements[i].Prix
        }
    }
    return resultat
}
console.log(surfaceLaplusCher(appartements))

function prixInferieur(appartements) {
    let resultat = []
    for(let i = 0 ;  i < appartements.length ; i++) {
        if(appartements[i].Prix < 300000) {
           resultat.push(appartements[i]) 
        }
    }
    return resultat
}
console.log(prixInferieur(appartements))