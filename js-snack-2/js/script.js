// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt(`Dimmi una parola`);

const secondWord = prompt(`Dimmi una parola`);

let word = firstWord;
let bigword = secondWord;

if (firstWord.length > secondWord.length) {
    word = secondWord;
    bigword = firstWord;
}

console.log(word);
console.log(bigword);