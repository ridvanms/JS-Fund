function oddOccurences(arr) {
    let countsOfElements = new Map();
    let elementsToLowerCase = []
    arr.split(' ').forEach(el => elementsToLowerCase.push(el.toLowerCase()))

    elementsToLowerCase.map(el => {
        let counter = 1;
        if (countsOfElements.has(el)) counter += countsOfElements.get(el);
        countsOfElements.set(el, counter);
    })

    let result = ''
    Array.from(countsOfElements).map(el => {
        if (el[1] % 2 !== 0) result += el[0] + ' ';
    })
    console.log(result)
}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food'

)