class User {
  constructor(email,name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, 'just logged in');
  }
  logout() {
    console.log(this.email, 'just logged out');
  }
}

let userOne = new User('ryu@ninja.com', 'Ryu');
let userTwo = new User('yoshi@gmail.com', 'Yoshi');

userOne.login();
userTwo.logout();
