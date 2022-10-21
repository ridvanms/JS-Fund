function byTwoCriterias(arr) {
    let sortedArray = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedArray.join('\n'))
}
byTwoCriterias(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
)