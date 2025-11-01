// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for ("Khởi tạo"; "điều kiện lặp"; "cập nhật biến đếm") {}

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// in ra màn hình tất cả các số chẵn từ 2 đến n

// const n = 10;
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// 5 -> 1 + 3 + 5 = 9
// 7 -> 1 + 3 + 5 + 7 = 16
// 10 -> 25

// viết hàm tính tổng tất cả các số lẻ từ 1 cho đến n

function sum(n) {
  let sum = 0;

  if (typeof n !== "number") return 0;

  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }

  return sum;
}

const total = sum(10);
// console.log(total);

const numberList = [1, 2, 3, 4, 5];

// console.log(numberList[0]);
// console.log(numberList[1]);
// console.log(numberList[2]);
// console.log(numberList[3]);
// console.log(numberList[4]);

// let sum1 = 0

// for (let i = 0; i < numberList.length; i++) {
//   sum1 += numberList[i]
// }

// console.log(sum1);

// viết hàm tìm số lớn nhất trong mảng
// input: [1,3,5,10,9]
// output: 10

function findMax(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return;

  let max = nums[0];
  const length = nums.length;

  for (let i = 1; i < length; i++) {
    const number = nums[i];

    if (number > max) {
      max = nums[i];
    }
  }

  return max;
}

const maxNumber = findMax([1, 3, 5, 10, 9]);
console.log(maxNumber);

// viết hàm in ra màn hình một hình tam giác

// *
// **
// ***
// ****
// *****
// ******
// *******

function printStars(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
    console.log(star);
  }
}

printStars(10);

// Viết 1 hàm nhận vào 1 chuỗi và số lần(n) lặp lại chuỗi đó, trả về chuỗi đầu vào được nối nhau bởi dấu -
// input: "hello", 10
// output: "hello-hello-hello-hello-hello-hello-hello-hello-hello-hello"

function reatString(str, n) {
  let result = "";

  // for (let i = 0; i < n; i++) {
  //   if (i < n - 1) {
  //     result += str + "-";
  //   } else {
  //     result += str;
  //   }
  // }

  for (let i = 0; i < n; i++) {
    // if (i < n - 1) {
    //   result += str + "-";
    // } else {
    //   result += str;
    // }

    result += str + (i < n - 1 ? "-" : "");
  }

  // let result = str

  // for(let i = 1; i < n; i++) {
  //   result += "-" + str
  // }

  return result;
}

const repeatStr = reatString("123", 10);

console.log(repeatStr);

// Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber =
// [4,44,64,24,32,74,22]
// và ngược lại lấy số lẻ cho vào mảng oddNumbers

// {
//   evenNumbers: [],
//   oddNumbers: []
// }

function seprateOddEvenNumber(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return {};
  const evenNums = [];
  const oddNums = [];

  // let evenIndex = 0;
  // let oddIndex = 0;

  // process
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const number = nums[i];

    if (number % 2 === 0) {
      evenNums[evenNums.length] = number;
      // evenIndex++;
    } else {
      oddNums[oddNums.length] = number;
      // oddIndex++;
    }
  }

  return {
    evenNumbers: evenNums,
    oddNumbers: oddNums,
  };
}

const result = seprateOddEvenNumber([
  1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23,
]);

console.log(result);

// for of

const numbers = [1, 2, 3, 4, 5, 6];

for (const number of numbers) {
  console.log(number);
}

// for in

const obj = { a: 1, b: 2, c: 3, d: 20 };

let sum2 = 0;
for (const key in obj) {
  const num = obj[key];
  sum2 += num;
}

console.log(sum2);

// break, continue

// for(let i = 0; i <= 5; i++) {
//   if(i === 2) {
//     break
//   }

//   console.log(i);
// }

console.log("continue");

for (let i = 0; i <= 5; i++) {
  if (i == 2 || i == 3) {
    continue;
  }

  console.log(i);
}

// while

let num = 10;

// while(num > 0) {
//   console.log(num);
//   console.log('hello');

//   num--
// }

do {
  console.log(num);
  num--;
} while (num > 0);

// tính tổng các chữ số của 1 số nguyên ví dụ
// input: 123
// output: 1 + 2 + 3 => 6
