function distinct(arr) {
    let newArr = [];
    let arrLenght = arr.length;
    for (let i = 0; i < arrLenght; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr.join(' '))
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])