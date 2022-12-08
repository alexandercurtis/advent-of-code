const text = await Deno.readTextFile("inputs/06.txt");
let s = 0;
for (let i = 0; i < s + 14 && i < text.length; i++) {
    for (let j = s; j < i; j++)
        if (text[j] === text[i]) s = j + 1;
}
console.log(s + 14);

// 3605
// 1.0ms