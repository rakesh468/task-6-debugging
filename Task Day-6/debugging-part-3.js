// Fix the code to get the largest of three.//
const aa = (f,s,t) => {
 console.log(f,s,t);
 if(f>s &&f>t){
console.log(f)}
else if(s>f && s>t){
 console.log(s)}
  else{
console.log(t)}
};
aa(1,2,3);

//  Fix the code to Sum of the digits present in the number//
let n = [1,2,3];
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
console.log(add(n));

// Fix the code to Sum of all numbers using IIFE function//
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

// Fix the code to gen Title caps.//
var arr9 = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arr9.length; i++) {
 console.log(arr9[i][0].toUpperCase() + arr9[i].substr(1));
 }
}
ano();

// Fix the code to return the Prime numbers//
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i!==0){
 return true;
 }else{
 }
 return num===1;
 }
});
console.log(myPrime);

// Fix the code to sum the number in that array//
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b;
const sum1 = num.reduce(sum)
console.log(sum1);

// Fix the code to gen Title caps.//
var arr7 = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr7.length; i++) {
 console.log(arr7[i][0].toUpperCase() + arr7[i].substr(1));
 }
})();

// print all odd numbers in an array using IIFE function
var arr3 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr3.length; i++) {
 if (arr3[i] % 2 !== 0) {
 console.log(arr3[i]);
 }}
})();

// Fix the code to reverse.
(function(str){
    var str1 = str.split('').reverse().join('')
    console.log(str1); 
   })("abcd")


