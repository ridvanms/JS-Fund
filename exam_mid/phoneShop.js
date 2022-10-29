function phoneShop(arr) {
  let listOfPhones = arr.shift().split(", ");

  let elements = arr.shift();
  while (elements !== "End") {
    let [command, phone] = elements.split(" - ");

    switch (command) {
      case "Add":
        if (!listOfPhones.includes(phone)) {
          listOfPhones.push(phone);
        }
        break;
      case "Remove":
        if (listOfPhones.includes(phone)) {
          let index = listOfPhones.indexOf(phone);
          listOfPhones.splice(index, 1);
        }
        break;
      case "Bonus phone":
        let [oldPhone, newPhone] = phone.split(":");
        if (listOfPhones.includes(oldPhone)) {
          let index = listOfPhones.indexOf(oldPhone);
          listOfPhones.splice(index + 1, 0, newPhone);
        }
        break;
      case "Last":
        if (listOfPhones.includes(phone)) {
          let PhonePosition = listOfPhones.indexOf(phone);
          listOfPhones.splice(PhonePosition, 1);
          listOfPhones.push(phone);
        }
    }

    elements = arr.shift();
  }
  console.log(listOfPhones.join(", "));
}
phoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);
