// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function Biggie(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'big'
        }
    }
    console.log(arr)
    return arr;
}

Biggie([1,2,3,-3,-4,-4])

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function theyGoLowWeGoHigh(arr){
    var max = 0;
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }


    console.log(min)
    return max;
}

theyGoLowWeGoHigh([9,2,34,56,78,21,3,211])

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function giveOneTakeOne(arr){
var secondToLast = arr.length -2;

    for(var i = 0; i < arr.length; i++){
        if(i == secondToLast){
            console.log(arr[i])
        }
    }

    for(var i = 0; i < arr.length;i++){
        if(arr[i] % 2 !== 0){
            
            return arr[i];
        }
    }


}

giveOneTakeOne([2,23,45,6,2,12,34,5,13,2])

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    var doubledArr = [];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = arr[i] * 2
        doubledArr.push(sum);
    }
    return doubledArr;
}

doubleVision([1,2,3,4,5,6,7])

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function positiveVibes(arr){
    var last = arr.length -1;
    var sum = 0;
    var newArr = []

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i])
            
        }
    }

    for(var i = 0; i < newArr.length; i++){
        sum += newArr[i]
    }
    
    for(var i = 0; i < arr.length; i++){
        if(i == last){
            arr[i] = sum
        }
    }

    console.log(arr);
    return arr;

}

positiveVibes([1,2,3,-1,-3,-4,4])

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function letsGetEven(arr){
    var evenCount = 0;
    var oddCount = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            evenCount++;
            oddCount = 0;
            if(evenCount == 3){
                console.log('Even so more');
                evenCount = 0;
            }
        }else if(arr[i] % 2 !== 0){
            oddCount++;
            evenCount = 0;
            if(oddCount == 3){
                console.log('Thats odd...');
                oddCount = 0;

            }
        }

    }
}

letsGetEven([2,4,5,6,2,4])

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function theOdds(arr){

    for(var i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i] = arr[i] + 1;
        }
    }
    console.log(arr)
}

theOdds([1,2,3,4,5,6,7,8])

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function prevLength(arr){
    var str = "";
    var temp;
    var let;
    var arr2 = [];
    for(var i =0; i < arr.length; i++){
        if(i == 0){
            arr2.push(arr[i])
            str = arr[i];
            let = str.length;
            arr2.push(let)
        }
        else if(i == arr.length - 1) {
            console.log(arr2)
            return arr2;
        }
        else{
        str = arr[i];
        let = str.length;
        arr2.push(let)
        }
    }
}

prevLength(['those', 'dojo', 'mojojo'])

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function sevenUp(arr){
    var newArr = []
    var temp;
    for(var i = 0; i < arr.length; i++){
        temp = arr[i] + 7;
        newArr.push(temp);
    }
    console.log(newArr);
    return newArr;
}

sevenUp([1,2,3,4,5,6,7,8])

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse1(arr){

    var left = 0;
    var right = arr.length - 1;
    var temp = 0;

    while(left < right){


            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            console.log(arr)

        
        left++;
        right--;
    }
}

reverse1([1,2,3,4,5,6,7,8,9])

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negNums(arr){
var sum = 0;
var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if( arr[i] > 0){
            sum = arr[i] * -1;
            newArr.push(sum)
        }else(
            newArr.push(arr[i])
        )
    }
    console.log(newArr)
    return newArr;
}

negNums([1,-1,1,3,4,5,6,7,-9])

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
const isItFood = (arr) => arr.filter((item) => item === "food");

const checkMe = ["fod", "not food", "not food", "fod"];
const printMe = isItFood(checkMe);
let len;

printMe.length ? (len = printMe.length) : (len = 'Im hungry');
if (typeof len === "number") {
  for (let i = 0; i < len; i++) {
    console.log("Yummy");
  }
} else {
  console.log(len);
}

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function centerswap(arr){

    var left = 0;
    var right = arr.length - 1;
    var temp = 0;

    while(left < right){
        if(left == 0){
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            console.log(arr)
        }
        if(left == 3){
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            console.log(arr)
        }
        
        left++;
        right--;
    }
}

centerswap([9,1,1,5,1,8,1,1,7])


// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scales(arr, num){
    
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
        
    }
    console.log(arr)

}


scales([2,3,4,5,6,7], 5)
