// 1
String.prototype.blank = function() {
  return /^\s*$/.test(this);
}
"  ".blank();
// 2
