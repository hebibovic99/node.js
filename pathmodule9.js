const path = require("path");

console.log(path.sep)

const folderpath = path.join("content", "subfolder","test.txt")
console.log(folderpath)

const basename = path.basename(folderpath)
console.log(basename)

const absolute = path.resolve(__dirname, "content", "subfolder","test.txt")
console.log(absolute)