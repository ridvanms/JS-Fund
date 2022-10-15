function formatin(number) {
  let grade = +number;

  // returning the gradeAnnouncement
  function gradeAnnouncement(grade) {
    let gAnnouncement = "";
    if (grade < 3) {
      gAnnouncement = "Fail";
    } else if (grade < 3.5) {
      gAnnouncement = "Poor";
    } else if (grade < 4.5) {
      gAnnouncement = "Good";
    } else if (grade < 5.5) {
      gAnnouncement = "Very good";
    } else {
      gAnnouncement = "Excellent";
    }

    return gAnnouncement;
  }
  // printing the result
  let result = `${gradeAnnouncement(grade)} (${
    grade < 3 ? 2 : grade.toFixed(2)
  })`;
  console.log(result);
}
formatin(2.99);
