/* 
    Snack 1

    L’utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.

    1. Chiedo i due numeri all'utente
    2. Verifico quale dei due è maggiore
        - Se è maggiore il primo, dico che è maggiore il primo
        - Se è maggiore il secondo, dico che è maggiore il secondo
        - Altrimenti, dico che sono uguali
*/

// const numOne = parseInt(prompt('Inserisci il primo numero:'));
// const numTwo = parseInt(prompt('Inserisci il secondo numero:'));

// if (!isNaN(numOne) && !isNaN(numTwo)) {
//     if (numOne > numTwo) {
//         console.log('E\' maggiore ' + numOne);
//     }
//     else if (numOne == numTwo) {
//         console.log('I due numeri sono uguali');
//     }
//     else {
//         console.log('E\' maggiore ' + numTwo);
//     }
// }
// else {
//     console.log('Input non validi. INSERISCI DEI NUMERI VALIDI!!');
// }

/* 
    Snack 2

    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.

    1. Chiedo le due parole all'utente
    2. Verifico la lunghezza delle due parole
        - Se è più lunga la prima, stampo prima la seconda e poi la prima
        - Se è più lunga la seconda, stampo prima la prima e poi la seconda
        - Altrimenti, boh, come mi va
*/

const wordOne = prompt('Inserisci la prima parola:');
const wordTwo = prompt('Inserisci la seconda parola:');

if (wordOne.length > wordTwo.length) {
    console.log('Più corta', wordTwo);
    console.log('Più lunga', wordOne);
}
else if (wordTwo.length > wordOne.length) {
    console.log('Più corta', wordOne);
    console.log('Più lunga', wordTwo);
} 
// else if (wordOne.length == wordTwo.length) {
else {
    console.log('Lunghe uguali', wordOne, wordTwo);
}

// console.log('wordOne', wordOne, typeof wordOne, wordOne.length);
// for (let i = 0; i < wordOne.length; i++) {
//     console.log(wordOne[i]);
// }

// console.log('wordTwo', wordTwo, typeof wordTwo, wordTwo.length);
// for (let i = 0; i < wordTwo.length; i++) {
//     console.log(wordTwo[i]);
// }
