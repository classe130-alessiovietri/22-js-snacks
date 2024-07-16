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

const numOne = parseInt(prompt('Inserisci il primo numero:'));
const numTwo = parseInt(prompt('Inserisci il secondo numero:'));

if (!isNaN(numOne) && !isNaN(numTwo)) {
    if (numOne > numTwo) {
        console.log('E\' maggiore ' + numOne);
    }
    else if (numOne == numTwo) {
        console.log('I due numeri sono uguali');
    }
    else {
        console.log('E\' maggiore ' + numTwo);
    }
}
else {
    console.log('Input non validi. INSERISCI DEI NUMERI VALIDI!!');
}