package Java_Stack.homework;

public class ProjectClass {
    private String name;
    private String desc;

    public ProjectClass(String name, String desc) {
        this.name = name;
        this.desc = desc;

    }

    public ProjectClass(String name) {
        this.name = name;

    }

    public ProjectClass() {

    }

    // getter
    public String getName() {
        return name;
    }

    public void setNewName(String newName) {
        this.name = newName;
    }

    private String elevatorPitch() {
        String re = name + ":" + desc;
        return System.out.print(re);
    }

    public static void ProjectTest(String[] args) {
        ProjectClass test = new ProjectClass("John", "Runs");
        ProjectClass test2 = new ProjectClass("John");
        ProjectClass test3 = new ProjectClass();
        test.getName();
        test.setNewName("John");
        test.elevatorPitch();

    }
}
