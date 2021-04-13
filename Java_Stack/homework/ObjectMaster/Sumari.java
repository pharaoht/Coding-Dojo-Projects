package Java_Stack.homework.ObjectMaster;

public class Sumari extends Human {
    public int health = 200;
    public int counter = 0;

    public Sumari() {
        counter++;
    }

    public int deathBlow(Human human) {
        int action = human.health - human.health;
        int action1 = health - (health / 2);
        System.out.println(action1);
        return action;
    }

    public int meditate(Human human) {
        int action = health + (health / 2);
        return action;
    }

    public int howMany(Human human) {

        return counter;
    }

}
