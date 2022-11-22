function cutAndReverse(input) {
    let halfOfInput = input.length / 2;
    let firstHalf = input.slice(0, halfOfInput)
    let secondHalf = input.slice(halfOfInput)


    let firstSentence = [];
    let secondSentence = [];
    for (let i = 0; i < halfOfInput; i++) {
        secondSentence.push(secondHalf[i]);
        firstSentence.push(firstHalf[i])
    }

    secondSentence = secondSentence.reverse().join("")
    firstSentence = firstSentence.reverse().join("")

    console.log(firstSentence);
    console.log(secondSentence);

};
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'
);