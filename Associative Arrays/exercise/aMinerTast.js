function aMinerTask(arr) {
  let resources = new Map();
  for (let i = 0; i < arr.length; i += 2) {
    let item = arr[i];
    let amount = Number(arr[i + 1]);

    if (!resources.has(item)) resources.set(item, amount);
    else resources.set(item, resources.get(item) + amount);
  }
  Array.from(resources).forEach((el) => console.log(`${el[0]} -> ${el[1]}`));
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
