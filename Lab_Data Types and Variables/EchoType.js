function echoType(value) {
    console.log(typeof (value))
    if (value) {
        console.log(value)
    } else {
        console.log('Parameter is not suitable for printing')
    }
}
echoType('Hello! JavaScript')