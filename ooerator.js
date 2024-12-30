// arithmetic operator
console.log ("Arithmetic Operator")
let a= 2600, b= 40

console.log(a + "+" + b + "=" + (a + b))    //2600 + 40 = 2640
console.log(a + "-" + b + "=" + (a - b))    //2600 - 40 = 2560
console.log(a + "*" + b + "=" + (a * b))    //2600 * 40 = 104000
console.log(a + "/" + b + "=" + (a / b))    // 2600 / 40 = 65.0
console.log(a + "%" + b + "=" + (a % b))   // 2600 % 40 = 0

// Assignment Operator
console.log ("Assignment Operator")
let aso =10 //10
console.log("a=" + aso) //10
aso += 5 // 10 + 5
console.log("a +=" + aso) //15
aso -= 5 // 15 - 5
console.log("a -=" + aso) //10
aso *= 5 // 10 * 5
console.log("a *=" + aso) //50 
aso /= 5 // 50 / 5
console.log("a /=" + aso) //10
aso %= 4 // 10 % 4
console.log("a %=" + aso) //2

// Relational Operator
console.log ("Relational Operator")
let m=10, n = 15, o=10 ;
console.log(m + ">" + n + "=" + (m > n)); // m > n = false
console.log(m + "<" + n + "=" + (m < n)); // m < n = true
console.log(m + ">=" + o + "=" + (m >= o)); // m >= o = true
console.log(m + "<=" + o + "=" + (m <= o)); // m <= o = true
console.log(m + "==" + n + "=" + (m == n)); // m == n = false
console.log(m + "==" + o + "=" + (m == o)); // m == o = true
console.log(m + "!=" + n + "=" + (m != n)); // m != n = true
console.log(m + "!=" + o + "=" + (m != o)); // m != o = false



// Logical Operator
console.log("Logical Operator")

let k = 50, l = 100 ;
// And (&&)  Operation
let operation = (k > 20) && (l < 150);
console.log( "( " + k + " > 20 ) && (" + l + " < 150 ) == " + operation ); // true

/* OR (||)  Operation*/
operation = (k > 20) || (l < 150);
console.log( "( " + k + " > 20 ) || (" + l + " < 150 ) == " + operation ); // true

// not operation
console.log(" operation = " + operation + " and not operation = " + !operation); // operation=true and not operation = false


/*
* And (&&)  Operation
* 
* A    B    R
* T    T    T
* T    F    F
* F    T    F
* F    F    F
*/

/* OR (||)  Operation
*
*   A    B    R
*   T    T    T
*   T    F    T
*   F    T    T
*   F    F    F
*/

