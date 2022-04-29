
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


// const arrayOfArray = [[2, 6, 4], 
//                       [8, 5, 1], 
//                       [9, 3, 6]];

// for (let i = 0; i < arrayOfArray.length; i++) {
//     const riga = arrayOfArray[i];
// for (let j = 0; j < riga.length; j++) {
//     const cella = riga[j];
//     console.log(cella);
// } 
// }                      

//_________________________________________________________________________________________________
// clonare e aggingere 1 ad ogni elemnto

// console.log(arrayOfArray);

// function cloneAndAddOneBidimentional(array) {
//     const newArray = [];

//     for (const riga of array) {
        
//         const newRiga = [];
    
//         for (const cella of riga) {
            
//            const cellaPlusOne = cella + 1;
//            newRiga.push(cellaPlusOne); 
//         }

//         newArray.push(newRiga);
//     }
//         return newArray;
// }
//   console.log(cloneAndAddOneBidimentional(arrayOfArray));

//_____________________funzioni di filtraggio_________________________________________________________

const testArray = [2, 6, 8, 7, 21, 2001, 5000, 3, 12];

// function keepEven(array) {
//    const newArray = [];
   
//    for (let i = 0; i < array.length; i++) {
//        const element = array[i];
//        if (element % 2 === 0) {
//            newArray.push(element);
//        }
//    }
//    return newArray;
// }

// console.log(keepEven(testArray));

//- - - - - - - - - - - - - - - - - - - - - - - - - - -

// function keepGreaterThan10(array) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (element > 10) {
//         newArray.push(element)
//         }  
//     }
//     return newArray
// }

// console.log(keepGreaterThan10(testArray));

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
// funzione di ordine superiore con array


// function filter(array, filterFunction) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const isElementToAdd = filterFunction(element);
//       if (isElementToAdd) {
//         newArray.push(element);
//       }
//     }
//     return newArray;
// }

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isGreaterThan10(number) {
//     return number > 10;
// }

// function isSmallerThan10(number) {
//     return number < 10
// }

// // console.log(filter(testArray, isEven));  
// console.log (testArray.filter(isEven));

// // console.log(filter(testArray,isGreaterThan10));  
// console.log (testArray.filter(isGreaterThan10));

// // console.log(filter(testArray,isSmallerThan10));  
// console.log (testArray.filter(isSmallerThan10));

// // console.log(filter(testArray, (number) => number % 2 === 1));
// console.log(testArray.filter((number) => number % 2 === 1));


//____________________mapping__________________________


// function addOneToAllElements(array) {
//     const newArray= [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const newElement = element + 1;
//         newArray.push(newElement);  
//     }
//     return newArray;
// }

// console.log(addOneToAllElements(testArray));

// - - - - - - - - - - - - - - - - - - - - - - - -

function map(array, mappingFunction) {
    const newArray= [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = mappingFunction(element)
        newArray.push(newElement);  
    }
    return newArray;
}


function addOne(element) {
    return element + 1;
}


function divide(element) {
    return element / 2;
}

// console.log(map(testArray, divide));
console.log(testArray.map(addOne));

// console.log(map(testArray, addOne));
console.log(testArray.map(divide));

// console.log(map(testArray, (element) => element**2));
console.log(testArray.map((element) => element **2));

//_________________________________________________________________________________________________
// sortin fuction 

function compareNumber(el1, el2) {

    if (el1 > el2) {
        return 1;
    } else if (el1 < el2){
        return -1;
    } else {
        return 0
    }
    
}

function compareNUmber2(el1, el2) { //SORTIN FUNCTION PER I NUMERI
    return el1 - el2;
}

function compareString(el1, el2) {
   return el1.localeCompare(el2);
}

function compareStringByLength(el1, el2) {
    return el1.length - el2.length;
}

const arrayOfNumbers = [1, 5, 3, 8, 6];




arrayOfNumbers.sort(compareNumber);

console.log(compareNUmber2);

const arrayOfStrings = ['balcone', 'aritmetica', 'giallo', 'zuzzurellone'];

arrayOfStrings.sort(compareStringByLength);

console.log(arrayOfStrings);

const testArray4 = [2, 4, 7, -9, 1000, -45, 2, 12, 333, -1000, 123, 34];

testArray4.sort(compareNUmber2);

console.log(testArray4);