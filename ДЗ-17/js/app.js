let a = 0;
let b = 0;
let max = 5; 
let space = "";
let star = "";

while (a < max) {
  space = "";
  star = "";
  for (b = 0; b < max - a; b++) space += " ";
  for (b = 0; b < 2 * a + 1; b++) star += "*";
  console.log(space + star);
  a++;
}

