const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1.45, 200000, -23.9];

//____________________________________________________________________________


const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];

//____________________________________________________________________________

const testArray3 = [[1, 4, 8, 12], 
                    [34, 2.1, -23, 4], 
                    [1.1, -2000, 2, 88]];


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function min(array) {
    let selectedElement = [0];

    for (const element of array) {
        if (selectedElement > element) {
            selectedElement = element;
            
        }
    }
    return selectedElement;
}                    
  console.log(min(testArray1)); /// -123

//___________________________________________________________________________________________

function sumEven(array) {
    const newArray = []
    let risultato = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
                
        if (element % 2 === 0) {
        newArray.push (element);
        }
        }

    for (let i = 0; i < newArray.length; i++) {
        const element = newArray[i];
        risultato = risultato + element;
    }
    return risultato
}
   console.log(sumEven(testArray1)); /// 200008

//____________________________________________________________________________________________

function moreThan5Chars(array) {
const newArray3 = [];

    for (const element of array) {
        const moreThan5CharsElement = element.length > 5 ;
        if (moreThan5CharsElement) {
            newArray3.push(element);
        }
    }
    return newArray3;
}   
   console.log(moreThan5Chars(testArray2));  ///  giallo, arancione, magenta

//____________________________________________________________________________________________

function firstUpperCase(array) {
    // const newArray= [];

    // for (const element of array) {
    //     const uppercaseString = element.toUpperCase ();
    //     newArray.push(uppercaseString);
    // }
    // return newArray;
} 
   console.log(firstUpperCase(testArray2));  ///  tutte le iniziali maiuscole 

//____________________________________________________________________________________________

function superSumAll(array) {
    
}
   console.log(superSumAll(testArray3));  ///  somma degli elementi dell'array  


//_____________________________________________________________________________________________

function divide(array, diveder){

}

console.log(divide(testArray1, 3));  /// un clone con tutti i valori diviso 3

console.log(divide(testArray1)); /// un clone con tutti i valori diviso 2

//_____________________________________________________________________________________________


function filterByMax(array, max) {
    
}

console.log(filterByMax(testArray1, 10));  /// clone con tutti i valori minori di 10


//_____________________________________________________________________________________________

function reverse(array) {
    
}

console.log(reverse(testArray1));
 /// array con i valori invertiti
console.log(reverse(testArray2));

//_____________________________________________________________________________________________

function flatArray(array) {
    
}

console.log(flatArray(testArray3));  /// tutti gli elementi in un solo array 