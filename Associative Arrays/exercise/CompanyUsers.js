function companyUsers(arr) {
  let company = {};
  arr.forEach((el) => {
    let [companyName, id] = el.split(" -> ");
    if (!company.hasOwnProperty(companyName)) company[companyName] = [];

    if (!company[companyName].includes(id)) company[companyName].push(id);
  });
  let names = [];
  for (const key in company) {
    names.push(key);
  }
  names
    .sort((a, b) => a.localeCompare(b))
    .forEach((name) => {
      console.log(name);
      company[name].forEach((value) => console.log(`-- ${value}`));
    });
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
