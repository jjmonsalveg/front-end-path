// exercise 1
String.prototype.blank = function () {
  return /^\s*$/.test(this);
};

"  ".blank();
"".blank();

//exercise 2
Array.prototype.last = function () {
  return this[this.length - 1];
};

[1, 2, 3, 4, 5].last();
