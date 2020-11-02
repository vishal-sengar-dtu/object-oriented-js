class User {
  constructor(email,name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, 'just logged in');
    return this;
  }
  logout() {
    console.log(this.email, 'just logged out');
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this;
  }
}

let userOne = new User('ryu@ninja.com', 'Ryu');
let userTwo = new User('yoshi@gmail.com', 'Yoshi');

userTwo.login().updateScore().updateScore().logout();

