
let x = prompt("entrer un nombre");


 if (x%3==0)  {
    console.log("Fizz");
}
else if (x%5==0){
    console.log("Buzz");
}else
if(x%3==0 && x%5==0) {
    console.log("FizzBuzz-vous");
}else{
    console.log("affiche le nombre lui-même ");
}