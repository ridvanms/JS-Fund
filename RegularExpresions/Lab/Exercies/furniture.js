function furniture(arr) {
  let pattern =
    /\>>(?<furnitureName>[A-Z][a-z]+)<<(?<price>\d{3}.\d{2})\!(?<quantity>\d)/gm;

  let totalMoney = 0;

  console.log(`Bought furniture:`);

  let comment = arr.shift();
  while (comment !== "Purchase") {
    let match = pattern.exec(comment);

    if (match) {
      let furniture = match.groups.furnitureName;
      let price = match.groups.price;
      let quantity = match.groups.quantity;

      console.log(furniture);
      totalMoney += price * quantity;
    }

    comment = arr.shift();
  }
  console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
