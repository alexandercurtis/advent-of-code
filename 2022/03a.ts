const text = await Deno.readTextFile("inputs/03.txt");
const startTime = performance.now();
let total = 0;
for (const l of text.split("\n")) {
  const compartment = new Set();
  const len = l.length;
  let i;
  for (i = 0; i < len / 2; i++) {
    compartment.add(l[i]);
  }
  for (; i < len; i++) {
    const item = l[i];
    if (compartment.has(item)) {
      const priority =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(item) + 1;
      total += priority;
      break;
    }
  }
}
console.log(`total ${total}`);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 7817
// 0.7ms
