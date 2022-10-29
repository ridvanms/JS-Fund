function cats(arr) {
  class Cat {
    constructor(name, age) {
      (this.name = name), (this.age = age);
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  for (const element of arr) {
    let [catName, age] = element.split(" ");
    let cat = new Cat(catName, age);
    cat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
