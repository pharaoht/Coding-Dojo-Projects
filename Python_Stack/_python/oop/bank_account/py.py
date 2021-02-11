class BankAccount:

    def __init__(self, int_rate, balance):
        self.balance = balance
        self.int_rate = int_rate

    def deposit(self, amount):
        self.balance += amount
        print(
            f" You deposited ${amount} your new account balance is ${self.balance}")
        return self

    def withdraw(self, amount):
        self.balance -= amount
        print(
            f" You withdrawn ${amount} your new account balance is ${self.balance}")
        return self

    def display_account_info(self):
        print(f" Your account balance is ${self.balance}")
        return self

    def yield_interest(self):
        print(f"your account interest is {self.int_rate}%")
        return self


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=3, balance=0)

    def make_deposit(self, amount):
        self.account.balance += amount
        print(f"{self.name}, you have ${self.account.balance} in your account")
        return self

    def make_withdrawl(self, amount):
        self.account.balance -= amount
        return self

    def display_user_balance(self):
        print(f'Account balance is {self.account.balance }')
        return self

    def transfer_money(self, other_user, amount):
        self.account.balance -= amount
        other_user += amount
        return self


user5 = User("joe", "e@e.com")
user5.make_deposit(599)

user1 = BankAccount(4, 0)
user1.deposit(1000).deposit(300).deposit(
    3021).withdraw(3344).display_account_info().yield_interest()

user2 = BankAccount(5, 0)
user2.deposit(300).deposit(405).withdraw(100).withdraw(12).withdraw(
    75).withdraw(80).yield_interest().display_account_info()
