function encrypting(arr) {
    let arrLength = Number(arr.shift())

    let pattern = /^(.+)\>(?<numbers>[0-9]{3})\|(?<lowerLetters>[a-z]{3})\|(?<upperLetters>[A-Z]{3})\|(?<symbols>[^<>]{3})\<(\1)$/mg

    for (let i = 0; i < arrLength; i++) {

        let line = arr[i]

        let match = line.match(pattern);

        if (!match) {
            console.log(`Try another password!`)

        } else {

            match = pattern.exec(line)

            let numbers = match.groups.numbers;
            let lowLetters = match.groups.lowerLetters;
            let upperLetters = match.groups.upperLetters;
            let symbols = match.groups.symbols;

            let result = `${numbers}${lowLetters}${upperLetters}${symbols}`
            console.log(`Password: ${result}`)
        }
    }
}

encrypting(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"])

console.log(" ")

encrypting(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])