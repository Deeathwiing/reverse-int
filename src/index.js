module.exports = 
function reverse (n) {
  if(n < 0) { n*=-1};
//   console.log(n);
 let arr= String(n).split('');
  console.log(arr);
 arr = arr.reverse();
  console.log(arr);
 
 if (arr[arr.length] === 0) {
     delete arr[arr.lenght];
 }
 return +arr.join('')
}

// console.log(reverse(-192));
