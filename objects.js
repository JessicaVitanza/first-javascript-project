// // const corso1 = {
// //     nome: 'programmatore front-end',
// //     ore: 300,
// //     terminato: false,
// //   } 
  
// //   const voti1 = [8, 5, 10, 9]
  
// //   const studente1 = {
// //     nome: 'Mirco',
// //     cognome: 'Faro',
// //     eta: 28,
// //     sposato: false,
// //     corso: corso1,
// //     voti: voti1
// //   }
  
  
// //   const voti2 = [4, 6, 10, 9];
  
// //   const studente2 = {
// //     nome: "Paolo",
// //     cognome: "Foppiano",
// //     eta: 24,
// //     sposato: false,
// //     corso: corso1,
// //     voti: voti2,
// //   }; 
  
// //   // const studente2 = ['Paolo', 'Foppiano', 24, false];
  
// //   const studenti = [studente1, studente2]
  
// //   for (let i = 0; i < studenti.length; i++) {
// //     const studente = studenti[i];
// //     console.log(studente.nome + ' ' + studente.cognome);
// //   }
  
  

// //_______________________________________________________________________________________________________________
// //creare l'oggetto studente basato su se stessi, creare un ciclo log che stampi info e un check che controlla m/f

// const studente1 = {
//     nome : 'Artiom',
//     cognome : 'Sangiorgio',
//     annoDiNascita : 1998,
//     sesso : 'M',
//     cittaDiNascita : 'San Pietroburgo',
// }

// const studente2 = {
//     nome : 'Paolo',
//     cognome : 'Foppiano',
//     annoDiNascita : 1997,
//     sesso : 'M',
//     cittaDiNascita : 'Genova',
// }

// const studente3 = {
//     nome : 'Cinzia',
//     cognome : 'Ariotti',
//     annoDiNascita : 1996,
//     sesso : 'F',
//     cittaDiNascita : 'Genova',
// }


// const studente4 = {
//     nome : 'Polina',
//     cognome : 'Borect',
//     annoDiNascita : 1994,
//     sesso : 'F',
//     cittaDiNascita : 'Chelyabinsk',
// }


// const studente5 = {
//     nome : 'Giovanni',
//     cognome : 'Cambiaso',
//     annoDiNascita : 1997,
//     sesso : 'M',
//     cittaDiNascita : 'Genova',
// }


// const studente6 = {
//     nome : 'Mattia',
//     cognome : 'Dalla Mutta',
//     annoDiNascita : 1993,
//     sesso : 'M',
//     cittaDiNascita : 'Genova',
// }


// const studente7 = {
//     nome : 'Leslie',
//     cognome : 'Fritas',
//     annoDiNascita : 1995,
//     sesso : 'F',
//     cittaDiNascita : 'Lima',
// }

// const studente8 = {
//     nome : 'Cristopher',
//     cognome : 'Limone',
//     annoDiNascita : 1994,
//     sesso : 'M',
//     cittaDiNascita : 'Genova',
// }

// const studente9 = {
//     nome : 'Jessica',
//     cognome : 'Vitanza',
//     annoDiNascita : 1995,
//     sesso : 'F',
//     cittaDiNascita : 'Palermo',
// }

// const studente10 = {
//     nome : 'Mirco',
//     cognome : 'Faro',
//     annoDiNascita : 1993,
//     sesso : 'M',
//     cittaDiNascita : 'Santa Margherita',
// }

// const arrayStudenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10];

// console.log(arrayStudenti);

// function filterMF(array, sesso = 'M') {
//     const newArray = [];
//     if (sesso === 'M') {
//         for (let i = 0; i < array.length; i++) {
//             const studente = array[i];
//             if (studente.sesso === 'M') {
//                 newArray.push(studente)
//             }
//         }
//     }
//     else {
//         for (let i = 0; i < array.length; i++) {
//             const studente = array[i];
//             if (studente.sesso === 'F') {
//                 newArray.push(studente)  
//             }
//         }
//     }
//     return newArray
// } 

// console.log(filterMF(arrayStudenti, 'F'))

//___________________________________________________________________________________________________-

const studente1 = {
    nome : 'Artiom',
    cognome : 'Sangiorgio',
    annoDiNascita : 1998,
    sesso : 'M',
    cittaDiNascita : 'San Pietroburgo',
}

const studente2 = {
    nome : 'Paolo',
    cognome : 'Foppiano',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente3 = {
    nome : 'Cinzia',
    cognome : 'Ariotti',
    annoDiNascita : 1996,
    sesso : 'F',
    cittaDiNascita : 'Genova',
}


const studente4 = {
    nome : 'Polina',
    cognome : 'Borect',
    annoDiNascita : 1994,
    sesso : 'F',
    cittaDiNascita : 'Chelyabinsk',
}


const studente5 = {
    nome : 'Giovanni',
    cognome : 'Cambiaso',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente6 = {
    nome : 'Mattia',
    cognome : 'Dalla Mutta',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente7 = {
    nome : 'Leslie',
    cognome : 'Fritas',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Lima',
}

const studente8 = {
    nome : 'Cristopher',
    cognome : 'Limone',
    annoDiNascita : 1994,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente9 = {
    nome : 'Jessica',
    cognome : 'Vitanza',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Palermo',
}

const studente10 = {
    nome : 'Mirco',
    cognome : 'Faro',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Santa Margherita',
}

const studenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10];

function compareStudentsByCognome(student1, student2) {
    return student1.cognome.localeCompare(student2.cognome);  
}

studenti.sort(compareStudentsByCognome);
console.log(studenti)

function compareStudentsByAge(student1, student2) {
    return student1.annoDiNascita - student2.annoDiNascita
}


studenti.sort(compareStudentsByAge)
console.log(JSON.stringify(studenti))


function compareStudentsbyAgeAndSurname(student1, student2) {
    const ordine = student1.annoDiNascita - student2.annoDiNascita;
    if (ordine === 0) {
        return student1.cognome.localeCompare(student2.cognome);
    } else{
        return ordine
    }
}

studenti.sort(compareStudentsbyAgeAndSurname)
console.log(studenti)