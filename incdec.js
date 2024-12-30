// post incdec.js
let m = 5;
m++;
console.log(m); // 6

// pre incdec.js
let k = 4;
++k;
console.log(k); // 5

// post dec.js
let o = 8;
console.log(o++); // 8
console.log(o); // 9

// pre dec.js
let r = 3;
console.log(++r); // 4

// post dec.js
let p = 7;
let q = 10 + p++; // 10 + 7
console.log(q); // 17
console.log(p); // 8

// pre dec.js
let t = 7;
let s = 20 + ++t; // 20 + 8
console.log(s); 
console.log(t); // 8

// ex
let a = 5;
console.log(a + " " + ++a + " " + a++); // 5 6 6
console.log(a); // 7
