
// function calcoloIpotenusa(cateto1, cateto2) {
//  const cateto1AllaSeconda = cateto1 ** 2;
//  const cateto2AllaSeconda = cateto2 ** 2;
//  const sommaDeiQuadrati = cateto1AllaSeconda + cateto2AllaSeconda;
//  const ipotenusa = Math.sqrt(sommaDeiQuadrati);   
// return ipotenusa;
// } 

// const c1t1 = 4;

// const c2t1 = 3;

// const it1 = calcoloIpotenusa(c1t1, c2t1);



// // const c1t1AllaSeconda = c1t1 ** 2;

// // const c2t1AllaSeconda = c2t1 ** 2;

// // const sommaDeiQuadrati = c1t1AllaSeconda + c2t1AllaSeconda;

// // const it1 = Math.sqrt(c1t1AllaSeconda + c1t1AllaSeconda);

// // const it1 = Math.sqrt(sommaDeiQuadrati);


// console.log('ipotenusa: ' + it1);



// const c1t2 = 12;

// const c2t2 = 9;

// const it2 = calcoloIpotenusa(c1t2, c2t2);

// // const c1t2AllaSeconda = c1t2 ** 2;

// // const c2t2AllaSeconda = c2t2 ** 2;

// // const sommaDeiQuadrati2 = c1t2AllaSeconda + c2t2AllaSeconda;

// // const it2 = Math.sqrt(sommaDeiQuadrati2);

// console.log("ipotenusa2: " + it2);

//________________________________________________________________________________________

// esercizio 1

// function fizzBuzz(numero) {
//     const isDivisibilePerTre = numero % 3 === 0;
//     const isDivisibilePerCinque = numero % 5 === 0; 

//     if (isDivisibilePerTre && isDivisibilePerCinque) {
//         return "FIZZBUZZ";
//     } else if (isDivisibilePerCinque){
//         return "BUZZ";
//     } else if (isDivisibilePerTre) {
//         return "FIZZ";
//     } else {
//         return "";
//     }
// }

// const numeroInStringa = prompt("inserisci un numero");

// const numero = parseFloat(numeroInStringa);

// const result = fizzBuzz(numero);

// console.log(result);



// for (let i = 0; i < 100; i++) {
// const result = fizzBuzz(i);
// console.log(result);
// }


//__________________________________________________________________________________________
// dato arrotondato - elevare alla seconda - controllare se supera 10 - lo metto a 10
//se il valore è più di 5 ritorno a 0 altrimenti 1


// function elaboraDato(dato) {
//     const datoArrotondato = Math.round(dato);

//     const datoArrotondatoAllaSeconda = datoArrotondato ** 2;

//     let datoDopoSoglia = controllaSoglia(datoArrotondatoAllaSeconda);

// //     let datoDopoSoglia; 
// //     if (datoArrotondatoAllaSeconda > 10) {
// // datoDopoSoglia = 10;
// //     } else {
// //         datoDopoSoglia = datoArrotondatoAllaSeconda;
// //     }

//     if (datoDopoSoglia > 5) {
//         return 0;
//     } else {
//         return 1;
//     }
// }


// function controllaSoglia(numero) {
//     if (numero > 10) {
//         return 10;
//     } else {
//         return numero;
//     }
// }


// const dato1 = 3.4;

// const risultato1 = elaboraDato(dato1);

// console.log(risultato1);



// const dato2 = 27;

// const risultato2 = elaboraDato(dato2);

// console.log(risultato2);

// const dato3 = 1.5;

// const risultato3 = elaboraDato(dato3);

// console.log(risultato3);

//_________________________________________________________________________________________________

// function dividi(dividendo, divisore = 2) {

//     // if (!dividendo) {
//     //     return "mi serve il dividendo"
//     // }

//     // if (!divisore) {
//     //     divisore = 2;
//     // } 

//     const quoziente = dividendo / divisore;
//     return quoziente;
// }

// const risultato = dividi(8, 2);
// console.log("due parametri", risultato); 
// console.log("--------------");
// const risultato2 = dividi(8);
// console.log("un parametro", risultato2);
// console.log("--------------");
// const risultato3 = dividi ();
// console.log("zero parametri", risultato3);


// let numeroInStringa = "52";

// let numero = parseInt(numeroInStringa, 10);

//___________________________________funzioni anonime______________________________________________

// const aggiungiUnoAnonima = function (numero) {
//     return numero + 1
// }

// const risultato4 = aggiungiUnoAnonima(5);

// console.log("funzione anonima", risultato4);

//________________________________funzioni anonime______________________________________________

// const aggiungiUnoLambda = (numero) => numero + 1

// const risultato5 = aggiungiUnoLambda(8);

// console.log("funzione lambda", risultato5);

//______________________________________standard________________________________________________

// function aggiungiUno(numero) {
//     return numero + 1
// }

//_________________________________________________________________________________________________

// function somma(numero1, numero2) {
    
//   return numero1 + numero2;
    
// }


// function sottrazione(numero1, numero2) {
    
//     return numero1 - numero2;
      
// }


// function divisione(numero1, numero2) {
    
//     return numero1 / numero2;
      
// } 


// function sommoltiplicazionema(numero1, numero2) {
    
//     return numero1 * numero2;
      
// }

// - - - - - - - - - - - funzioni di ordine superiore - - - - - - - - - - - -

// function eseguiOperazione(numero1, numero2, operazione) {
    
//     return operazione(numero1, numero2);

// } 

// console.log(eseguiOperazione(5, 3, somma));

// //- - - - - - - - - - - - - - - - - - - - - - - -

// function resto(numero1, numero2){
//     return numero1 % numero2
// }

// // const restoLambda = (n1, n2) => n1 % n2

// console.log(eseguiOperazione(9, 4, (n1, n2) => n1 % n2));

//- - - - - - - - - - - - - - - - - - - - - - - -

// // function somma1(numero) {
// //    return numero + 1; 
// // }


// // function somma2(numero) {
// //     return numero + 2; 
// // }

// function generaSomma(numeroDaSommare) {
//     return (numero) => numero + numeroDaSommare;
// }

// const somma3 = generaSomma(3);

// console.log(somma3(5));





