function employees(arr) {
  class Employ {
    constructor(name) {
      this.name = name;
    }
    findLength() {
      return this.name.length;
    }
    printer() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.findLength()}`
      );
    }
  }

  for (const name of arr) {
    let employ = new Employ(name);
    employ.printer(name);
  }
}
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
