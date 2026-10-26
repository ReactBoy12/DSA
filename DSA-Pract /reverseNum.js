let x = -123;
let rev = 0;
while (x != 0) {
  rev = rev * 10 + (x % 10);
  x = Math.floor(x / 10);
  if (x == 0) {
    continue;
  }
}
console.log(rev);
