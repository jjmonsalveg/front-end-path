let a = [1, 2, 3, 4, 5];
function product(a) {
  return a.reduce((total,n)=> total *= n);
}
console.log(product(a));
