package Java_Stack.homework.ObjectMaster;

public class Human {
    public int strength = 3;
    public int stealth = 3;
    public int intelligence = 3;
    public int health = 100;

    public Human() {

    }

    public int attack(Human human) {
        int action = health - strength;
        return action;
    }

    public static void humanTest(String[] args) {
        Human john = new Human();
        Human jake = new Human();

        john.attack(jake);
    }
}
