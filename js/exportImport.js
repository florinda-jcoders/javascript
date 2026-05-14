// export function add(a, b) {
//   return a + b;
// }

// export function multiply(a, b) {
//   return a * b;
// }

// export function subtract(a, b) {
//   return a - b;
// }

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Alban";
  }
}

const users = [new User(1, "Alban"), new User(2, "Ardi")];

function getUserId(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUserId(id);
  let name = "Guest";
  if (user != null && user.name != null) {
    name = user.name;
    console.log("Hello", name);
  }

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("You have access!");
  } else {
    console.log("You don't have access!");
  }
}


printUser(1)