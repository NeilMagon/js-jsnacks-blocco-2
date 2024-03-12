// BONUS:
// - Chiedi un numero di 4 cifre all’utente e 
// calcola la somma di tutte le cifre che compongono il numero.

const userNumber = prompt(`Dimmi un numero con 4 cifre`);

let total = 0;

for (let i = 0; i < userNumber.length; i++) {
    total += parseInt(userNumber[i]);
}

console.log(total);