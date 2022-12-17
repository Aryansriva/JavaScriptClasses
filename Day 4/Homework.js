// Write a JS code to print Even numbers in given array using for loop, while loop.
// solution 
// const arr = [1,2,3,4,5,6,7,8,9,10];
//using for loop
// for(let i=0;i<10;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

// using while loop

// let i=0;
// while(i<10){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
//     i++;
// }

// ---------------------------------------------------------------------------------------------------------------
// Write a JS code to print numbers from 8 to 16 using for loop, while loop.
// solution

// using for loop

// for(let i=8;i<=16;i++){
//     console.log(i);
// }

// // using while loop
// let i = 8;
// while(i<=16){
//     console.log(i);
//     i++;
// }


//-----------------------------------------------------------------------------------------------------------
// UnComment each question and then solve

// question 1
// var grade = "C";
// var result = 0;
// switch (grade) {
//   case "A": {
//     result += "10";
//     break;
//   }
//   case "B": {
//     result += " 9";
//     break;
//   }
//   case "C": {
//     result += " 8";
//     break;
//   }
//   default:
//     result += " 0";
// }
// console.log(result); // 0 8

// question 2
// var grade = "D";
// var result = "a";
// switch (grade) {
//   case "A":
//     result += "10";
//   case "B":
//     result += " 9";
//   case "C":
//     result += " 8";
//   case "D":
//     result += " 6";
//   default:
//     result += " 0";
// }
// console.log(result); //a 6 0

// question 3
// var grade = "Z";
// var result = "";
// switch (grade) {
//   case "A":
//     result += "10";
//   case "B":
//     result += " 9";
//   case "C":
//     result += " 8";
//   default:
//     result += " 0";
// }
// console.log(result);   // 0

// question 4
// var grade = "A";
// var result = "";
// switch (grade) {
//   case "A":
//     result += "10";
//   case "B":
//     result += " 9";
//   case "C":
//     result += 8;
//   default:
//     result += " 0";
// }
// console.log(result);   // 10 98 0

// question 5 - Concept Clearing question
// var x = 0;
// for (x; x < 10; x++);
// console.log(x);          // 10 (since there is semicolon after the for loop)

// question 6
// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }                               // 1 2 3 4 5

// question 7
// x = [1, 2, 3, 6, 8, 9];
// var len = x.length,
//   i = 0;
// if (len == 0) console.log("Empty Array");
// else {
//   do {
//     console.log(x[i]);
//   } while (++i < len);
// }                                     // 1 2 3 6 8 9

// a. Prints the numbers in the array in the reverse order
//solution

// const arr = [1,2,3,4,5,6];
// for(let i=5;i>=0;i--){
//     console.log(arr[i]);
// }



//-----------------------------------------------------------------------------------

// b. Prints the numbers in the array in specific order
//solution
// different scenario are possible


//----------------------------------------------------------------------------------

// c. Prints "Empty Array"
// solution

// const arr = [1,2,3];
// let size = arr.length;
// if(size==0){
//     console.log("arr is empty");
// }
// else{
//     console.log("arr is an array of size ",size);
// }


//---------------------------------------------------------------------

// d. Prints 0 to the length of the array
//solution
// const arr = [1,2,3];

// for(let i=0;i<=arr.length;i++){
//     console.log(i);
// }
//----------------------------------------------------------------------
