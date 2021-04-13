package Java_Stack.homework.zooKeeper;

public class Gorilla extends Mamal {
    public int throwSomething() {
        int required = energy - 10;
        // display throwing and descrease energy by 5
        System.out.println("Throwing banana");
        return required;
    }

    public int eatBanana() {
        int required = energy + 10;
        // display eating and increase energy by 10
        System.out.println("Eating banana");
        return required;
    }

    public int climb() {
        // display climbing and decrease energy
        int required = energy - 10;
        // display eating and increase energy by 10
        System.out.println("climbing");
        return required;
    }

    public static void GorillaTest(String args[]) {
        Gorilla mamal = new Gorilla();
        mamal.displayEnergy();
        mamal.eatBanana();
        mamal.climb();
        mamal.throwSomething();
    }

}
