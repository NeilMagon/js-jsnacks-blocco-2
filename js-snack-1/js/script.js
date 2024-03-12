// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const userNumber = parseInt(prompt(`Dimmi un numero`));

let number = userNumber;

if (userNumber % 2 !== 0) {
    number++;
}
console.log(number);
