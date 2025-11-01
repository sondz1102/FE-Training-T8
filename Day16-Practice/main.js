// const arr = [1,2,3,3,3,4,5,5,5,6,6]
// lọc ra rất các các phần tử không trùng lặp
// không được tạo ra mảng mới, trả về số lượng các phần tử không trùng lặp

// arr = [1,2]
// const arr = [1,2,3,3,3,4,5,5,5,6,6]
// console.log([...new Set(arr)]);

const arr = [1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6];

function A(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i + 1] !== arr[i]) {
  //     result.push(arr[i])
  //   }
  // }
  // return result
  // for (let i = 0; i < arr.length; i++) {
  //   if (!result.includes(arr[i])) result.push(arr[i]);
  // }
  // return result
  // return arr.filter((number, index) => arr.indexOf(number) === index);
}
const uniqueArr = A(arr);
console.log(uniqueArr);

// input
const items = [
  {
    name: "T-shirt",
    quantity: 20,
    colors: ["red", "blue", "gray"],
  },
  {
    name: "short",
    quantity: 32,
    colors: ["gray"],
  },
  {
    name: "pant",
    quantity: 31,
    colors: ["black"],
  },
  {
    name: "sweater",
    quantity: 10,
    colors: ["black", "red"],
  },
];

/* 1. Find the item with the biggest quanity, output: {
    name: 'pant',
    quantity: 31,
    colors: ['black'],
  } 
*/

/*
  2. Gather items with colors
  output: { red: ['T-shirt', 'sweater'], 'blue': ['T-shirt'], gray: ['T-shirt', 'short'], black: ['pant', 'sweater']  }
*/

function findItemWithBiggestQuantity(products) {
  if (!Array.isArray(products) || products.length === 0) return {};

  // let maxItem = products[0];
  // products.forEach((product) => {
  //   if (product.quantity > maxItem.quantity) maxItem = product;
  // });

  // return maxItem;

  return products.reduce((maxItem, product) => {
    return product.quantity > maxItem.quantity ? product : maxItem;
  });
}

const maxItem = findItemWithBiggestQuantity(items);

// console.log(maxItem);

// const items = [
//   {
//     name: "T-shirt",
//     quantity: 20,
//     colors: ["red", "blue", "gray"],
//   },
//   {
//     name: "short",
//     quantity: 32,
//     colors: ["gray"],
//   },
//   {
//     name: "pant",
//     quantity: 31,
//     colors: ["black"],
//   },
//   {
//     name: "sweater",
//     quantity: 10,
//     colors: ["black", "red"],
//   },
// ];

/*
  2. Gather items with colors
  output: { red: ['T-shirt', 'sweater'], 'blue': ['T-shirt'], gray: ['T-shirt', 'short'], black: ['pant', 'sweater']  }
*/

function gatherItemsWithColors(products) {
  if (!Array.isArray(products) || products.length === 0) return {};

  return products.reduce((result, product) => {
    product.colors.forEach((color) => {
      // if(!result[color]) {
      //   result[color] = []
      // }

      // result[color].push(product.name)

      // result[color] = result[color] || [];
      // result[color].push(product.name);

      (result[color] = result[color] || []).push(product.name);
    });

    return result;
  }, {});
}

const result = gatherItemsWithColors(items);

console.log(result);

// input
const products = [
  {
    name: "T-shirt",
    quantity: 20,
    models: {
      value: 1,
      color: "red",
      size: "L",
    },
  },
  {
    name: "short",
    quantity: 25,
    models: {
      value: 2,
      color: "black",
      size: "M",
    },
  },
  undefined,
  {
    name: "pant",
    quantity: 31,
    models: {
      value: 3,
      color: "gray",
      size: "M",
    },
  },
  null,
  {
    name: "pant",
    quantity: 0,
    models: {
      value: 1,
      color: "blue",
      size: "M",
    },
  },
];

// Extract product name and color
// output: [{name: 'T-shirt', color: 'red'}, {name: 'short', color: 'black'}, {name: 'pant', color: 'gray'}, {name: 'pant', color: 'blue'}]

function extractProductNameAndColor(products) {
  if (!Array.isArray(products) || products.length === 0) return [];

  return products
    .filter((product) => product)
    .map((product) => ({
      name: product.name,
      color: product.models.color,
    }));
}

const extractProducts = extractProductNameAndColor(products);

console.log(extractProducts);

const marks = [
  { name: "Tom", mark: 8 },
  { name: "Jerry", mark: 3 },
  null,
  { name: "Sarah", mark: 3 },
  undefined,
  { name: "Alex", mark: 4 },
];

// Find item by mark
// 1. mark = 3:
// output: ['Jerry', 'Sarah']

function findItemByMark(marks, mark) {
  if (!Array.isArray(marks) || marks.length === 0 || typeof mark !== "number")
    return [];

  return marks
    .filter((item) => item && item.mark === mark)
    .map((item) => item.name);
}

const studentNames = findItemByMark(marks, 4);

console.log(studentNames);

//

const numbers = [1, 2, 3, 3, 4, 5, 5, 6, 6, 8, 8, 9, 9, 9];

// output: {1: 1, 2: 1, 3: 2, 4: 1, 5: 2, 6: 2, 8: 2, 9: 3}

const numberFreq = numbers.reduce((result, number) => {
  result[number] = (result[number] || 0) + 1;

  return result;
}, {});

console.log(numberFreq);
