let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// using String#includes to test for the presence of 'Dakota'
function withIncludes(elements) {
  return elements.filter(element => element.includes('Dakota'));
}
console.log(withIncludes(states));
//using a regex that test for the length of the split array being 2
function withRegex(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(withRegex(states));
