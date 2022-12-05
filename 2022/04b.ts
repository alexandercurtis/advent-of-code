const text = await Deno.readTextFile("inputs/04.txt");
const startTime = performance.now();
let total = 0;
for (const l of text.split("\n")) {
  const [r1s, r1f, r2s, r2f] = l.split(/[,\-]/).map((s) => parseInt(s));
  if (r1s <= r2f && r1f >= r2s) total++;
  else if (r2s <= r1f && r2f >= r1s) total++;
}
console.log(`total ${total}`);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 830
// 1.2ms
