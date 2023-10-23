/**********************************
 * Übung lev1_10: logical operators
 *********************************/
console.log("%c Übung lev1_10: logical operators", "color: green");

// let x = 10;
// let y = 15;
// let z = 20;

// const a = true;
// const b = false;

// if (x > z && x > y) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (x != y) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (z < y || z > x) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (x === z || x !== y) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (x >= 10 && y <= 10) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (x * z < 100 || x * z > 100) {
//     console.log(a);
// } else {
//     console.log(b);
// }


/**********************************
 * JS Vertiefung Functions lvl 1
 *********************************/
console.log("%c JS Vertiefung Functions lvl 1", "color: green");

// function returnOne() {
//     return 1;
// }

// let x = 1;
// let y = returnOne();

// if (x === y) {

//     console.log("Wird das gedruckt?");

// }


/**********************************
 * Functions-Vertiefung-Level-1_7
 *********************************/
console.log("%c Functions-Vertiefung-Level-1_7", "color: green");

// function multi(factor) {
//     return factor * 2;
// }
// console.log(multi(8));

// function getAge(yearBorn) {

//     return 2023 - yearBorn;

// }

// console.log(getAge(1989));


// function vergleichAlter(pers1, pers2) {

//     let alterDiff = Math.abs(pers1 - pers2);

//     return alterDiff;

// }

// console.log(vergleichAlter(34, 36));


/**********************************
 * Conditionals-Level-1_1
 *********************************/
console.log("%c Conditionals-Level-1_1", "color: green");

// let a = true;
// let b = false;

// let alter = document.body.querySelector("form input:nth-of-type(1)");
// let info = document.body.querySelector("p")

// function adult() {

//     if (alter.value >= 18) {

//         console.log(a);
//         info.textContent = "Volljährig";

//     } else {
        
//         console.log(b);
//         info.textContent = "Minderjährig";

//     }

// }


/**********************************
 * Conditionals-Level-1_2
 *********************************/
console.log("%c Conditionals-Level-1_2", "color: green");

// function weather() {

//     let score = document.body.querySelector("form input:nth-of-type(1)")


//     if (score.value >= 8 && score.value <=10) {

//         console.log("super");

//     } else if (score.value >= 6 && score.value <= 7) {

//         console.log("gut");

//     } else if (score.value >= 3 && score.value <= 5) {

//         console.log("okay");

//     } else if (score.value >= 0 && score.value <= 2) {

//         console.log("schlecht");

//     } else {
//         console.log("Deinen Eingabe liegt nicht im Bereich 0 - 10");
//     }

// }


/**********************************
 * Conditionals-Level-1_3
 *********************************/
console.log("%c Conditionals-Level-1_3", "color: green");

// let a = true;
// let b = false;

// let alter = document.body.querySelector("form input:nth-of-type(1)");
// let info = document.body.querySelector("p")

// function adult() {
//     event.preventDefault();

//     if (document.body.querySelector("form input:nth-of-type(1)").value >= 18) {

//         console.log(a);
//         info.textContent = "Ja, Du kannst Shisha rauchen";

//     } else {
        
//         console.log(b);
//         info.textContent = "Du darfst noch nicht Shisha rauchen";

//     }

// }


/**********************************
 * Conditionals-Level-2_1
 *********************************/
console.log("%c Conditionals-Level-2_1", "color: green");

// let john = (22 * 5) + 170;
// console.log("John Score: " + john);

// let meike = (34 * 5) + 168;
// console.log("Meike Score: " + meike);

// if (john > meike) {

//     console.log("John gewinnt das Spile mit " + john + " Punkten!");

// } else if (john < meike) {

//     console.log("Meike gewinnt das Spile mit " + meike + " Punkten!");

// } else if (john === meike) {

//     console.log("Es ist unentschieden! Es steht " + meike + " zu " + john + " Punkten!");

// } else {

//     console.log("Das Spiel konnte nicht beendet werden");

// }


/**********************************
 * Conditionals-Level-2_3
 *********************************/
console.log("%c Conditionals-Level-2_3", "color: green");

// function diff(number) {

//     let number2 = 27
//     let differenz = Math.abs(number - number2)

//     if (number > 27) {

//         console.log(differenz * 2);

//     } else {
//         console.log("Zahl ist nicht größer als 27");
//     }

// }

// diff(20);
// diff(35);
// diff(74);
// diff(123);


/**********************************
 * Conditionals-Level-2_4
 *********************************/
console.log("%c Conditionals-Level-2_4", "color: green");