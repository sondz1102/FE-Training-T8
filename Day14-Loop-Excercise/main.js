// Bài 1:
// - Kiểm tra xem một số có phải là số nguyên tố không.
// - In ra số nguyên tố lớn nhất trong khoảng từ 1 đến n

// Input: 20
// Output: 19

function isPrime(n) {
  if (typeof n !== "number") return false;
  // snt là số chỉ chia hết cho 1 và chính nó
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(4));

function findMaxPrime(n) {
  if (typeof n !== "number") return;

  for (let i = n; i >= 2; i--) {
    if (isPrime(i)) return i;
  }
}

console.log(findMaxPrime(20));

// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
// Input: 10
// Output: [3, 7]

// 2, 3 ,4 ,5, 6, 7, 8, 9

// const twoPrime = (n) => {
//   if (typeof n !== "number") return;
//   let a = 2;
//   let result = "";
//   let flag = true;
//   while (a <= n / 2) {
//     let b = n - a;
//     if (isPrime(a) && isPrime(b) && a !== b) {
//       if (!flag) result += ", ";
//       result += `(${a}, ${b})`;
//       flag = false;
//     }
//     a++;
//   }
//   return result;
// };

// console.log(twoPrime(10));

function findPrimePair(n) {
  // early return
  if (typeof n !== "number") return;

  const pairs = [];
  for (let i = 2; i <= n / 2; i++) {
    const j = n - i;

    if (isPrime(i) && isPrime(j) && i !== j) {
      pairs[pairs.length] = i;
      pairs[pairs.length] = j;
    }
  }

  return pairs;
}

// console.log(findPrimePair(20));

// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên
// dương cho trước.
// Input: 10, 30
// Output: 14, 21, 28

function findDivisible(m, n) {
  if (typeof m !== "number" || typeof n !== "number" || m >= n) return [];

  const result = [];

  for (let i = m; i <= n; i++) {
    if (i % 7 == 0 && i % 5 !== 0) {
      result[result.length] = i;
    }
  }

  return result;
}
console.log(findDivisible(10, 30));

// Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
// Input: 123 -> 1 + 2 + 3 = 6 => isPrime(6) -> false
// Output: false

// 123 -> 1 + 2 + 3

// 123 % 10 = 3
// 12 % 10 = 2
// 1 % 10 = 1

// 123 / 10 = 12.9

// 1 / 10 = 0

function isPrimeSumOfNumber(n) {
  if (typeof n !== "number") return false;

  // let sum = 0

  // while(n > 0) {
  //   sum += n % 10
  //   n = Math.floor(n / 10)
  // }

  // return isPrime(sum)
  const str = n.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }

  return isPrime(sum);
}

console.log(isPrimeSumOfNumber(379));

console.log(typeof +"123");

// Bài 5: Tính trung bình điểm của học sinh theo từng môn học
// const students = [
//  { name: "Alice", scores: [85, 90, 80] },
//  { name: "Bob", scores: [90, 95, 85] },
//  { name: "Carol", scores: [75, 80, 70] },
//  { name: "David", scores: [80, 85, 75] },
//  { name: "Eve", scores: [95, 100, 90] }
// ];
// Điểm trung bình của mỗi môn học:
// output: [85, 90, 80]

// const averageScores = (students) => {
//   const arr = [];
//   for (let i = 0; i < students.length; i++) {
//     let avg = 0;
//     for (let j = 0; j < students[i].scores.length; j++) {
//       avg += students[i].scores[j];
//     }
//     // console.log(`Môn ${i + 1}: ${avg / students[i].scores.length}`);
//     arr.push(avg / students[i].scores.length);
//   }
//   return arr;
// };

// console.log(averageScores(students));

// function avaragePoints(students) {
//   if (!Array.isArray(students) || students.length === 0) {
//     return;
//   }
//   const results = [];
//   const subjectcount = students[0].scores.length;
//   for (let i = 0; i < subjectcount; i++) {
//     let totalPoints = 0;
//     for (let j = 0; j < students.length; j++) {
//       totalPoints += students[j].scores[i];
//     }
//     const average = totalPoints / students.length;
//     results.push(average);
//   }
//   return results;
// }

// console.log(avaragePoints(students));

// const averageScores = (students) => {
//   let firstScore = 0;
//   let secondScore = 0;
//   let thirdScrote = 0;
//   const arr = [];
//   for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].scores.length; j++) {
//       if (j === 0) {
//         firstScore += students[i].scores[j];
//       } else if (j === 1) {
//         secondScore += students[i].scores[j];
//       } else {
//         thirdScrote += students[i].scores[j];
//       }
//     }
//   }
//   arr.push(
//     firstScore / students.length,
//     secondScore / students.length,
//     thirdScrote / students.length
//   );
//   return arr;
// };

// console.log(averageScores(students));

const students = [
  { name: "Alice", scores: [85, 90, 80] },
  { name: "Bob", scores: [90, 95, 85] },
  { name: "Carol", scores: [75, 80, 70] },
  { name: "David", scores: [80, 85, 75] },
  { name: "Eve", scores: [95, 100, 90] },
];

function calculateAverage(students) {
  if (!Array.isArray(students) || students.length === 0) return 0;

  const totalSubject = students[0].scores.length;
  const average = new Array(totalSubject).fill(0);

  for (const student of students) {
    for (let i = 0; i < student.scores.length; i++) {
      average[i] += student.scores[i];
    }
  }

  for (let i = 0; i < average.length; i++) {
    average[i] /= students.length;
  }

  return average;
}

const average = calculateAverage(students);
console.log(average);

// Bài 11: cho một object lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông
// tin sau:
// name: tên sp
// code: mã sp,
// ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
// red: 10 (sản phẩm này còn 10 cái màu đỏ)
// blue: 20 ....
// Giả sử không biết sản phẩm có những màu nào
// Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho

const products = {
  name: "Quạt điện",
  code: "JQK",
  red: 10,
  blue: 20,
  orrange: 0,
  gray: 200,
  green: 5,
};

const sumInventory = (products) => {
  if (!products) return;

  let sum = 0;
  // const values = Object.values(products);

  // for (const value of values) {
  //   if (typeof value === "number") {
  //     sum += value;
  //   }
  // }
  // return sum;

  for (const key in products) {
    if (typeof products[key] === "number") {
      sum += products[key];
    }
  }

  return sum;
};

console.log(sumInventory(products));

// Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và
// score (điểm) , hiển thị ra màn hình console tên của học sinh có điểm cao nhất

const students2 = [
  { name: "Alice", score: 50 },
  { name: "Bob", score: 80 },
  { name: "Carol", score: 90 },
  { name: "David", score: 70 },
  { name: "Eve", score: 70 },
];

// const highestScore = () => {
//   let name = "";
//   let max = 0;
//   for (const student of students2) {
//     if (student.score > max) {
//       max = student.score;
//       name = student.name;
//     }
//   }
//   return name;
// };

// console.log(highestScore());

// function topStudent(students) {
//   if (!Array.isArray(students) || students.length === 0) {
//     return;
//   }
//   let top = students[0];
//   for (let i = 1; i < students.length; i++) {
//     if (students[i].score > top.score) {
//       top = students[i];
//     }
//   }
//   return top.name;
// }
// console.log(topStudent(students2));

// cho 1 mảng số nguyên, tìm ra số lớn thứ 2 trong mảng

const nums = [0, 0, 0];

function findSecondMax(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return;
  }
  let max = -Infinity;
  let secondMax = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] !== max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

const second = findSecondMax(nums);
console.log(second);
