function meetings(arr) {

    let scheduleObj = {};
    arr.forEach(el => {
        let [day, name] = el.split(' ');
        if (scheduleObj.hasOwnProperty(day)) console.log(`Conflict on ${day}!`)
        else {
            console.log(`Scheduled for ${day}`)
            scheduleObj[day] = name
        }
    });
    for (const key in scheduleObj) {
        console.log(`${key} -> ${scheduleObj[key]}`)
    }
}
meetings(
    ['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim']
)

// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim
