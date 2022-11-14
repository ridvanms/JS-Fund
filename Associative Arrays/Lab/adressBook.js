function adressBook(arr) {
    let personsAdresses = {};
    arr.forEach(element => {
        let [name, adress] = element.split(':');
        personsAdresses[name] = adress;
    });

    let sorting = [];
    for (const key in personsAdresses) {
        sorting.push({ name: key, adress: personsAdresses[key] })
    }
    sorting.sort((a, b) =>
        a.name.localeCompare(b.name)
    )
    sorting.forEach(el => {
        console.log(`${el.name} -> ${el.adress}`)
    })
}
adressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);