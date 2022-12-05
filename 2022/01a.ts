const text = await Deno.readTextFile("inputs/01.txt");
const startTime = performance.now();
let calories = 0;
let max = 0;
for (const l of text.split("\n")) {
  if (l !== "") {
    calories += parseInt(l);
  } else {
    if (calories > max) {
      max = calories;
    }
    calories = 0;
  }
}
console.log(`max ${max}`);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 69795
// 0.4ms
