var num = 1;
var sum = 0;
var prevNum = 0;
var arr =[]
var i = 0;

for(var num = 1; num <= 5; num++){
    if(num == 1){
        sum = num + 0;
    }
    else {
        if(num <= arr.length){
            
        }
        sum = num + arr[i++]
    }
     arr.push(num)
    console.log(num, sum)
     i++;
}


for(var i = 0; i < 20; i++){
    //console.log(i)
}
/*
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
    */