const a = 10;
const b = 20;

// const sum1 = a + b;
// console.log(sum);

const x = 20;
const y = 30;

// const sum2 = x + y
// console.log(sum2);

// là một khối code được đóng gói thể thực hiện 1 chức năng cụ thể
function sum(a, b) {
  return a + b;
}

const sum1 = sum(a, b);
console.log(sum1);

const sum2 = sum(x, y);
console.log(sum2);

tenHam();
// 1, Function Declaration
function tenHam() {
  console.log("Hello Javascript!!!");
}

// 2, Function Expression
const showGreeting = function () {
  console.log("Hello World!!");
};

showGreeting();

// 3, Arrow Function
const sayHello = () => console.log("Hello ReactJS!");

const arrowSum = (a, b) => a + b;

console.log(arrowSum(10, 20));
sayHello();

// Tên hàm thường là các động từ
// set, get, show, calculate, handle, isSuccess, isEmptyString,

// Hàm truyền vào tham số
const name = "Bùi Văn Kỳ";

const user2 = {
  name: "Sơn PM",
  age: 20,
};

let mesage = "Hello";

// tham số
// pass by value
// Default value
function getName(user, message = "Hello") {
  console.log(message + " " + user.name);
}

getName(user2); // đối số

// Hàm trả về giá trị
// Validate
function calculateTotal(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return 0;
  }

  return a + b;
}

const total = calculateTotal(10, "Hello");
console.log(total);

// Viết một hàm để ghép họ tên
const firstName = "Nguyễn Văn";
const lastName = "A";

function getFullName(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") return "";

  const fullName = firstName + " " + lastName;
  return fullName;
}

const fullName = getFullName(firstName, 1);
console.log(fullName);

// Viết hàm tính trung bình cộng của 2 số
// Viết hàm kiểm tra xem 1 số có chia hết cho 2 không
// Viết hàm nhận vào 2 số a và b trả về số nhỏ hơn

function calculateAverage(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return 0;

  return (a + b) / 2;
}

const avarage = calculateAverage(10, 4);
console.log(avarage);

function isEven(number) {
  if (typeof number !== "number") return false;

  return number % 2 === 0;
}

const isEvenNumber = isEven(5);
console.log(isEvenNumber);

function findMin(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return -1;

  return a > b ? b : a;
}

const minNumber = findMin(10, 2);

console.log(minNumber);

// Viết hàm tính diện tích hình chữ nhật
// Viết hàm nhận vào 2 số trả về số lớn nhất
// Viết hàm kiểm tra năm nhuận
// Kiểm tra 1 số có phải số nguyên tố(chỉ chia hết cho 1 và chính nó) hay không

// callback function

// callback function là 1 hàm được truyền vào làm đối số của một hàm khác
// và nó sẽ được gọi lại sau khi 1 tác vụ nào đó hoàn thành
// function calculateSum(a, b) {
//   return a + b;
// }
  
function calulate(a, b, callback) {
  const result = callback(a, b);
  return result;
}

const total1 = calulate(2, 15, (a, b) => a + b);
console.log(total1);

// [1, 2, 3].forEach((number) => {
//   console.log(number);
// });

// const double = [1, 2, 3].map((number) => {
//   return number * 2;
// });

// const result = [0, 1, 2, 3].filter((number) => {
//   return number !== 0
// });

// console.log(1, 2, 3);
