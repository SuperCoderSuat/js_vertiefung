/************************
 * Conditionals-Level-2_7
 ***********************/

const listElement = document.querySelector("#mylist");
const boxElement = document.querySelector(".boxMasse table tr td:nth-of-type(1)");
const masseElement = document.querySelector("#masse");

function showtxt() {
    event.preventDefault();

    let myList = Number(listElement.value);
    let boxMasse = boxElement;
    let masse = masseElement;

    switch (myList) {
        case 0:
        boxMasse.innerHTML = `<b>Brief und Postkarte</b> <br>`;
        masse.textContent = `
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`;
            break;
        case 1:
            boxMasse.innerHTML = `<b>DHL Paket 2 kg</b> <br>`;
            masse.textContent = `bis 60 x 30 x 15 cm`;
                break;
        case 2:
            boxMasse.innerHTML = `<b>DHL Paket 5 kg</b> <br>`;
            masse.textContent = `bis 120 x 60 x 60 cm`;
                break;
        case 3:
            boxMasse.innerHTML = `<b>DHL Paket 10 kg</b> <br>`;
            masse.textContent = ` bis 120 x 60 x 60 cm`;
                break;
        default:
            boxMasse.innerHTML = `<b>Extra große Größe</b>`;
                break;
    }
}