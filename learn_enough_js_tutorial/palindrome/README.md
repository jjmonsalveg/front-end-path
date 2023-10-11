# Phrase object (with palindrome detector)

This is a sample NPM module created in [_Learn Enough JavaScript to Be
Dangerous_](https://www.learnenough.com/javascript-tutorial) by Front end path
leaning team.

The module can be used as follows:

```bash
npm install --global front-end-path-palindrome
vim test.js
node test.js
//true
```

```javascript
let Phrase = require("front-end-path-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
```
