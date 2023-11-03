x/*********************************
 *      Array-Sort-Level-1_1
 ********************************/
console.log("%c Array-Sort-Level-1_1", "color:green");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung = languages.sort()
console.log(sortierung);

/*********************************
 *      Array-Sort-Level-1_2
 ********************************/
console.log("%c Array-Sort-Level-1_2", "color:green");

const reverse = languages.sort().reverse();
console.log(reverse);

/*********************************
 *      Array-Sort-Level-2_1
 ********************************/
console.log("%c Array-Sort-Level-2_1", "color:green");

function umdrehen(drehMich) {
    return drehMich.sort();
}

// function reverseString(str) {

//     let splitString = str.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");

//     return joinArray;
// }

const reverseString = (str) => {

    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    console.log(joinArray);

    return joinArray;
}

reverseString("Sergio");
reverseString("Hannah");
reverseString("Regallager");
reverseString("Reliefpfeiler");
reverseString("Rentner");

/*********************************
 *      Array-Sort-Level-2_2
 ********************************/
console.log("%c Array-Sort-Level-2_2", "color:green");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

// const sortNum = numArray2.sort(function(a, b) {return a - b});

const sortNum = numArray2.sort((a, b) => a - b);

console.log(sortNum);

// console.log(numArray2.sort((a, b) => a - b));

