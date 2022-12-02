const text = await Deno.readTextFile("inputs/01.txt");
const startTime = performance.now();
let calories = 0;
let max1 = 0;
let max2 = 0;
let max3 = 0;
for (const l of text.split("\n")) {
  if (l !== "") {
    calories += parseInt(l);
  } else {
    if (calories > max3) {
      if (calories > max2) {
        if (calories > max1) {
          max3 = max2;
          max2 = max1;
          max1 = calories;
        } else {
          max3 = max2;
          max2 = calories;
        }
      } else {
        max3 = calories;
      }
    }
    calories = 0;
  }
}
console.log(`max ${max1 + max2 + max3}`);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 0.4ms
