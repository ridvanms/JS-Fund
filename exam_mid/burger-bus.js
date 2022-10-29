function bus(arr) {
  let visitedCityes = Number(arr.shift());

  let city = "";
  let income = 0;
  let expenses = 0;

  let profit = 0;
  let totalProfit = 0;

  let visitedCounter = 0;
  for (let i = 0; i < visitedCityes; i++) {
    visitedCounter++;
    city = arr.shift();
    income = Number(arr.shift());
    expenses = Number(arr.shift());

    if (visitedCounter % 5 === 0) {
      income *= 0.9;
    }
    if (visitedCounter % 3 === 0 && visitedCounter % 5 !== 0) {
      expenses *= 1.5;
    }

    profit = income - expenses;
    totalProfit += profit;
    console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
bus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]);
