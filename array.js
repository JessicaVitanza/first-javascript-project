
const arrayOfNumbers = [1, 5, 3, 8, 6];

// arrayOfNumbers.push(9);

// arrayOfNumbers.unshift(37);

//________________________________________________________________________________

// const element = arrayOfNumbers.pop()

// console.log(element);

// const element2 = arrayOfNumbers.shift ();

// console.log(element2);

// console.log(arrayOfNumbers);

//_____________________________________________________________________________

// const elementInPosition2 = arrayOfNumbers [2];

// console.log(elementInPosition2);

// console.log(arrayOfNumbers [0]);

//_____________________________________________________________________________

// arrayOfNumbers [4] = 666;

// console.log(arrayOfNumbers);

//______________________________________________________________________________

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     const element = arrayOfNumbers[i];
//     console.log("l'elemento dell'array a indice " + i + " è " + element);
// }



// for (const element of arrayOfNumbers) {
//     console.log("forof", element);
// }


//_________________________________________________________________________________________


// function max (array) {

// let selectedElement = array [0];

// for (const element of array) {
//     if (selectedElement < element) {
//         selectedElement = element;
//     }
//   }
//     return selectedElement;
// }

// console.log(max (arrayOfNumbers));


//______________________________________________________________________________________________


// function cloneAndaddOneToArray(array) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const elementPlusOne = element + 1;
//         newArray.push (elementPlusOne);
//     }
//     return newArray;
// }
//     console.log(cloneAndaddOneToArray(arrayOfNumbers));

//_______________________________________________________________________________________________


// function findEvenNumbers(array) {
//         const newArray = []

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (element % 2 === 0) {
//            newArray.push (element);
//         }
//     }
//     return newArray;
// }    
//     console.log(findEvenNumbers(arrayOfNumbers));

//_________________________________________________________________________________________________


    // function sumAll(array) {
    //     let risultato = 0;
    //     for (let i = 0; i < array.length; i++) {
    //         const element = array[i];
    //         risultato = risultato + element;
    //     }
    //     return risultato
    // }

    // console.log(sumAll(arrayOfNumbers));

//_________________________________________________________________________________________________


// const arrayOfStrings = ['pippo', 'pluto', 'paperino',];

// console.log(arrayOfStrings);


// function arrayToUppercase(array) {
//     const newArray= [];

//     for (const element of array) {
//         const uppercaseString = element.toUpperCase ();
//         newArray.push(uppercaseString);
//     }
//     return newArray;
// }
//     console.log(arrayToUppercase(arrayOfStrings));

//_______________________________________________________________________________________________


const arrayOfArray = [[2, 6, 4], 
                      [8, 5, 1], 
                      [9, 3, 6]];

// for (let i = 0; i < arrayOfArray.length; i++) {
//     const riga = arrayOfArray[i];
// for (let j = 0; j < riga.length; j++) {
//     const cella = riga[j];
//     console.log(cella);
// } 
// }                      

//_________________________________________________________________________________________________
// clonare e aggingere 1 ad ogni elemnto

console.log(arrayOfArray);

function cloneAndAddOneBidimentional(array) {
    const newArray = [];

    for (const riga of array) {
        
        const newRiga = [];
    
        for (const cella of riga) {
            
           const cellaPlusOne = cella + 1;
           newRiga.push(cellaPlusOne); 
        }

        newArray.push(newRiga);
    }
        return newArray;
}
  console.log(cloneAndAddOneBidimentional(arrayOfArray));

//__________________________________________________________________________________________________







