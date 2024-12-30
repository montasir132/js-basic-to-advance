// post incdec.js
let m = 5;
m--;
console.log(m); // 4

// pre incdec.js
let k = 4;
--k;
console.log(k); // 3

// post dec.js
let o = 8;
console.log(o--); // 8
console.log(o); // 7

// pre dec.js
let r = 3;
console.log(--r); // 2

// post dec.js
let p = 7; 
let q = 10 - p--; // 10 - 7
console.log(q); // 3
console.log(p); // 6

// pre dec.js
let t = 7;
let s = 20 - --t; // 20 - 6
console.log(s); // 12
console.log(t); // 5

// ex
let a = 10;
console.log(a - " " - --a - " " - a--); // 10 - 9 - 9 = -8
console.log(a); // 8