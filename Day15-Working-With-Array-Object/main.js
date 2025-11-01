const user = {
  name: "Nguyễn Văn A",
  age: 20,
  email: "nguyenvana@gmail.com",
};

// Object.keys
const objKeys = Object.keys(user);
console.log(objKeys);

for (let i = 0; i < objKeys.length; i++) {
  console.log(user[objKeys[i]]);
}

// Object.values
const objValues = Object.values(user);
console.log(objValues);

for (let i = 0; i < objValues.length; i++) {
  console.log(user[objKeys[i]]);
}

// Object.entries

const objEntries = Object.entries(user);
console.log(objEntries);

for (let i = 0; i < objEntries.length; i++) {
  console.log(objEntries[i][0]);
  console.log(objEntries[i][1]);

  // console.log(key, value);
}

// Object.assign
const newUser = Object.assign({}, user, {
  phone: 123123,
  name: "Nguyễn Văn B",
});

// console.log(newUser);
// console.log(user);
// const newUser2 = user;
// newUser2.phone = 123123

// console.log(newUser2);
// console.log(user);

// Array

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// numbers.forEach((number, index) => {

// });

// numbers.myForEach((number, index) => {
//   console.log(number, index);
// });

// console.log(Array.prototype);

// 1, push()
// colors.push("black");
// console.log(colors);

// 2, pop()
// colors.pop();
// console.log(colors);

// 3, unshift()
// const length = colors.unshift('black')
// console.log(length);
// console.log(colors);

// 4, shift()
// const color = colors.shift();
// console.log(color);

// console.log(colors);

// 5, concat()

// const arr = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const newArray = arr.concat(arr2, arr3);
// console.log(newArray);

// 6, slice() // không làm thay đổi mảng gốc

// slice(start, end)
// const newColors = colors.slice(1, 2)
// console.log(newColors);
// console.log(colors);

const colors = ["red", "green", "blue"];
// 7, splice()
// splice(start, deleteCount, item1, item2)
colors.splice(1, 0);
colors.splice(1, 2, "black", "yellow");
console.log(colors);

// 8, includes()

// console.log(colors.includes("RED"));

// // 8, indexOf()
// const index = numbers.indexOf(99);

// if (numbers.indexOf(99) !== -1) {
//   console.log("Hello");
// }
// console.log(index);

// 9, map()

const numbers = [1, 2, 3, 4, 5];

// const result = [];

// numbers.forEach((number, index) => {
//   result[index] = number * 2;
// });

// console.log(result);
const result = colors.map((color) => `<li>${color}</li>`);

const ul = document.getElementById("list");
ul.innerHTML = result.join("");
console.log(result);

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }

  return result;
};

// const result2 = colors.map((color, index, self) => {
//   console.log(self);

//   return `<li>${color}</li>`;
// });

// console.log(result2);
const result3 = numbers.map((number, index, self) => {
  console.log(numbers);
  return 123;
});

const products = [
  { id: 1, name: "phone", price: 1000, stock: 10 },
  { id: 2, name: "laptop", price: 1200, stock: 0 },
  { id: 1, name: "headphone", price: 200, stock: 5 },
];

// const products = [
//   { id: 1, name: "phone", price: 1000, stock: 10, status: 'Còn hàng', discountPrice: 900},
//   { id: 2, name: "laptop", price: 1200, stock: 0, status: 'hết hàng',  discountPrice: 900 },
//   { id: 1, name: "headphone", price: 200, stock: 10, status: 'còn hàng',  discountPrice: 900 },
// ];

const newProducts = products.map((product) => {
  return Object.assign({}, product, {
    status: product.stock ? "Còn hàng" : "Hết hàng",
    discountPrice: product.price * 0.9,
  });
});

console.log(newProducts);

// 10, filter()
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers2.filter((number) => number);

console.log(evenNumbers);

Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const oddNumbers = numbers2.myFilter((number) => {
  return number % 2 === 1;
});

console.log(oddNumbers);

const products2 = [
  { id: 1, name: "phone", price: 1000, stock: 10 },
  { id: 2, name: "laptop", price: 1200, stock: 0 },
  { id: 1, name: "headphone", price: 200, stock: 5 },
];

const convertProduct = products2.myFilter((product) => product.stock);
console.log(convertProduct);

// 11. some()
// tích hợp method some()

const numberList = [0, 0, 0, 0, 1];
const result4 = numberList.some((number) => number > 1);
// console.log(result4);

// 11. every()
// tích hợp method every()

const numberList2 = [0, 0, 0, -2];
const result5 = numberList2.every((number) => number >= 0);
console.log(result5);

// 12, reduce()

const numberList3 = [1, 2, 3, 4, 5];

const sum = numberList3.reduce((sum, number) => {
  return sum + number;
});

console.log(sum);

// 13, find()
const products3 = [
  { id: 1, name: "phone", price: 1000, stock: 10 },
  { id: 2, name: "laptop", price: 1200, stock: 0 },
  { id: 1, name: "headphone", price: 200, stock: 5 },
];

const product = products3.find((product) => product.price >= 1000);
console.log(product);
