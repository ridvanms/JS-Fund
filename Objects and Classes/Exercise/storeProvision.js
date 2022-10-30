function storeProvision(stock, orderedProducts) {
  let product = stock.filter((el, index) => index % 2 === 0);
  let quantity = stock.filter((el, index) => index % 2 !== 0).map(Number);
  let localStockObject = {
    product: product,
    quantity: quantity,
  };
  for (let i = 0; i < orderedProducts.length; i += 2) {
    if (!localStockObject.product.includes(orderedProducts[i])) {
      localStockObject.product.push(orderedProducts[i]);
    } else {
      let index = localStockObject.product.indexOf(orderedProducts[i]);
      localStockObject.quantity[index] += Number(orderedProducts[i + 1]);
    }
    if (localStockObject.product.length !== localStockObject.quantity.length) {
      localStockObject.quantity.push(Number(orderedProducts[i + 1]));
    }
  }
  let productLength = localStockObject.product.length;
  let result = "";
  for (let i = 0; i < productLength; i++) {
    result += `${localStockObject.product[i]} -> ${localStockObject.quantity[i]}\n`;
  }
  console.log(result);
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
