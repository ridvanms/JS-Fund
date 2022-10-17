function summingFandLast(arr) {

    let lastElement = +arr[arr.length - 1]
    let firstElement = +arr[0]

    let sum = firstElement + lastElement;
    console.log(sum);

}
summingFandLast(['20', '30', '40'])