// import calcSum from "./math.js";
import { sum, subtract } from "./math.js";

// ES6
// 1, let, const
// 2, Template String
// 3, Arrow function
// 4, Object, Array destructuring assignment
// 5, Spread Opeator, Rest prameter
// 6, Es6 module
// 7, Es6 classes

// contructor function, object contructor

// 1, let & const

// {
//   let x;
//   x = 20;
// }

// console.log(x);
// var x = 20

// 2, Arrow function

// const sum = (a, b) => {
//   return a + b
// }

const sayHello = (messge) => console.log(messge);
sayHello("Hello World!");

// HOF. Higher order function
const double = [1, 2, 3, 4].map((number) => number * 2);
console.log(double);

// const user = {
//   fullName: "SơnPM",

//   getName: function () {
//     console.log(this);

//     // const getNameArrow = () => {
//     //     console.log(this.fullName);
//     // };

//     // getNameArrow()
//   },

//   // getName: () => {

//   //   console.log(this.fullName);

//   //   return this.fullName;
//   // },
// };

// // user.getName()

// const getName2 = user.getName.bind(user);
// getName2();

// 3, Destructuring Assignment

const numbers = [1, 2, 3, 4];
const [number1, number2, _, number4] = numbers;

// const number1 = numbers[0]
// const number2 = numbers[1]
// const number3 = numbers[2]
// const number4 = numbers[3]

console.log(number1);
console.log(number2);
console.log(number4);

// console.log(numbers[0]);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

const nums = [1, 2];

// swap
// const temp = nums[0]
// nums[0] = nums[1]
// nums[1] = temp

[nums[1], nums[0]] = [1, 2];
console.log(nums);

const user = {
  name: "SonPM",
  age: 20,
  address: "Ha Noi",

  info: {
    phone: 123123,
    mariage: true,
  },
};

// const userName = user.name;
// const age = user.age;
// const address = user.address;

// console.log(userName);
// console.log(age);
// console.log(address);

// nested
// const {
//   info: { mariage },
//   address,
//   age,
//   name,
// } = user;

// console.log(name);
// console.log(age);
// console.log(address);
// console.log(mariage);

// console.log(user.info.phone);
// console.log(user.info.mariage);

// 4, Spead Operator
const numberList1 = [1, 2, 3, 4];
const numberList2 = [...numberList1, 5, 6, 7, 8];

const userInfo = {
  name: "Nguyen Van A",
  age: 30,
  address: "Ha Noi",

  info: {
    phone: 123123,
  },
};

// shallow copy
// const employee = {
//   ...userInfo,
// };

const str = JSON.stringify(userInfo);

const employee = structuredClone(userInfo);

console.log((employee.info.phone = 456456));

console.log(employee);

console.log(userInfo);

// deep copy

// console.log(employee.name = 'SonPM');
// console.log(employee.info.phone = 456456);
// console.log(userInfo);
// console.log(employee);

// console.log(numberList2);
// 5, Rest prameter

function myFunction(...rest) {
  console.log(...rest);
}

myFunction(1, 2, 3, 4);

// console.log(1,2,3,4,3,4,4,4,4,4);

const userInfo2 = {
  name: "Nguyen Van A",
  age: 30,
  password: "sondz1102",
  address: "Ha Noi",
};

// rest: còn lại
// const { password, age, ...finalData } = userInfo2;

// console.log("finalData::", finalData);

// // const finalData = {
// //   name,
// //   age,
// //   address,
// // };

const fullName = "SonPM";
const age = 20;

const finalData3 = {
  fullName,
  age,
};

console.log(finalData3);

const minus = subtract(1, 2);
const total = sum(3, 2);

console.log(minus);
console.log(total);

const firstName = "Phan Minh";
const lastName = "Son";

//Backtick 

const fullName2 = `${firstName ? firstName : "Nguyên Văn"} ${lastName} `; // nội suy

console.log(fullName2);
