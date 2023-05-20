const {readFileSync, writeFileSync} = require("fs");

console.log("Start")

const read = readFileSync("./content/first.txt", "utf-8")
const read1 = readFileSync("./content/second.txt", "utf8")
console.log(read,read1)

writeFileSync(
    "./content/third.txt", "This is the new third text"
)

console.log("Done with task!")
console.log("Starting a new one...")