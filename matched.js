const numbers = [45, 65, 35, 75, 15, 95, 55];
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// for (const number of numbers) {
//   console.log(number);
// }

const products = [
  { id: 1, name: "Iphone ", price: 20000 },
  { id: 2, name: "Realme phone ", price: 23000 },
  { id: 3, name: "Oppo phone", price: 20020 },
  { id: 4, name: "MAcbook ", price: 2300 },
  { id: 5, name: "note 10 ", price: 20500 },
  { id: 6, name: "Windows ", price: 20600 },
  { id: 7, name: "HP ", price: 2060 },
  { id: 8, name: "Dell ", price: 204630 },
  { id: 9, name: "one plus Phone", price: 2046320 },
];

// for (const product of products) {
//   console.log(product);
// }
function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    // console.log(product.name.includes(search));
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "MACBOOK");
console.log(result);
