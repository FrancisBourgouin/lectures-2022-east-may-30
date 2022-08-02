// JS Classes

// Generate objects
// Object template
// Blueprints

// Instanciated ? Instance

// Potatoes

class Potato {
  constructor(name) {
    this.name = name;
    this.bob = "bob";
  }

  sayHello = function () {
    console.log(`Hi I am ${this.name}`);
  };

  throw = function () {
    console.log("AAAAHHHHHH");
    setTimeout(() => {
      console.log("Thump.");
    }, 1000);
  };
}

class SuperPotato extends Potato {
  constructor(name) {
    super("wiggle wiggle");
    this.realName = name;
  }

  throw = function () {
    console.log("AAAAHHHHHH");
    setTimeout(() => {
      console.log("TUDUDUDU SWOOOSSSSHHH");
    }, 1000);
  };
}

const potato = new SuperPotato("Yukon Gold");
const anotherPotato = new Potato("Russet");

// potato.sayHello();
// anotherPotato.sayHello();

console.log(potato);

// potato.throw();
// potato.sayHello();

// CONTENT -> VIRTUAL DOM COMPARE TO REAL DOM -> REAL DOM GETS SELECTIVELY RERENDED
