// Ex 1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const bigger = (num) => {
    return new Promise((resolve, reject) => {
        if (num >= 10) {
            resolve(num);
        } else {
            reject(num);};
    });
};

bigger(25)
    .then((rest) => {
        console.log(`${rest} a trecut conditia.`);
    })
    .catch((error) => {
        console.log(`${error} nu a trecut conditia.`);
    });


// Ex 2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri

const includesPromise = (aString) => {
    return new Promise((resolve, reject) => {
        if (aString.includes('promise')) {
            resolve(aString);
        } else {
            reject(aString);};
    });
};

includesPromise('what is a promise?')
    .then((rest) => {
        console.log(`${rest} contine 'promise'.`);
    })
    .catch((error) => {
        console.log(`${error} nu contine 'promise'.`);
    });



// ex. 3 Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseString = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input === 'string') {
                resolve(input.toUpperCase());
            } else {
                reject(input);
            }
        }, 200);
    });
};

const returnedPromiseCorectly = promiseString('myString');
const returnedPromiseIncorectly = promiseString(4);

promiseString('myString')
    .then((rest) => {
        console.log(`String-ul uppercased este: ${rest}`);
    })
    .catch((error) => {
        console.log(`Stringul pentru cazul de eroare este: ${error}`);
    });



//     4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.


