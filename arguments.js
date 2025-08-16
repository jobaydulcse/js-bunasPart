function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[5]);
}
add(12, 13, 53, 432, 634, 7645);
