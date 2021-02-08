function strRev(str){
    var newStr = ""
    for(var i = str.length - 1; i > 0; i--){
        newStr += str[i]
    }
    console.log(newStr)
}

strRev("Monn be good No")