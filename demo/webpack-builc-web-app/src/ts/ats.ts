class Person {
  name = "bob"
  sayName() {
    console.log(this.name);
    let a = [1, 2, 3, 4]
    const promise = new Promise((a, b) => {
      console.log(123);
      a('promise');
    });
  }
}