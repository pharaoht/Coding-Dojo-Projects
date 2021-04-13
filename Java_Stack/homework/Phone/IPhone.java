package Java_Stack.homework.Phone;

public class IPhone extends Phone implements Ringable {
    public String versionNumber;
    public Integer batteryPercentage;
    public String carrier;
    public String ringTone;

    public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }

    @Override
    public String ring() {
        return "Ring Ring";
    }

    @Override
    public String unlock() {
        return "Unlocking";
    }

    @Override
    public void displayInfo() {
        System.out.println(versionNumber);
        System.out.println(batteryPercentage);
        System.out.println(carrier);
    }
}
