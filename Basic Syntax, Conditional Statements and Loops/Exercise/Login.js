function login(input) {
    // username 
    let username = input[0];

    // making the password
    let password = '';
    for (let i = username.length - 1; i >= 0; i--) {
        password += `${username[i]}`
    }

    // checking for the correct password
    for (let i = 1; i <= 4; i++) {
        if (input[i] == password) {
            console.log(`User ${username} logged in.`)
            break;
        } else if (i == 4) {
            console.log(`User ${username} blocked!`)
            break;
        } else {
            console.log(`Incorrect password. Try again.`)
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);