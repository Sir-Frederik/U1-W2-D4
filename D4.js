/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/*
const area = function (l1, l2) {
  return (calcolo = (l1 * l2) / 2);
};
console.log(area(2, 3));


*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*
const crazySum = function (a, b) {
  let risultato = null;
  if (a === b) {
    risultato = (a + b) * 3;
  } else {
    risultato = a + b;
  }
  return risultato;
};
console.log(crazySum(1, 1));

*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/*
const crazyDiff = function (a) {
  let risultato = null;

  let differenza = null;

  risultato = a - 19;

  if (a <= 19) {
    return risultato;
  } else {
    differenza = Math.abs(a - 19) * 3;
    return differenza;
  }
};
console.log(crazyDiff(20));

  */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* 
const boundary = function (n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(19));
console.log(boundary(29));
console.log(boundary(400));

 */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

// const epify = function (x) {
//   if (typeof x === "string") {
//     if (x.startsWith("EPICODE")) {
//       return x;
//     } else {
//       return "EPICODE" + x;
//     }
//   } else {
//     return "Mi spiace ma non hai inserito una stringa e non posso farci proprio niente di niente. Pur volendo, davvero, ho le mani legate, niente di personale, ordini dall'alto.";
//   }
// };
// console.log(epify("Bombolo"));
// console.log(epify("EPICODE bombolino"));
// console.log(epify(5));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
// const check3and7 = function (a) {
//   if (a >= 0) {
//     if (a % 3 != 0 && a % 7 != 0) {
//       return "non è un multiplo di 3 nè di 7";
//     } else {
//       return " è un multiplo di 3 o di 7";
//     }
//   } else {
//     return " O non hai inserito un numero, oppure esso è  negativo, come il mio umore. ";
//   }
// };
// console.log(check3and7(3));
// console.log(check3and7(7));
// console.log(check3and7(2));
// console.log(check3and7("cagnolino"));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (x) {
  if (typeof x === "string") {
    let gnirts = [];
    let array = x.split("");

    for (let i = array.length - 1; i === 0; i--) {
      gnirts.push(array[i]);
    }
    return gnirts.join("");
  } else {
    return "non hai inserito una stringa";
  }
};
console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
