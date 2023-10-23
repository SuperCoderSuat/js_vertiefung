/****************************
 *  lvl 1_1: Ternary Operator
 ***************************/

// function checkAge() {
//     event.preventDefault();

//     const age = document.body.querySelector("form input:nth-of-type(1)");
//     const output = age.value >= 18 ? "Volljährig" : "Minderjährig";

//     const display = document.body.querySelector("p");
//     display.textContent = output;

// }

/****************************
 *  lvl 1_4: Ternary Operator
 ***************************/

// function checkPassword() {
//     event.preventDefault();

//     const password = document.body.querySelector("form input:nth-of-type(1)");
//     const output = password.value.length >= 8 ? "Welcome to your account" : "This password is short";

//     const display = document.body.querySelector("p");

    // if (output === "Welcome to your account") {
    //     display.style.color = "green";
    // } else {
    //     display.style.color = "red";
    // }

//     switch (output) {
//         case "Welcome to your account":
//             display.style.color = "green";
//             break;
//         default:
//             display.style.color = "red";
//     }

//     display.textContent = output

// }


/****************************
 *  lvl 2_1: Ternary Operator
 ***************************/

function showInput() {
    event.preventDefault();

    const getInput = document.body.querySelector("form input:nth-of-type(1)");
    const showInput = document.body.querySelector("div p:nth-of-type(4)");
    const error = document.body.querySelector("div p:nth-of-type(2)");

    getInput.value.length <= 1 ? error.textContent = "Error" : showInput.textContent = getInput.value;

}

