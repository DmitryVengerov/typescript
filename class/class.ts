class Stark {
  name: string = "Brandon";
  static castle: string = "Winterfell";
  saying: string;

  constructor() {
    this.saying = "Winterfell"
  }

  hello(person: string) {
    console.log("Hello, " + person);
  }
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  dance() {
    console.log(this.name + " is dancing");
  }
}

class AwesomePerson extends Person {
  dance(){
    console.log("So Awecome!");
  }
}

var robb = new AwesomePerson();
robb.dance();
var bran = new Person('Robert');
bran.dance();
// var ned = new Stark();
// ned.saying = "winter is comming";
// ned.hello('Robert')
// console.log(Stark.castle)