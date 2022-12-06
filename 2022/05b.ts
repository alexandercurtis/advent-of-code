const text = await Deno.readTextFile("inputs/05.txt");
const startTime = performance.now();
const lines = text.split("\n");
const crates: string[][] = [[], [], [], [], [], [], [], [], []];

for (let nCrate = 0; nCrate < 9; nCrate++) {
  for (let y = 0; y < 8; y++) {
    const item = lines[7 - y][nCrate * 4 + 1];
    if (item !== " ") {
      crates[nCrate][y] = item;
    }
  }
}

function move(count: number, from: number, to: number) {
  const fromCrate = crates[from];
  const toCrate = crates[to];
  const items = fromCrate.splice(fromCrate.length - count, count);
  toCrate.push(...items);
}



for (let n = 10; n < lines.length; n++) {
  const line = lines[n];
  const m = line.match(/move ([0-9]+) from ([0-9]+) to ([0-9+])/);
  if (m) {
    const [, count, from, to] = m;
    move(parseInt(count), parseInt(from) - 1, parseInt(to) - 1);
  }
}

let s = '';
for (let nCrate = 0; nCrate < 9; nCrate++) {
  s += crates[nCrate].pop();
}
console.log(s);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// RWLWGJGFD
// 0.8ms
