function reading(bookPages, pagesPerHour, numberOfDays) {
  let totalTime = bookPages / pagesPerHour;
  let perDay = totalTime / numberOfDays;
  console.log(perDay);
}
reading(432, 15, 4);
