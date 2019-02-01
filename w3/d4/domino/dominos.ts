//initializeDominoes(dominoes);

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

import { Domino } from "./domino";

/* function shuffleDominos (dominoes: Domino[]){
    dominoes
}; */

function initializeDominoes(): Domino[] {
    let dominoes = [];

    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
//shuffleDominos(dominoes)
    return dominoes;
}




function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();

function dominoRuler(dominoes, i) {
    let movingDomino = dominoes.splice(i, 1)[0];
    dominoes.push(movingDomino);
    return dominoes;
};

for (let i = 0; i < dominoes.length - 1; i++) {
    while (dominoes[i].values[1] !== dominoes[i+1].values[0]) {
        if (dominoes[i].values[1] !== dominoes[i+1].values[0]){
            console.log('Shuffle failed! Try Harder Stupid. :) ')
        break
        };

    dominoRuler(dominoes, i+1);

    };
    console.log(dominoes);
};


console.log('--------------------------------');
console.log('console.log: ' + "\n");

console.log(dominoes);
console.log('--------------------------------');
console.log('print dominoes: ' + "\n" );

print(dominoes);