/************************
 * Conditionals-Level-2_5
 ***********************/

function check() {
    event.preventDefault();

    const bundesland = document.body.querySelector("div input:nth-of-type(1)");
    // console.log(bundesland.value);

    switch (bundesland.value) {
        case "Baden-Württemberg":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
        document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "Saarland":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thüringen":
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
            document.body.querySelector("#bundeslandInfoErgebnis").textContent = "Ein solches Bundesland gibt es in Deutschland nicht.";
    }

}