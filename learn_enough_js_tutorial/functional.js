let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// Returns a URL-friendly version of a string.
//Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];

  elements.forEach(function (element) {
    urls.push(urlify(element));
  });

  return urls;
}

function funtionalUrls(elements) {
  return elements.map((element) => urlify(element));
}

console.log("urls Imperative version:");
console.log(imperativeUrls(states));

console.log("urls Functional version:");
console.log(funtionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];

  elements.forEach(function (element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });

  return singles;
}

//singles: Functional version
function functionalSingles(elements) {
  return elements.filter((element) => element.split(/\s+/).length === 1);
}

console.log("\nStates with one word --Imperative--:");
console.log(imperativeSingles(states));

console.log("\nStates with one word --Functional--:");
console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;

  elements.forEach((n) => (total += n));

  return total;
}

console.log("\nSum of numbers --Imperative--:");
console.log(imperativeSum(numbers));
