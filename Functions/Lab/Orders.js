function orders(product, quantity) {
  const pricePerCoffee = 1.5;
  const pricePerWater = 1.0;
  const pricePerCoke = 1.4;
  const pricePerSnacks = 2.0;

  let price = 0;
  switch (product) {
    case "coffee":
      price = pricePerCoffee * quantity;
      break;
    case "water":
      price = pricePerWater * quantity;
      break;
    case "coke":
      price = pricePerCoke * quantity;
      break;
    case "snacks":
      price = pricePerSnacks * quantity;
      break;
  }

  console.log(price.toFixed(2));
}
orders("coffee", 2);
