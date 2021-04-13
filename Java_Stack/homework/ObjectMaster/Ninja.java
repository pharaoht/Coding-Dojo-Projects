package Java_Stack.homework.ObjectMaster;

public class Ninja extends Human {
    public int stealth = 10;
    public int health = 100;

    public int steal(Human human) {
        int stealing = human.health - stealth;
        int after = stealth + stealing;
        return after;
    }

    public int runaway() {
        int action = health - 10;
        return action;
    }
}
