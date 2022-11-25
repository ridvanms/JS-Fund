function matchFullName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let resultInArr = text.match(pattern)

    console.log(resultInArr.join(', '))
}
matchFullName("ivan ivanov,Test Tsenov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov"
);