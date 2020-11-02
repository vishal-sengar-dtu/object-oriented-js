function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, 'has logged in');
  }
  this.logout = function () {
    console.log(this.email, 'has logged out');
  }
}

let userOne = new User('ryu@ninja.com', 'Ryu');
let userTwo = new User('yoshi@gmail.com', 'Yoshi');
