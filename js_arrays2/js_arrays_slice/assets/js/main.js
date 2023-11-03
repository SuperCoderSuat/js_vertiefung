/*****************************************************
 *      Codeflow_uebung_lvl_1_8: Arrays slice()
 ****************************************************/
console.log("%c Codeflow_uebung_lvl_1_8: Arrays slice()", "color:green");

const reiseziele = ["Bahamas", "Turkey", "Sweden", "China", "Nothkorea"];
const neuesZiel = reiseziele.slice(1, 3);

// console.log(reiseziele);
// console.log(reiseziele.slice(1, 3));
console.log(neuesZiel);

/*************************************************************
 *      Codeflow_uebung_lvl_1_10: Arrays/String split()
 ************************************************************/
console.log("%c Codeflow_uebung_lvl_1_10: Arrays/String split()", "color:green");

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

const dot = text.split(".");
console.log(dot);

const space = text.split(" ");
console.log(space);

const firstletter = text.split("");
console.log(firstletter);