function arrayManipulator(arr, arrCommands) {

    for (const el of arrCommands) {
        let commands = el.split(' ');
        let command = commands[0];


        let index;
        let element;
        switch (command) {
            case 'add':
                index = Number(commands[1]);
                element = Number(commands[2]);
                arr.splice(index, 0, element);
                break;
            case 'addMany':
                index = Number(commands[1]);
                commands.splice(0, 2);
                let numToAdd = commands.map(Number);
                arr.splice(index, 0, ...numToAdd);
                break;
            case 'contains':
                element = Number(commands[1]);
                let indexOfElement = arr.indexOf(element);
                console.log(indexOfElement);
                break;
            case 'remove':
                element = Number(commands[1]);
                arr.splice(element, 1);
                break;
            case 'shift':
                element = Number(commands[1]);
                for (let i = 0; i < element; i++) {
                    arr.push(arr.shift())
                }
                break;
            case 'sumPairs':
                let newArr = [];
                if (arr.length % 2 !== 0) {
                    arr.push(0)
                }
                for (let i = 0; i < arr.length; i += 2) {
                    let sum = arr[i] + arr[i + 1];
                    newArr.push(sum)
                }
                arr = newArr.slice(0);
                break;
            case 'print':
                console.log(` [ ${arr.join(', ')} ]`)
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)