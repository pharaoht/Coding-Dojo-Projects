package Java_Stack.homework.ObjectMaster;

public class Wizard extends Human {
    public int health = 50;
    public int intelligence = 8;

    public int heal(Human human) {
        int healing = human.health + intelligence;
        return healing;
    }

    public int fireball(Human human) {
        int fire = human.health - intelligence;
        return fire;
    }
}
