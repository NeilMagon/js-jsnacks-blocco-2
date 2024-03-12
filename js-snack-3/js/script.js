// - Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i 
// numeri dispari e in verde i numeri pari.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const  evenDiv = document.getElementById('even');
const oddDiv = document.getElementById('odd');

for (let i = 0; i < number.length; i++) {
    if (number[i]  % 2 == 0) {
        evenDiv.innerHTML += `${number[i]} `;
        evenDiv.classList.add(`red`);
    } else {
        oddDiv.innerHTML += `${number[i]} `;
        oddDiv.classList.add('green');
    }
}