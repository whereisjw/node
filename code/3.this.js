function hello(num) {
  this.num = num;
  console.log(num);
  /*   console.log(this); */ //global
}
hello(100);
console.log(num);
class Test {
  constructor(name) {
    this.name = name;
    console.log(this); //Test
  }
}

const t = new Test("hong");
