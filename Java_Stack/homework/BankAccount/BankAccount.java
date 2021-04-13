package Java_Stack.homework.BankAccount;

public class BankAccount {
    public String accountNumber = "";
    public Double balance = 0.0;
    public Double savingsBalance = 0.0;
    public static Integer counter = 0;
    public static Integer accountCount = 0;
    public Double total = 0.0;

    public BankAccount() {
        counter++;
        accountCount++;
        ranAccountNum();
    }

    public static Integer numOfAccounts() {
        return counter;
    }

    private Long ranAccountNum() {
        Long number = (long) Math.floor(Math.random() * 9_000_000_000L) + 1_000_000_000L;
        accountNumber = Long.toString(number);
        return number;
    }

    public String getAccount() {
        return accountNumber;
    }

    public Double getSavingAccount() {
        return savingsBalance;
    }

    public Double despoitMoney(Double money) {
        Double totalcash = balance + money;
        balance += totalcash;
        total += totalcash;
        return total;

    }

    public Double withDraw(Double money) {
        if (money > balance) {
            System.out.println("not enough money");
        }
        Double totalcash = balance -= money;
        balance -= totalcash;
        return balance;
    }

    public void showMoney() {
        System.out.println(balance);
        System.out.println(savingsBalance);
    }
}
