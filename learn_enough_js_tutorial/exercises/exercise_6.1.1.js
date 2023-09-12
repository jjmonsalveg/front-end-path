let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
  }
function longUrls(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(longUrls(states));
