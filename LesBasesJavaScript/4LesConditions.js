// Les conditions.

/* Les opérateurs de comparaison : 
== signifie égal à 
!= signifie différent de
=== signifie contenu ou type égaux à 
!== signifie contenu ou type différent de 
> signifie supérieur à
>= signifie supérieur ou égal à
< signifie inférieur à
<= signifie inférieur ou égal à
*/

let nombre1 = 4
let nombre2 = 6
let nombre3 = 9 // nombre
let nombre4 = "9" // string

console.log(nombre1 == nombre2)
console.log(nombre2 < nombre3)
console.log(nombre3 == nombre4)
console.log(nombre3 === nombre4)

/* Les opérateurs logiques :
&& signifie ET exemple valeur1 && valeur2
|| signifie OU exemple valeur1 || valeur2
! signifie INVERSE exemple !valeur
*/

console.log(true && true);console.log(true && false);console.log(false && false)
console.log(true || true);console.log(true || false);console.log(false || false)
console.log(!true);console.log(!false)

// Combinées les conditions.

let condition1 = 1 > 2

console.log(condition1)

let condition2 = 9 > 6

console.log(condition2)

console.log(condition1 && condition2)
console.log(condition1 || condition2)

/* Les conditions if et else. 
On veux voir si qelque chose et a true ou a false, si c'est à true c'est if et si c'est à false c'est else.
On peut utiliser if seul mais pas else ou else if seul.
*/

if(9 > 6)
{
    console.log('oui')
}
// exemple

if(9 > 6)
{
    console.log('oui')
}
else {
    console.log('non')
}
// exemple 

if(9 < 6)
{
    console.log('oui')
}
else {
    console.log('non')
}
// exemple 

let monAge = 24
if(monAge >= 18)
{
    console.log('Tu es majeur')
}
else {
    console.log('Tu es un mino')
}
// exemple

let monAge1 = 7
if(monAge1 >= 18)
{
    console.log('Tu es majeur')
}
else {
    console.log('Tu es un mino')
}

// Utilisation de else if. Signifie sinon si.

let monAge2 = 15
if(monAge2 < 18)
{
    console.log("Tu es mineur")
}
else if(monAge2 >= 18 && monAge2 < 70) {
    console.log("Tu es dans la force de l\'âge")
}
else if(monAge2 >= 70) {
    console.log("Tu deviens vieux ^^")
} 
// exemple

let monAge3 = 19
if(monAge3 < 18)
{
    console.log("Tu es mineur")
}
else if(monAge3 >= 18 && monAge3 < 70) {
    console.log("Tu es dans la force de l\'âge")
}
else if(monAge3 >= 70) {
    console.log("Tu deviens vieux ^^")
} 
// exemple

let monAge4 = 75
if(monAge4 < 18)
{
    console.log("Tu es mineur")
}
else if(monAge4 >= 18 && monAge4 < 70) {
    console.log("Tu es dans la force de l\'âge")
}
else if(monAge4 >= 70) {
    console.log("Tu deviens vieux ^^")
} 

// Les conditions switch. Change les valeurs de monAge5 pour voir les résultats.

let monAge5 = 50
switch(monAge5) {
    case 17:
        console.log('Tu as 17 ans')
        break
    case 45:
        console.log('Tu as 45 ans') 
    default:
        console.log('Tu as ni 17 ans ni 45 ans')   
}

// Les conditions ternaires. Une autre façon au niveau de la syntaxe pour décrir le if else

let age = 37 // Change les valeurs pour voir le résultat.
let message = (age >= 18) ? 'Majeur' : 'Mineur'
console.log(message)

let age1 = 9 
let message1 = (age1 <= 17) && 'Mineur'
console.log(message1)
console.log(typeof message1) // Pour connaître qu'elle type de variable c'est ?

let age2 = 19
let message2 = (age2 <= 17) && 'Mineur'
console.log(message2)
console.log(typeof message2)

