function theImitationGame(arr) {
    let message = arr.shift();

    let currentLine = arr.shift();
    while (currentLine != 'Decode') {
        let tokens = currentLine.split('|');
        switch (tokens[0]) {
            case "ChangeAll":
                let substring = tokens[1];
                let replacement = tokens[2];
                //replacing the substring with replacement element in the message
                while (message.includes(substring)) message = message.replace(substring, replacement)

                break;
            case "Insert":
                let index = +tokens[1];
                let value = tokens[2];
                // inserting in message at specific index a value
                message = message.substring(0, index) + value + (message.substring(index))

                break;
            case "Move":
                let numberOfLetters = +tokens[1]
                //defining elements to take and put them in the end
                let charsToMove = message.substring(0, numberOfLetters);
                message = message.substring(numberOfLetters) + charsToMove
                break;
        }
        currentLine = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`)
}
theImitationGame(["zzHe",
    "ChangeAll|z|l",
    "Insert|2|o",
    "Move|3",
    "Decode"])