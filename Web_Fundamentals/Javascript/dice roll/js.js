var num;
function rollOne(){
    
    num = Math.floor(Math.random() * 7) + 1;
    return num;
}

function playFives(num){
    for(var i = 0; i < num; i++){
        sum = rollOne();
        if(sum == 5){
            console.log("your number was" + sum + "thats good luck")
        }
    }
}

function playStatistics(){
    var lowest = 0;
    var highest = 0;
    var num;
    for(var i = 0; i < 8; i++){
        if(i == 0){
            num = rollOne();
            lowest = num;
            highest = num;
            console.log(lowest + 'first lowest')
            console.log(highest + "first highest")
        }
        else{
            num = rollOne();
            if(num < lowest){
                lowest = num;
                console.log(lowest + " new low numer!")
            }else if(num > highest){
                highest = num;
                console.log(highest + "new high number! ")

            }
        }
        
    }
    console.log('the highest value is ' + highest + " " + "the lowest value is " + lowest)
}

rollOne();
playFives(num);
playStatistics();