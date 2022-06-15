'use strict';

/*
///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function() {
  //    console.log(2037 - this.birthYear)
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 7, 8, 1, 4, 7, 4, 5]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// ES6 Classes
// Class expression
// const PersonCl = class {}
// Class declaration
class PersonCl {
   constructor(fullName, birthYear) {
     this.fullName = fullName;
     this.birthYear = birthYear;
   }
   // Instance methods
   // Methods will be added to .prototype property
   calcAge() {
     console.log(2037 - this.birthYear);
   }
   greet() {
     console.log(`Hey ${this.fullName}`);
   }
   get age() {
     return 2037 - this.birthYear;
   }
   // Set a property that already exists
   set fullName(name) {
     if (name.includes(' ')) this._fullName = name;
     else alert(`${name} is not a full name!`);
   }
   get fullName() {
     return this._fullName;
   }
   // Static method
   static hey() {
     console.log('Hey there 👋');
     console.log(this);
   }
 }
 const jessica = new PersonCl('Jessica Davis', 1996);
 console.log(jessica);
 jessica.calcAge();
 console.log(jessica.age);

 console.log(jessica.__proto__ === PersonCl.prototype);

 // PersonCl.prototype.greet = function () {
 //   console.log(`Hey ${this.firstName}`);
 // };
 jessica.greet();

 // 1. Classes are NOT hoisted
 // 2. Classes are first-class citizens
 // 3. Classes are executed in strict mode

 const walter = new PersonCl('Walter White', 1965);

 // PersonCl.hey();

 ///////////////////////////////////////
// Setters and Getters
const account = {
   owner: 'Jonas',
   movements: [200, 530, 1450, 120, 300],
   get latest() {
      return this.movements.slice(-1).pop()
   },
   set latest(mov) {
      this.movements.push(mov)
   }
}
console.log(account.latest)
account.latest = 50
console.log(account.movements)

///////////////////////////////////////
// Object.create
const PersonProto = {
   calcAge() {
      console.log(2037 - this.birthYear);
   },
   init(firstName, birthYear) {
      this.firstName = firstName
      this.birthYear = birthYear
   }
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = 'Steven'
steven.birthYear = 1990
steven.calcAge()

console.log(steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear)
  this.course = course
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype)

// Student.prototype = Person.prototype

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'CSE')
mike.introduce()
mike.calcAge()

console.log(mike.__proto__)
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student)
console.log(mike instanceof Person)
console.log(mike instanceof Object)

Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needa to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } year old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'CSE');
martha.introduce();
martha.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
     console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
     this.firstName = firstName
     this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto)

StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course
}

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto)
jay.init("Jay", 2010, 'CSE')
jay.introduce()
jay.calcAge()

///////////////////////////////////////
// Another Class Example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    this.pin = pin
    this.movements = []
    this.locale = navigator.language
    console.log(`Thanks for opening an account, ${owner}`)
  }
  // Public Interface
  deposit(val) {
    this.movements.push(val)
  }
  withdraw(val) {
    this.deposit(-val)
  }
  approveLoan(val) {
    return true
  }
  requestLoan(val) {
    if(this.approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, [])
console.log(acc1)

// acc1.movements.push(250)
// acc1.movements.push(-50)

acc1.deposit(250)
acc1.withdraw(40)
acc1.requestLoan(1000)

console.log(acc1)
console.log(acc1.pin)
*/

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    this._pin = pin
    // Protected Property
    this._movements = []
    this.locale = navigator.language
    console.log(`Thanks for opening an account, ${owner}`)
  }
  // Public Interface
  getMovements() {
    return this._movements
  }
  deposit(val) {
    this._movements.push(val)
  }
  withdraw(val) {
    this.deposit(-val)
  }
  _approveLoan(_val) {
    return true
  }
  requestLoan(val) {
    if(this._approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, [])

acc1.deposit(250)
acc1.withdraw(40)
acc1.requestLoan(1000)
acc1.approveLoan(1000)
console.log(acc1.getMovements())

console.log(acc1)
console.log(acc1.pin)


///////////////////////////////////////
// Encapsulation: Private Class Fields and Methods
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)