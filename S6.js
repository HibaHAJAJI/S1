
let annee = prompt("entrer l'annee :");

if (annee % 4 == 0 && annee % 100 !== 0){
    console.log ("annee est bissextile");
}
else{
    console.log("annee est non bissextile");
}