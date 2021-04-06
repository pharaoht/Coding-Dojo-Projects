// Balance Point
// Write a function that takes an array and returns true if there exists a point where the sum of the values on the left side equal the values on the right

// Given: [1, 2, 3, 4, 10] return true
// 1+2+3+4 = 10





balancePoint = (arr) =>{
    var right = arr[arr.length - 1];
    var sum = 0
    for(var i =0; i < arr.length; i++){
    
        if(sum == right){
            return true
        }
        sum += arr[i]
        console.log(sum)

    }
}

balancePoint([1,2,3,6])