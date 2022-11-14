function schoolGrades(arr) {
    let objOfStudentsGrades = {}
    arr.forEach(element => {
        let [name, ...grades] = element.split(' ');
        if (objOfStudentsGrades.hasOwnProperty(name))
            grades.forEach(grade =>
                objOfStudentsGrades[name].push(grade)
            )
        else objOfStudentsGrades[name] = grades;
    });

    let sorted = Object.keys(objOfStudentsGrades).sort((a, b) => a.localeCompare(b));
    sorted.forEach(key => {
        let sum = 0;
        objOfStudentsGrades[key].forEach(grade => {
            sum += +grade;
        })
        let averageOfGrades = sum / objOfStudentsGrades[key].length;
        let result = `${key}: ${averageOfGrades.toFixed(2)}`
        console.log(result)
    })
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);