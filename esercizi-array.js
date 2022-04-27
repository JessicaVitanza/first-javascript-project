const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1.45, 200000, -23.9];

//____________________________________________________________________________


const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];

//____________________________________________________________________________

const testArray3 = [[1, 4, 8, 12], 
                    [34, 2.1, -23, 4], 
                    [1.1, -2000, 2, 88]];


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function min(array) {
    let number = [0];

    for (const element of array) {
        if (number > element) {
            number = element;
            
        }
    }
    return number;
}                    
  console.log("min", min(testArray1)); /// -123

//___________________________________________________________________________________________

function sumEven(array) {
    
    let risultato = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
            
        const elementEven = element % 2 === 0;

        if (elementEven) {
        risultato = risultato + element;
        }
        }
        
    return risultato
}
   console.log("sumEven", sumEven(testArray1)); /// 200008

//____________________________________________________________________________________________

function moreThan5Chars(array) {
const newArray3 = [];

    for (const element of array) {
        if (element.length > 5) {
            newArray3.push(element);
        }
    }
    return newArray3;
}   
   console.log("moreThan5Chars", moreThan5Chars(testArray2));  ///  giallo, arancione, magenta

//____________________________________________________________________________________________

function firstUpperCase(array) { 
    const newArray = []

    for (const element of array) {
        newArray.push(element.charAt(0).toUpperCase() + element.slice(1))
    }
    return newArray
}

   console.log("firstUpperCase", firstUpperCase(testArray2));  ///  tutte le iniziali maiuscole 

//____________________________________________________________________________________________

function superSumAll(array) {

    let result = 0

    for (let i = 0; i < array.length; i++) {
        const riga = array [i];
        for (let j = 0; j < riga.length; j++) {
            const element = riga[j];
            result = result + element;
        }
    } 
    return result;
}

   console.log("superSumAll", superSumAll(testArray3));  ///  somma degli elementi dell'array  


//_____________________________________________________________________________________________

function divide(array, divider = 2){

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = element / divider;
        newArray.push(newElement);
    }
    return newArray
}

console.log("divide", divide(testArray1, 3));  /// un clone con tutti i valori diviso 3

console.log("divide", divide(testArray1)); /// un clone con tutti i valori diviso 2

//_____________________________________________________________________________________________


function filterByMax(array, max) {
    
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
      if (element < max) {
        newArray.push(element)
    }
}
        return newArray
}

console.log("filterByMax", filterByMax(testArray1, 10));  /// clone con tutti i valori minori di 10


//_____________________________________________________________________________________________


function reverse(array) {

const newArray = [];

for(let i = array.length -1; i >= 0; i--) {
    const element = array[i];
    newArray.push(element);
}
return newArray;

}

 

console.log("reverse", reverse(testArray1));  /// array con i valori invertiti
console.log("reverse", reverse(testArray2));

//_____________________________________________________________________________________________

function flatArray(array) {
     const newArray= [];

     for (let i = 0; i < array.length; i++) {
         const row = array[i];
     for (let j = 0; j < row.length; j++) {
             const element = row[j];
             newArray.push(element)
     }  
     }
     return newArray
}

console.log("flatArray", flatArray(testArray3));  /// tutti gli elementi in un solo array;