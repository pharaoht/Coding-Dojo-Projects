package Java_Stack.homework.zooKeeper;

import jdk.internal.jshell.tool.resources.l10n;

public class Bat extends Mamal {
    public int energy = 500;

    public int fly() {
        // print the sound a bat taking off and decrease its energy by 50.
        int required = energy - 50;
        // display throwing and descrease energy by 5
        System.out.println("Flying");
        return required;
    }

    public int eatHumans() {
        // print the so- well, never mind, just increase its energy by 25.
        int required = energy - 5;
        // display throwing and descrease energy by 5
        System.out.println("Eatiing");
        return required;
    }

    public int attackTown() {
        // print the sound of a town on fire and decrease its energy by 100.
        int required = energy - 100;
        // display throwing and descrease energy by 5
        System.out.println("Attacking");
        return required;
    }

    public static void BatTest(String[] args) {
        Bat bat1 = new Bat();
        bat1.attackTown();
        bat1.attackTown();
        bat1.attackTown();
        bat1.eatHumans();
        bat1.eatHumans();
        bat1.fly();
        bat1.fly();
        // a bat and have it attack three towns,
        // eat two humans,
        // and fly twice.
    }
}
