/*********************************
 * Functions-Vertiefung-Level-1_1
 ********************************/

// function intro1() {

//     console.log("Hello Function");

// }

// intro1();

// // const arrow = () => console.log("Hello Function");
// const arrow = () => {
//     console.log("Hello Function");
// }

// arrow();

/*********************************
 * Functions-Vertiefung-Level-1_2
 ********************************/

// const greeting = () => {

//     const hello = document.body.querySelector("p:nth-of-type(1)");
//     hello.textContent = "Hallo";

// }

// greeting();

// const sum = (zahl1, zahl2) => {

//     const zahl = document.body.querySelector("p:nth-of-type(2)");
//     let ergebnis = zahl1 + zahl2;

//     zahl.textContent = ergebnis;
    
// }


// sum(2, 3);

// const multi = (zahl1, zahl2) => {

//     const zahl = document.body.querySelector("p:nth-of-type(3)");
//     let ergebnis = zahl1 * zahl2;

//     zahl.textContent = ergebnis;

// }


// multi(2, 3);

// const dataTyp = (param) => {

//     console.log(typeof param);

// }

// let i = true;
// let j = "hi";
// let l = {
//     name: "John"
// }
// let a = [0,1];

// dataTyp(i);
// dataTyp(j);
// dataTyp(l);
// dataTyp(a);


/*********************************
 * Functions-Vertiefung-Level-1_4
 ********************************/

const held = (heroName, heroPower, heroEnemy) => {

    // let name = "Mein:e Lieblingsheld:in ist: xyz";
    // let power = "Er/sie hat die Fähigkeit: xyz";
    // let enemy = "Sein/ihr größte/r Gegner:in ist: xyz.";

    // name.replace("xyz", heroName);
    // power.replace("xyz", heroPower);
    // enemy.replace("xyz", heroEnemy);

    // console.log(name.replace("xyz", heroName) + " " + power.replace("xyz", heroPower) + " " + enemy.replace("xyz", heroEnemy));

    let name = `Mein:e Lieblingsheld:in ist: ${heroName}`;
    let power = `Er/sie hat die Fähigkeit: ${heroPower}`;
    let enemy = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}.`;

    console.log(name + " " + power + " " + enemy);

}

held("Suat", "Fliegen", "Kekse");