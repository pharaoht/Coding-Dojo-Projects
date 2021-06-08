var topic = "JavaScript"

if(topic){
    let topic = "ECMAScript"
    console.log("Block scope", topic)
}

console.log("global scope", topic)

//let keyword adds a block scope to the variable, and the value is only changed inside the block/function 
//also helps enforce block scope in your code