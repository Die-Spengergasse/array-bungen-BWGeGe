//make an array with the numbers 1 to 20
const numbers = [];

for (let i = 0; i <= 20; i++) {
  numbers.push(i);
}

console.log(numbers);
//adds the numbers 21 to 40 to the start of the array
for (let i = 21; i <= 40; i++) {
  numbers.unshift(i);
}
console.log(numbers);
//if there is the number 32, the index of 32 and 85 will be printed
if(numbers.includes(32)){
    console.log(numbers.indexOf(32));
    console.log(numbers.indexOf(85));
}
//removes 5 of the first and last element of the array each
for(let i = 0;i<5;i++){
    numbers.pop();
    numbers.shift();
    console.log(numbers);
}
//print a part of the array
console.log(numbers.splice(3,4,815));
let numberinos = numbers.slice(3,4);
for(count of numberinos){
    console.log(count);
}
let bigNumbers = numbers.map((x) => x*3);
for(count in bigNumbers){
  if(bigNumbers.filter((x) => x%2==0)== true)
    console.log(bigNumbers[count]);
}
console.log(numbers.toString());
