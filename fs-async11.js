const {readFile, writeFile} = require("fs")

console.log("Start")

readFile ("./content/first.txt", "utf8", (err,result) => {
    if (err) {
        console.log(error)
        return
    }
    
    const first = result;

readFile("./content/second.txt", "utf-8", (err,result)=>{
        if (err) {
            console.log(err)
            return
        }
        const second = result;
writeFile("./content/result-async.txt", "My name is xy", (err,result) => {
            if (err)
            console.log(err)
            return
        }) 
         console.log("done with task")
    })
})
console.log("Starting new task...")