function Phrase(content) {
  this.content = content;
  this.louder = function() {
    return this.content.toUpperCase();
  }
}
let a = new Phrase("hello");
a.louder();
