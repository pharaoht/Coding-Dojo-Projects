var testArr = [6,3,5,1,2,4]
var sum = 0;

for(var i =0; i < testArr.length; i++){
    sum += testArr[i];

    console.log('Num:' + testArr[i] + ' ' + 'Sum:' + sum)
}


//Challenge 2
var arr = [0,3,10,3,8,20];
var sum = 0;

for (let i = 0; i < arr.length; i++) {
    
    sum = arr[i] * i;

    console.log('Sum:' + sum)
}