// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num){
    var arr = [];
    var sum = 0;
    for(var i = 0; i <= num; i++){
        arr.push(i);
        
    }
    for(var i = 1; i < arr.length; i++){
        sum += arr[i];
        
    }
    console.log(sum)

}

sigma(3);

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num){
    var arr = [];
    var sum = 1;
    for(var i = 1; i <= num; i++){
        arr.push(i);
        
    }
    for(var i = 0; i < arr.length; i++){
        sum *= arr[i];
        
    }
    console.log(sum)

}

factorial(5);
// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToNone(arr){
    var end = arr.length - 2;
    if(arr.length < 3){
        return null;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(end)
        return end
    }
}


secondToNone([1,2,3,4,5,6])
// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nth(arr,num){
    
    var end = arr.length - num;
    if(arr.length < num){
        return null;
    }

    for(var i = 0; i < arr.length; i++){
        console.log(end)
        return end;
    }
    
}

nth([1,2,3,4,5,5,2,6,7,8,9,9], 5)

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function second(arr){
    var secBig = arr.length - 2;

    if(arr.length < secBig){
        return null;
    }
    //sort the numbers
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j +1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr[secBig])
    return arr[secBig];
    
}   


second([54,67,23,12,56,90,8,1,23,45])

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function iSeeTwo(arr){
    var newa = []
    for(var i = 0; i < arr.length; i++){
        newa.push(arr[i]);
        newa.push(arr[i])
    }
    console.log(newa)
}

iSeeTwo([1,2,3,4,5,6,7,8])