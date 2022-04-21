
   
//scrivere un ciclo for che scriva a console i numeri da 10 a 50

for(let i = 10; i <= 50; i++){
    console.log(i);
}

// let counter = 10;
// while(counter <= 50){
//     console.log(counter)
//     counter++;
// }

// let counter = 10;
// do{
//     console.log(counter);
//     counter++;
// }
// while(counter <=50 );




//scrivere un ciclo for che scriva a console i numeri pari da 8 a 128

for(let i = 8; i <= 128; i += 2){
    console.log(i);
}

// let counter = 8;
// while(counter <=128){
//     console.log(counter);
//     counter +=2;
// }

// let counter = 8;
// do{
//     console.log(counter);
//     counter += 2;
// }
// while(counter <= 128);




//scrivere un ciclo for che scriva a console i numeri da 100 a 0

for(i = 100; i >= 0; i--){
    console.log(i);
}

// let counter = 100;
// while(counter >= 0){
//     console.log(counter);
//     counter--;
// }

// let counter = 100;
// do{
//     console.log(counter);
//     counter--
// }
// while(counter >= 0);




//scrivere un ciclo for che sommi i numeri da 0 a 100

// let somma = 0;
// for(i = 1; i <= 100; i++){
//     somma += i;
// }
// console.log(somma);

// let somma = 0;
// let counter = 1;
// while(counter <= 100){
//     somma += counter;
//     counter++;
// }
// console.log(somma);

let somma = 0;
let counter = 1;
do{
    somma += counter;
    counter ++;
}
while(counter <= 100);
console.log(somma);



//scivere un ciclo while che si interrompa quando l'utente scrive 'esci'nella finestra di dialogo

let check = true;
while(check){
    const user_input = prompt('Scrivi "esci" per uscire dal loop');
    if(user_input === 'esci') check = false;
}