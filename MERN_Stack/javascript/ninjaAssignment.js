class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Hello my name is ${this.name}`)
    }

    showStats(){
        console.log(`Here are ${this.name}'s stats: speed = ${this.speed} , strength = ${this.strength}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(`Your Health is ${this.health}`)
    }
}

class Sensai extends Ninja{
    constructor(name){
        super(name)
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.widsom = 10
    }

    speakWidsom(){
        console.log(`name: ${this.name}, ${this.health} ${this.speed} ${this.strength} ${this.widsom}`)
        super.drinkSake()
        console.log("Don't worry about tomorrow")
    }

}




const newninja1 = new Ninja('mike', '100')
console.log(newninja1.sayName())
console.log(newninja1.showStats())


const mysensai = new Sensai('Kyle' )
console.log(mysensai.speakWidsom())