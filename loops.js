function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loop${i === 0 || i === 1 ? '' : 's'}.`);
  }
  return arr;
}

function whileLoop(n) {
  while (n > 0) {
   console.log(--n);
 }
 return "done";
}

function doWhileLoop(int) {
    
}