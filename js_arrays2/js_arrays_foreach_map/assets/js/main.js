/*************************************
 *      Array-Iteration-Level-1_1
 ************************************/
console.log("%c Array-Iteration-Level-1_1", "color:green");

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

const myDrinks = getraenke.forEach((drink) => {

    // console.log(drink);
    document.write(drink + "<br>")

});

/*************************************
 *      Array-Iteration-Level-1_2
 ************************************/
console.log("%c Array-Iteration-Level-1_2", "color:green");

const newDrinks = getraenke.map((elt) => {

    return elt.toUpperCase();

})

console.log(newDrinks);

/*************************************
 *      Array-Iteration-Level-1_3
 ************************************/
console.log("%c Array-Iteration-Level-1_3", "color:green");

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

// const ergebnis = array.sort((num1, num2) => {
//     if (num1 > num2) {
//         return 1
//     } else {
//         return -1
//     }
// });

const ergebnis = array.sort((num1, num2) => num1 > num2 ?  1 :  -1).map(num => num * 2);

// console.log(ergebnis.map((x) => x * 2));
console.log(ergebnis);

/*************************************
 *      Array-Iteration-Level-1_4
 ************************************/
console.log("%c Array-Iteration-Level-1_4", "color:green");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const umwandeln = fahrenheit.map((elt) => {

    let ergebnis = Math.round(((elt - 32) / 1.8).toFixed(2));
    return ergebnis;

});

console.log(umwandeln);

/*************************************
 *      Array-Iteration-Level-1_5
 ************************************/
console.log("%c Array-Iteration-Level-1_5", "color:green");

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

// const check = checkNumber.map((elt) => {
//     if (elt % 3) {
//         return elt;
//     } else {
//         return elt += 100;
//     }
// });

const check = checkNumber.map((elt) => elt % 3 ? elt : elt += 100);

console.log(check);

/*************************************
 *      Array-Iteration-Level-1_5
 ************************************/

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

// const myAlbum = album.map((elt) => elt.includes(".") ? elt.split(".").splice(0, 1) : elt = "invalid");
// console.log(myAlbum);

const myAlbum = album.map((elt) => {

    if (elt.includes(".")) {

    let replace1 = elt.replace(".jpg", "");
    let replace2 = replace1.replace(".GIF", "")

    return replace2;

    } else {

        return elt = "invalid";

    }

});

console.log(myAlbum);