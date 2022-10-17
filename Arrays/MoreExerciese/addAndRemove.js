function addingAndRemoving(input) {

    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        let action = input[i];
        if (action === 'remove') {
            newArray.pop();
        } else if (action === 'add') {
            newArray.push(i + 1);
        }
    }
    if (newArray.length === 0) {
        console.log('Empty')
    } else {
        console.log(newArray.join(' '))
    }
}
addingAndRemoving(['add', 'add', 'remove', 'add', 'add'])