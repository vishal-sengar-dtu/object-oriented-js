function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, 'has logged in');
}

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, 'has logged out');
}

function Admin(...args) {
  User.apply(this, args);
  this.role = 'Admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  users = users.filter(u => {
    return u.email != user.email;
  })
}

let userOne = new User('ryu@ninja.com', 'Ryu');
let userTwo = new User('yoshi@gmail.com', 'Yoshi');
let admin = new Admin('shaun@ninjas.com', 'Shaun');

let users = [userOne, userTwo, admin]

console.log(admin);