function passwordGenerator(arr) {
    let word = arr.pop();
    let textForPasword = arr.join("").split("");

    let textForPaswordLength = textForPasword.length;

    let vowels = ['a', 'e', 'i', 'o', 'u']
    // a, e, i, o, u

    let index = 0
    for (let i = 0; i < textForPaswordLength; i++) {

        let letter = textForPasword[i]

        if (vowels.includes(letter)) {
            textForPasword[i] = word[index].toUpperCase()
            index++
        }
        if (index === word.length) index = 0;
    }
    textForPasword.reverse();

    console.log(`Your generated password is ${textForPasword.join("")}`)
}
passwordGenerator(
    [
        'ilovepizza', 'ihatevegetables',
        'orange'
    ]

);