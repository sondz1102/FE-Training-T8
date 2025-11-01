console.log("work!");

// 1, Falsy

console.log("=========Falsy Value=========");

console.log("false::", Boolean(false));
console.log("0::", Boolean(0));
console.log("''::", Boolean(""));
console.log("null::", Boolean(null));
console.log("undefined::", Boolean(undefined));
console.log("NaN::", Boolean(NaN));

console.log("=========Truthy Value=========");

// 2, Truthy
console.log("true::", Boolean(true));
console.log("1::", Boolean(1));
console.log("Hello::", Boolean("Hello"));
console.log("{}::", Boolean({}));
console.log("[]::", Boolean([]));

// Operators(Toán tử)
// 1, Toán tử số học: +, -, *, /, ** , %

// const a = 10;
// const b = 3;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a ** b =", a ** b);
// console.log("a % b =", a % b);

// 2, toán tử gán: =
let x = 10;
x = 20;

// Gán kết hợp
x += 10; // x = x + 10
x -= 10; // x = x - 10
x /= 10;
x *= 10;
x **= 10;
console.log(x);

// 3, toán tử so sánh: ==, >, <, >=, <=, !=, !==, ===
const number1 = 10;
const number2 = "10";

// console.log(number1 == number2);
// console.log(number1 < number2);
// console.log(number1 > number2);
// console.log(number1 <= number2);
// console.log(number1 >= number2);
// console.log(number1 != number2);

// console.log(number1 === number2);
// console.log(number1 !== number2);

console.log(true == "true"); // ép kiểu ngầm
console.log(Number(true));
console.log(Number("true"));
console.log(Number(true) == Number("true"));

console.log(true === "true"); // trả về false ngay lập tức

// 4, Toán tử tăng/giảm 1 đơn vị: ++, --

// let i = 10
// // let result = i++
// let result = ++i

// // if(i++ === 11) {

// // }

// // console.log(result);
// console.log(i);

let i = 2;
const result = i++ + --i - i-- + i++ - ++i;
// 2  +   2 - 2   + 1   -   3

// result ??
console.log(result);

// 5, Toán tử logic, &&(AND), ||(OR) !(NOT)
// 5.1: &&(AND)
// Toán tử && trả về true nếu tất cả điều kiện hoặc giá trị là true
// Toán tử && sẽ trả về giá trị falsy đầu tiên mà nó gặp phải
// Nếu tất cả giá trị là truthy thì nó sẽ trả về giá trị cuối cùng
console.log("AND::", "" && "B" && "C" && null);

const a = 10;
const b = 20;
// true  &&  false
console.log(a <= b && a <= 0);
console.log("null" && true && "hello");

// 5.2: ||(OR)
// Toán tử || trả về true nếu một trong các điều kiện hoặc giá trị là true
// Toán tử || sẽ trả về giá trị truthy đầu tiên mà nó gặp phải
// Nếu tất cả giá trị là falsy thì nó sẽ trả về giá trị cuối cùng

console.log("OR::", "false" || false || true);
console.log("OR::", "" || null || false);

// kiểm tra xem 1 người có được phép lái xe hay không
// Phải từ 18 tuổi và có giấy phép lái xe

let age = 18;
let hasLicense = false;

console.log(age >= 18 && hasLicense);

// Một người được giảm giá khi mua hàng nếu:
// Khách hàng là hội viên và tổng đơn hàng trên 500
// Hoặc khách hàng không là hội viên nhưng tổng đơn hàng trên 1000

const isMember = false;
const totalAmount = 1200;

console.log((isMember && totalAmount > 500) || totalAmount > 1000);

// 5.2: !(NOT)
let isRaining = false;
console.log(!isRaining && console.log("Đi chơi"));
console.log(!null);

// 6, Câu lệnh điều kiện if
let string = "";

if (string) {
  console.log("Đây không phải là chuỗi rỗng");
} else {
  console.log("Đây là chuỗi rỗng");
}

// if, else-if, else

if ("điều kiện 1") {
  // Code chạy vào đây nếu điều kiện 1 đúng
} else if ("điều kiện 2") {
  // Code chạy vào đây nếu điều kiện 2 đúng
} else if ("điều kiện 3") {
  // Code chạy vào đây nếu điều kiện 3 đúng
} else {
  // Code chạy vào đây nếu không có điều kiện nào thoả mãn
}

// Xếp loại học sinh dựa trên điểm số

// 90 - 100: Xuất sắc
// 80 - 89: Giỏi
// 70 - 79: Khá
// 60 - 69: Trung bình
// 0 - 59: Yếu

let score = 59;

if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 80) {
  console.log("Giỏi");
} else if (score >= 70) {
  console.log("Khá");
} else if (score >= 60) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

let number = 10;

// if (number % 2 === 0) {
//   console.log("Đây là số chẵn");
// } else {
//   console.log("Đây là số lẻ");
// }

// toán tử 3 ngôi
console.log(
  number % 2 === 0 ? console.log("Đây là số chẵn") : console.log("Đây là số lẻ")
);

let name = "Sơn";
const displayName = name ? name : "Guest";
console.log(displayName);

// 7, switch/case

let day = 4;

switch (day) {
  case 1:
    console.log("Chủ nhật");
    break;
  case 2:
    console.log("Thứ 2");
    break;
  case 3:
    console.log("Thứ 3");
    break;
  case 4:
    console.log("Thứ tư");
    break;
  default:
    console.log("Không xác định");
}

let month = 5;

// fall-through
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Mùa đông");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Mùa xuân");
    break;
  default:
    console.log("Không xác định");
}
