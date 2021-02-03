//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
var arr = [];
function myfunction(){
    for (let i = 1; i < 255; i++) {
        arr.push(i)
        console.log(arr)
        
    }
    return arr
}

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function getEven(){
for (let i = 1; i <= 1000; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
    
}
}
//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function getOdd(){
    for(var i = 1; i <= 5000; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
    
}

getOdd()
//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function arrSums(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
    return sum;
}

arrSums([1,2,3,4,5])
//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function getMax(arr){
var max = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
    return max;

}

getMax([6,2,45,5,7])
//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
     avg = sum / arr.length;
     console.log(avg)
     return avg;

}

findAvg([3,4,7,8,9,0])
//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function ArrOdd(){
    var arr = []
    for(var i = 0; i <= 50; i++){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    console.log(arr)
    return arr
}
ArrOdd();
//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, y){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if( arr[i] > y){
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
    return newArr;
}

greaterThanY([3,4,5,6,7,65,34,1,-1,-43], 10)
//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr){
    for(var i = 0; i < arr.length; i++){
        var squareNum = arr[i] * arr[i];
        arr[i] = squareNum;
        
    }
    console.log(arr)
}

squares([2,3,4,5,6]);
//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0 ){
            arr[i] = 0;
        }
    }
    console.log(arr)
    return arr;
}

noNegatives([-1,-2,-3,-4,2,3,4,5,])

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function findMMA(arr){

    var min = arr[0];
    var max = 0;
    var avg = 0;
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    for(var i =0; i < arr.length; i++){
         sum += arr[i]
    }
    avg = sum / arr.length;

    arr = [];
    arr.push(max);
    arr.push(min);
    arr.push(avg);
    console.log(arr);
    return arr;

}

findMMA([23, 24, 28,97,46,85,23,14,52,21,1,5,-1])
//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapMeet(arr){
    var temp = arr[0];
    var end = arr.length -1;
    var start = arr[0]
    for(var i = 0; i < arr.length; i++){
        if(i == start){
            arr[i] = end
        }
        else if(i == end){
            console.log(temp)
            arr[i] = temp
        }


    }
    console.log(arr)
    return arr;
    
}

swapMeet([0,2,1,3,4,5,6,7])



//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function stringIt(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo'
        }
    }
    console.log(arr)
}

stringIt([-1,-2,-3,4,5,6,-1])



