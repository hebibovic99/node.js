const ss = require("lodash")

const items = [1, [2, [3, [4, [5]]]]]
const newItems = ss.flattenDeep(items)
console.log(newItems)
