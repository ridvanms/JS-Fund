function replaceRepeatingChars(input) {


    let lengthOFInput = input.length;

    let result = input[0];
    for (let i = 1; i < lengthOFInput; i++) {
        if (input[i] === input[i - 1]) {
            continue;
        }
        result += input[i]

    }
    console.log(result)

};
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');