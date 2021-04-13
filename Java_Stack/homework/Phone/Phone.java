package Java_Stack.homework.Phone;

public abstract class Phone {
    private String versionNumber;
    private int batteryPercentage;
    private String carrier;
    private String ringTone;

    public Phone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        this.versionNumber = versionNumber;
        this.batteryPercentage = batteryPercentage;
        this.carrier = carrier;
        this.ringTone = ringTone;
    }

    String ring() {
        return "Ring Ring";
    }

    String unlock() {
        return "Phone open";
    }

    // abstract method. This method will be implemented by the subclasses
    public abstract void displayInfo();
    // getters and setters removed for brevity. Please implement them yourself

    public interface Ringable {

    }

    public static void phoneTester(String[] args) {
        Galaxy s9 = new Galaxy("12132", 98, "Verzion", "Ring");

    }
}
