function matchPhoneNumbers(arr) {
    let text = arr.shift();
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/gm

    let result = text.match(pattern)

    console.log(result.join(', '))
}
matchPhoneNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
);