function stringGame(arr) {

    let mainString = arr.shift();

    let currentLine = arr.shift();
    while (currentLine != 'Done') {
        let tokens = currentLine.split(' ')

        switch (tokens[0]) {
            case 'Change':
                let char = tokens[1];
                let replacement = tokens[2];

                while (mainString.includes(char)) mainString = mainString.replace(char, replacement)

                console.log(mainString)
                break;
            case 'Includes':
                let inculdesSubstring = tokens[1];

                if (mainString.includes(inculdesSubstring)) console.log(`True`);
                else console.log(`False`)

                break;
            case 'End':
                let endSubstring = tokens[1];

                if (mainString.endsWith(endSubstring)) console.log(`True`)
                else console.log(`False`)
                break;
            case 'Uppercase':
                mainString = mainString.toUpperCase();
                console.log(mainString)
                break;
            case 'FindIndex':
                let findChar = tokens[1];

                if (mainString.includes(findChar)) console.log(mainString.indexOf(findChar))

                break;
            case 'Cut':
                let startIndex = +tokens[1];
                let count = +tokens[2]

                let cutOne = mainString.substring(startIndex, startIndex + count)

                console.log(cutOne)
                break;
        }

        currentLine = arr.shift();
    }
}
// stringGame(
//     ["//Th1s 1s my str1ng!//",
//         "Change 1 i",
//         "Includes string",
//         "End my",
//         "Uppercase",
//         "FindIndex I",
//         "Cut 5 5",
//         "Done"])
stringGame(
    ["*S0ftUni is the B3St Plac3**",
        "Change 2 o",
        "Includes best",
        "End is",
        "Uppercase",
        "FindIndex P",
        "Cut 3 7",
        "Done"]
)