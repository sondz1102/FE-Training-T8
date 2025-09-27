// 1, Variables - Biến
// var, let, const

// Declare
// var
var color = "Red";

console.log("Color::", color);
color = "Yellow";
console.log("Color::", color);

var color = "Green";
console.log("Color::", color);

// let
// let age;
// console.log("Age::", age);
// age = 27;
// console.log("Age::", age);
// let age = 30 // lỗi

// const
const PI = 3.14;
console.log("PI::", PI);
// PI = 3.15; // lỗi

// 2, Scope - Phạm vi truy cập

// Global Scope
var globalVariable = "Biến toàn cục";

console.log(globalVariable);

// block
{
  console.log(globalVariable);
}

// function myFunction() {
//   console.log(globalVariable);
// }

for (var i = 0; i < 10; i++) {
  console.log(globalVariable);
}

// myFunction();

// Block scope
// ES6

{
  // var blockVariable = "Biến khai báo trong 1 khối code(block)";
  // let blockVariable = "Biến khai báo trong 1 khối code(block)";
  // console.log(blockVariable);
}

// console.log(blockVariable);

// let blockVariable = "Biến khai báo trong 1 khối code(block)";
// console.log(blockVariable);// lỗi

// Function scope
function myFunction() {
  var innerVariable = "Biến khai báo trong function";

  if (1 === 1) {
    // const a = 10;
    // console.log(a);

    {
      let a = 20;
      // console.log(a);
    }

    // console.log(a);
  }
}

myFunction();

// 3, Hoisting

// console.log(a);
// a = 10;
// console.log(a);
testHoisting();

function testHoisting() {
  if (1 === 1) {
    var fullName = "Nguyễn Văn A";
  }
  console.log(fullName);
}

// Temporal Deadzone
// console.log(fullName);
// let fullName = 'Nguyễn Văn A'

// 4, Data types - Kiểu dữ liệu

// Primitive type(tham trị - nguyên thuỷ)
// 1, Number 2^53 - 1, -2^53 -1
// 2, String
// 3, Boolean
// 4, Null
// 5, Undefined
// 6, Symbol
// 7, BigInt

// 1, number
let age = 20;
let price = 9.99;

let a = 10;
let b = 20;

const sum = a + b;
console.log(typeof sum);

console.log(age);
console.log(price);

console.log("Type of age::", typeof age);
console.log("Type of age::", typeof price);

// 2, string
// camelCase
// snake_case

const firstName = "Nguyễn Văn";
const lastName = "A";


console.log("Type of firstName::", typeof firstName);
console.log("Type of lastName::", typeof firstName);

const fullName = firstName + " " + lastName;

console.log(fullName.toUpperCase());

console.log(fullName);
console.log("Type of fullName::", typeof fullName);

// 3, boolean - true/false
let isLoading = true;
let isSuccess = false;

console.log(isLoading);
console.log(isSuccess);

console.log("Type of isLoading::", typeof isLoading);
console.log("Type of isSuccess::", typeof isSuccess);

// 4, null
const nothing = null;
console.log("Type of nothing::", typeof nothing); // lỗi lịch sử của JS
console.log("Type of nothing::", nothing == null);

// 5, undefined
let x;
console.log(x);
console.log("Type of x::", typeof x);

// 6, symbol
const key1 = Symbol("key");
const key2 = Symbol("key");

console.log("key1::", key1);
console.log("key2::", key2);

console.log("So sánh: key1 và key2::", key1 === key2);

// 7, BigInt
const bigNumber = BigInt(123123123123123123);
const largeNumber = 123123123123123123n;

console.log(bigNumber);
console.log(largeNumber);

console.log("Type of bigNumber::", typeof bigNumber);
console.log("Type of largeNumber::", typeof largeNumber);

// Reference type(tham chiếu)
// object

// biểu diễn dữ liệu dạng key: value
const user = {
  name: "Nguyễn Văn A",
  age: 20,
  address: "Hà Nội",
};

console.log(user);

// Dynamic key
const key = "address";

console.log(user[key]);
console.log(user.address);

console.log(user.name);
console.log(user.age);

console.log(typeof user);

// array: tổ chức dữ liệu dưới dạng danh sách
     // index:  0      1         2        3

const colors = ["Red", "Green", "Blue", "Black"];
console.log(colors);

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

console.log(colors.indexOf("Black"));
console.log(Array.isArray(colors));
console.log("Type of colors::", typeof colors);
