// 1
let a = ["ant", "bat", "cat", 42];
a.forEach(element => console.log(element));

// 2
let b = [8, 17, 42, 3];
b.sort(function(a, b) { return a - b; });

//3
function printArray(array){
  array.forEach((element) => console.log(element));
}
printArray(b)
