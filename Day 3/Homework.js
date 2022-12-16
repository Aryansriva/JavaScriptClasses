// console.log(0 && 1 && "hey");       // 0
// console.log("hey" && 1 && "hkhk");  // hkhk
// console.log("hey" && 1);            // 1
// console.log("hey" || 1);            // "hey"
// console.log("" && 1);               // ""
// console.log("" || 1);               //1

// console.log(+"1");                // 1
// let p = +"hey";                   
// console.log(typeof p);           //number
// console.log(+"hey");             // NaN
// console.log(+"18"); // 18

// let x = 77;
// let y = 9;
// console.log(x < 10 && y == "ayushi");    //false
// console.log(x > 7 && y < 1);  // false
// console.log(x > 7 && y > 1);  // true
// console.log(0 && 1 && "foo");  // 0
// console.log(x == 5);   // false
// console.log(x > 5 || y != 9);  // true
// console.log(!(x >= 77));  // false
// console.log(!(x !== y));   // false

// console.log(+("1" + 2));  // 12
// console.log(1 + 2 + 3); // 6

// console.log(console.log("oo") && console.log("foo") && "jj");   //"oo" undefined
// console.log("1");   // 1
// console.log("oo" && "jj");   //"jj"
// console.log(undefined);       // undefined
// console.log("1");             // 1

// console.log("oo" && console.log("jj"));     // jj undefined

// Write a program to check whether a number is negative, positive or zero.

// solution

// let x = 0;
// if(x>0){
//     console.log("Positive");
// }
// else if(x<0){
//     console.log("Negative");
// }
// else{
//     console.log("Zero");
// }


// ---------------------------------


// Write a program to check whether a number is even or odd.
// solution 

// let x = 1;

// (x%2==0) ? (console.log("Even")) : (console.log("Odd"));

// ---------------------------
// Write a program to check whether a year is leap year or not.

//solution 

// let year = 1996;
// (Math.abs(year-2000)%4==0) ? (console.log("Leap Year")) : (console.log("Not Leap Year"));

//   ----------------------------

// Write a program to take month number and print number of days in that month.

// solution 

// let x = 2;
// if(x== 4 || x==6 || x==9 || x==11){
//     console.log("30 Days");
// }
// else if(x==2){
//     console.log("28 days or 29 days depends on the leap year");
// }
// else {
//     console.log("31 Days");
// }

// -------------------------

let x =0 ;

switch(x) {
     case 0 :
        console.log("a");
        
        case 1 :
            console.log("b");
            break;

          default :
          console.log("p");  
}