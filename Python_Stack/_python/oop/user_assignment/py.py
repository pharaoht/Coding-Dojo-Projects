class User:
    account_balance = 0
    name = ""

    def __init__(self, name_input, account_balance_input):
        pass

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f'Account balance is {self.account_balance}')
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user += amount
        return self


user1 = User("joe")
user2 = User()
user3 = User()

user1.make_deposit().make_deposit().make_deposit(
).make_withdrawl().display_user_balance()

user2.make_deposit().make_deposit().make_withdrawl(
).make_withdrawl().display_user_balance()

user3.make_deposit().make_withdrawl().make_withdrawl().make_withdrawl()

user1.transfer_money(user3, 400).display_user_balance()
user3.display_user_balance()
