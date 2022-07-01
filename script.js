const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// 1 - Reverse

const reverseData = data.reverse();

console.log("reverseData => ", reverseData);

// 2 - Find

const highSallary = 5000;

const highestSallary = data.find((user) => user.sallary > highSallary);

console.log("highestSallary => ", highestSallary);

// 3 - findIndex

const lowestSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000);

data[lowestSallary].sallary += 200;

console.log("lowestSallary => ", lowestSallary);

// 4 - Includes

const numbers = [1, 2, 3, 4, 5];

const hasFour = numbers.includes(4);

console.log("hasFour => ", hasFour);

// 5 - Map

const newData = data.map((user) => (user.newsLetter = true));

console.log("newData => ", newData);

// 6 - Filter

const drivers = data.filter((user) => user.driverLicense);

console.log("drivers 9=> ", drivers);

// 7 - Reduce

const totalSallaries = data.reduce((prev, next) => (prev += next.sallary), 0);

console.log("totalSallaries => ", totalSallaries);

// 8 - forEach

const showUserNames = (users) => {
  users.forEach((user) => {
    console.log("user => ", `Hello! ${user.name}`);
  });
};

showUserNames(data);

// 9 - Some

const someoneWithNewsLetter = data.some((user) => user.newsLetter);

console.log("someoneWithNewsLetter => ", someoneWithNewsLetter);

// 10 - Every

const everyUserHasName = data.every((user) => user.name);

console.log("everyUserHasName => ", everyUserHasName);
