class User {
  constructor(email,name) {
    this.email = email;
    this.name = name;
  }
}

let userOne = new User('ryu@ninja.com', 'Ryu');
let userTwo = new User('yoshi@gmail.com', 'Yoshi');

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method