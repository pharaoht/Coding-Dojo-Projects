class Black_belt_ninja{
    constructor(){
        this.cost = 4;
        this.power = 5;
        this.resilience = 4;
    }

    
}

class Red_belt_ninja extends Black_belt_ninja{

    constructor(){
        super()
        this.cost = 3;
        this.power = 3;
        this.resilience = 4;
    }
    attack(target){
        if (target instanceof Black_belt_ninja){
            console.log("Red belt ninja is attacking Black belt ninja")
        }else{
            console.log('must be instance of Red_belt_ninja')
        }
    }

}


class Hard_Algorithm extends Red_belt_ninja{
    constructor(){
        super()
        this.cost = 2;
        this.text = "Increase target's resilience by 3";
        this.stat = 'resilience';
        this.magnitude = 3;
    }

    play(target){
        if (target instanceof Red_belt_ninja){
            console.log(this.text)
            var total = this.resilience + this.magnitude;

            console.log("Red belt ninja resilience is at" + " " + total)
        }else{
            console.log('must be instance of Red_belt_ninja')
        }


    }
}

class Unhandled_Promise_Rejection extends Red_belt_ninja{
    constructor(){
        super()
        this.cost = 1;
        this.text = "reduce target's resilience by 2";
        this.stat = 'resilience';
        this.magnitude = 2;
    }

    play(target){
        if(target instanceof Red_belt_ninja){
            console.log(this.text)
            console.log(this.resilience + "*****")
            var total = this.resilience - this.magnitude;

            console.log("Red belt ninja resilience is at" + " " + total)
        }else{
            console.log('must be instance of Red_belt_ninja')
        }
    }
}

class Pair_Programming{
        constructor(){
        this.cost = 1;
        this.text = "increase target power by 2";
        this.stat = 'power';
        this.magnitude = 2;
    }

    play(target){
        if(target instanceof Red_belt_ninja){
            console.log(this.text)
            console.log(this.power + "*****")
            var total = this.power - this.magnitude;

            console.log("Red belt ninja power is at" + " " + total)
        }else{
            console.log('must be instance of Red_belt_ninja')
        }
    }
}


const ninja = new Red_belt_ninja();
const algo = new Hard_Algorithm();
console.log(algo.play(ninja))
const blackninja = new Black_belt_ninja();
const algo2 = new Unhandled_Promise_Rejection();
console.log(algo2.play(ninja))
const algo3 = new Pair_Programming();
console.log(algo3.play(ninja))
console.log(ninja.attack(blackninja))